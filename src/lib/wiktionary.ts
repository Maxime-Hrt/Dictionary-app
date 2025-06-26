import * as cheerio from 'cheerio';
import { Definition, Etymology, Pronunciation, Synonyms, WiktionaryPage } from '../type/wiktionary';

const extractKhmerSection = (html: string) => {
    const splitedHtml = html.split('<div class="mw-heading mw-heading2">');
    if (splitedHtml.length <= 2) {
        return html;
    }
    const khmerHtml = splitedHtml.slice(0, 2).join('<div class="mw-heading mw-heading2">');
    return khmerHtml + '</div>';
};

const extractPronunciation = (html: string): Pronunciation => {
    const $ = cheerio.load(html);
    const pronunciationData: Pronunciation = {
        ipa: [] as string[],
        romanization: [] as string[],
        orthographic: [] as string[],
        phonetic: [] as string[]
    };

    // Parse the pronunciation table if it exists
    $('table').each((i, table) => {
        const $table = $(table);
        const rows = $table.find('tr');
        rows.each((j, row) => {
            const $row = $(row);
            const labelCell = $row.find('td, th').first();
            const valueCell = $row.find('td, th').eq(1);
            if (!labelCell.length || !valueCell.length) return;
            const label = labelCell.text().trim().toLowerCase();

            // Orthographic: Khmer only
            if (label.includes('orthographic')) {
                valueCell.find('span.Khmr[lang="km"]').each((i, el) => {
                    const text = $(el).text().trim();
                    if (text && !pronunciationData.orthographic?.includes(text)) {
                        pronunciationData.orthographic?.push(text);
                    }
                });
            }
            // Phonemic: Khmer + IPA
            else if (label.includes('phonemic')) {
                valueCell.find('span.Khmr[lang="km"]').each((i, el) => {
                    const text = $(el).text().trim();
                    if (text && !pronunciationData.phonetic?.includes(text)) {
                        pronunciationData.phonetic?.push(text);
                    }
                });
                valueCell.find('span.IPA[lang="km"]').each((i, el) => {
                    const text = $(el).text().trim();
                    if (text && !pronunciationData.phonetic?.includes(text)) {
                        pronunciationData.phonetic?.push(text);
                    }
                });
            }
            // WT romanisation: span.IPA but it's romanization
            else if (label.includes('romanisation') || label.includes('romanization')) {
                valueCell.find('span.IPA[lang="km"]').each((i, el) => {
                    const text = $(el).text().trim();
                    if (text && !pronunciationData.romanization?.includes(text)) {
                        pronunciationData.romanization?.push(text);
                    }
                });
            }
            // IPA: span.IPA
            else if (label.includes('ipa')) {
                valueCell.find('span.IPA[lang="km"]').each((i, el) => {
                    const text = $(el).text().trim();
                    if (text && !pronunciationData.ipa?.includes(text)) {
                        pronunciationData.ipa?.push(text);
                    }
                });
            }
        });
    });

    // Remove empty arrays
    const result: Pronunciation = {};
    (Object.keys(pronunciationData) as Array<keyof Pronunciation>).forEach(key => {
        if (pronunciationData[key]?.length) {
            result[key] = pronunciationData[key];
        }
    });

    return result;
};


const extractEtymology = (html: string): Etymology => {
    const $ = cheerio.load(html);
    const etymologyHeading = $('h3#Etymology');
    if (etymologyHeading.length === 0) {
        return '';
    }
    // Get the next <p> sibling after the heading's parent
    let ety = null;
    let node = etymologyHeading.parent().next();
    while (node.length) {
        if (node[0].tagName === 'p') {
            ety = node.text().trim();
            break;
        }
        node = node.next();
    }
    return ety || '';
};

const extractDefinition = (html: string): Definition => {
    const $ = cheerio.load(html);
    const definitions: Definition = {};
    $('h3').each((_, el) => {
        const id = $(el).attr('id');
        let node = $(el).parent().next();
        while (node.length) {
            if (node[0].tagName === 'ol') {
                const defs = node.find('li').map((i, el) => $(el).text().trim()).get();
                if (defs.length) definitions[id || ''] = defs;
                break;
            }
            // Stop if we hit another heading
            if (node.find('h3, h4').length) break;
            node = node.next();
        }
    });
    return definitions;
};

const extractSynonyms = (html: string): Synonyms => {
    const $ = cheerio.load(html);
    const synonyms: Synonyms = {};
    $('h3').each((i, el) => {
        const id = $(el).attr('id');
        let node = $(el).parent().next();
        while (node.length) {
            if (node[0].tagName === 'ul') {
                const terms = node.find('span.Khmr a').map((i, el) => $(el).text().trim()).get();
                if (terms.length) synonyms[id || ''] = terms;
                break;
            }
            // Stop if we hit another heading
            if (node.find('h3, h4').length) break;
            node = node.next();
        }
    });
    return synonyms;
};

const getWiktionaryPage = async (word: string): Promise<string | null> => {
    const response = await fetch(`https://en.wiktionary.org/w/api.php?action=parse&page=${word}&prop=text&format=json`);
    const data = await response.json();
    return data.parse?.text['*'] || null;
};

export const extractWiktionaryPage = async (word: string): Promise<WiktionaryPage | null> => {
    const html = await getWiktionaryPage(word);
    if (!html) {
        throw new Error("No data found");
    }
    const khmerHtml = extractKhmerSection(html);
    if (!khmerHtml) {
        throw new Error("No data found");
    }
    const pronunciation = extractPronunciation(khmerHtml);
    if (!pronunciation.ipa) {
        throw new Error("Wrong language");
    }
    const etymology = extractEtymology(khmerHtml);
    const definitions = extractDefinition(khmerHtml);
    const synonyms = extractSynonyms(khmerHtml);
    return { pronunciation, etymology, definitions, synonyms };
};
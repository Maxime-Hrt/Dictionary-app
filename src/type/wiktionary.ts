export interface Pronunciation {
    ipa?: string[];
    romanization?: string[];
    orthographic?: string[];
    phonetic?: string[];
}

export type Etymology = string

export type Definition = Record<string, string[]>

export type Synonyms = Record<string, string[]>

export interface WiktionaryPage {
    pronunciation: Pronunciation;
    etymology: Etymology;
    definitions: Definition;
    synonyms: Synonyms;
}
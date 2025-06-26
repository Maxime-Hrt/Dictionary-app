import { WiktionaryPage } from "@/type/wiktionary"
import { ScrollView, View } from "react-native"
import Definitions from "./content/Definitions"
import Etymology from "./content/Etymology"
import Pronunciation from "./content/Pronunciation"
import Synonyms from "./content/Synonyms"
import Title from "./content/Title"

interface ContentProps {
    input: string
    data: WiktionaryPage | null
}

const Content = ({ input, data }: ContentProps) => {
    return (
        <ScrollView className="flex-col pt-2" showsVerticalScrollIndicator={false}>
            <Title input={input} />
            <View className="h-[1px] bg-gray-300 dark:bg-gray-700 mt-1.5" />
            { data?.etymology && (
                <Etymology data={data.etymology} className="mt-4" />
            )}
            { data?.pronunciation && Object.keys(data.pronunciation).length > 0 && (
                <Pronunciation data={data.pronunciation} className="mt-4" />
            )}
            { data?.definitions && Object.keys(data.definitions).length > 0 && (
                <Definitions data={data.definitions} className="mt-4" />
            )}
            { data?.synonyms && Object.keys(data.synonyms).length > 0 && (
                <Synonyms data={data.synonyms} className="mt-4" />
            )}
            <View className="h-[20px]" />
        </ScrollView>
    )
}

export default Content
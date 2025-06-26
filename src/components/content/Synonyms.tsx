import { Synonyms as SynonymsType } from "@/type/wiktionary"
import { Text, View } from "react-native"

interface SynonymsProps {
    data: SynonymsType
    className?: string
}

const Synonyms = ({ data, className }: SynonymsProps) => {
    return (
        <View className={className}>
            {Object.keys(data).map((key, index) => (
                <View key={index} className="flex-col gap-y-2">
                    <Text className="text-2xl font-bold text-light-title dark:text-dark-title">{key.split('_').join(' ')}</Text>
                    <View className="flex-col gap-y-2">
                        {data[key].map((item, index) => (
                            <Text key={index} className="text-xl text-light-title dark:text-dark-title">{item}</Text>
                        ))}
                    </View>
                </View>
            ))}
        </View>
    )
}

export default Synonyms
import { Pronunciation as PronunciationType } from "@/type/wiktionary"
import { Text, View } from "react-native"

interface PronunciationProps {
    data: PronunciationType
    className?: string
}

const Pronunciation = ({ data, className }: PronunciationProps) => {
    return (
        <View className={`flex-col gap-y-3 ${className}`}>
            <Text className="text-2xl font-bold text-light-title dark:text-dark-title">
                Pronunciation
            </Text>
            <View className="border border-gray-300 dark:border-gray-700 rounded-md w-full overflow-hidden flex-col">
                {data?.orthographic && (
                    <View className="flex-row items-center gap-x-4 h-20 bg-light-bgColor2 dark:bg-dark-bgColor2 py-2">
                        <Text
                            style={{ fontFamily: "Khmer_400Regular" }}
                            className="text-xl text-light-title dark:text-dark-title mt-2 pl-2 w-1/3 text-center"
                        >
                            Orthographic
                        </Text>
                        <Text style={{ fontFamily: "Khmer_400Regular" }} className="text-xl text-light-title dark:text-dark-title mt-2 pr-2 w-2/3 text-center">
                            {data.orthographic.join(' ')}
                        </Text>
                    </View>
                )}
                {data?.phonetic && (
                    <View className="flex-row items-center gap-x-4 h-20 bg-light-bgColor2 dark:bg-dark-bgColor2 py-2 mt-1">
                        <Text
                            style={{ fontFamily: "Khmer_400Regular" }}
                            className="text-xl text-light-title dark:text-dark-title mt-2 pl-2 w-1/3 text-center"
                        >
                            Phonetic
                        </Text>
                        <View className="text-xl text-light-title dark:text-dark-title mt-2 pr-2 w-2/3 flex-col items-center justify-center">
                            {data.phonetic.map((word, index) => (
                                <Text key={index} style={{ fontFamily: "Khmer_400Regular" }} className="text-xl text-light-title dark:text-dark-title">
                                    {word}
                                </Text>
                            ))}
                        </View>
                    </View>
                )}
                {data?.romanization && (
                    <View className="flex-row items-center gap-x-4 h-20 bg-light-bgColor2 dark:bg-dark-bgColor2 py-2 mt-1">
                        <Text
                            style={{ fontFamily: "Khmer_400Regular" }}
                            className="text-xl text-light-title dark:text-dark-title mt-2 pl-2 w-1/3 text-center"
                        >
                            WT romanization
                        </Text>
                        <Text style={{ fontFamily: "Khmer_400Regular" }} className="text-xl text-light-title dark:text-dark-title mt-2 pr-2 w-2/3 text-center">
                            {data.romanization.join(' ')}
                        </Text>
                    </View>
                )}
                {data?.ipa && (
                    <View className="flex-row items-center gap-x-4 h-20 bg-light-bgColor2 dark:bg-dark-bgColor2 py-2 mt-1">
                        <Text
                            style={{ fontFamily: "Khmer_400Regular" }}
                            className="text-xl text-light-title dark:text-dark-title mt-2 pl-2 w-1/3 text-center"
                        >
                            (standard) IPA
                        </Text>
                        <Text style={{ fontFamily: "Khmer_400Regular" }} className="text-xl text-light-title dark:text-dark-title mt-2 pr-2 w-2/3 text-center">
                            {data.ipa.join(' ')}
                        </Text>
                    </View>
                )}
            </View>
            {/* <Text className="text-xl text-light-title dark:text-dark-title">
                {JSON.stringify(data)}
            </Text> */}
        </View>
    )
}

export default Pronunciation
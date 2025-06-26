import { Text, View } from "react-native"
import SearchBar from "./SearchBar"

interface WelcomeViewProps {
    onSearch: (input: string) => Promise<void>
}

const WelcomeView = ({ onSearch }: WelcomeViewProps) => {
    return (
        <View className="flex-1 h-full mt-4">
            <View className="flex-col gap-y-6">
                <Text className="text-2xl text-center font-bold text-light-title dark:text-dark-title">
                    Welcome to Khmer Dictionary
                </Text>

                <View className="w-full border-2 border-blue-500/30 bg-blue-500/20 p-4 flex-col gap-y-4">
                    <Text style={{fontSize: 16, fontWeight: "semibold"}} className="text-black dark:text-white text-center">
                        <Text className="text-blue-600 font-bold">14,732</Text> entries with English definitions from Khmer Wiktionary.
                    </Text>
                    <Text style={{fontSize: 16}} className="text-blue-600 text-center">
                        <Text className="font-bold text-black dark:text-white">Browse: </Text> Khmer IPA, Khmer Wiktionary, New Entries, and more.
                    </Text>
                    <SearchBar className="mt-2" onSearch={onSearch} />
                </View>
                
                <View className="flex-col gap-y-6">
                    <Text style={{fontSize: 16}} className="text-black dark:text-white text-center leading-6">
                        Your comprehensive mobile dictionary for the Khmer language, powered by{" "}
                        <Text className="text-blue-600 dark:text-blue-400 font-semibold">Wiktionary</Text>
                    </Text>

                    <View className="">
                        <Text className="text-lg font-semibold mb-2 text-black dark:text-white">
                            Features:
                        </Text>
                        <View className="space-y-2">
                            <Text className="text-black dark:text-white flex-row items-center">
                                • Khmer-English translations with detailed explanations
                            </Text>
                            <Text className="text-black dark:text-white flex-row items-center">
                                • Comprehensive word definitions and usage examples
                            </Text>
                            <Text className="text-black dark:text-white flex-row items-center">
                                • Clear pronunciations and IPA phonetic notations
                            </Text>
                            <Text className="text-black dark:text-white flex-row items-center">
                                • Detailed etymology and historical word origins
                            </Text>
                        </View>
                    </View>
                </View>

                <Text className="text-sm text-center text-gray-600 dark:text-gray-400 italic px-4">
                    All content is provided under Creative Commons Attribution-ShareAlike 4.0 International License and GNU Free Documentation License.
                </Text>
            </View>
        </View>
    )
}

export default WelcomeView
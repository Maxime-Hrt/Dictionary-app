import { ColorConfiguration } from "@/config/Color";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import { ReactNode, useRef, useState } from "react";
import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";

interface SearchLayoutProps {
    children: ReactNode
    onSearch: (input: string) => Promise<void>
}

const SearchLayout = ({ children, onSearch }: SearchLayoutProps) => {
    const { colorScheme } = useColorScheme()

    const [search, setSearch] = useState<boolean>(false)
    const [input, setInput] = useState<string>("")
    const inputRef = useRef<TextInput>(null)

    const handleSearchPress = () => {
        setSearch(true)
        setTimeout(() => {
            inputRef.current?.focus()
        }, 100)
    }

    return (
        <SafeAreaView className="flex-col bg-light-bgColor2 dark:bg-dark-bgColor2 h-full">
            <View className="flex-row items-center justify-between gap-x-2 px-4 py-2 border-b border-b-gray-300 dark:border-b-gray-600">
                {search ? (
                    <>
                        <TextInput
                            ref={inputRef}
                            onChangeText={setInput}
                            className="flex-1 border-2 border-blue-600 py-2 px-3 bg-white text-black"
                            placeholder="Search"
                            placeholderTextColor="#9CA3AF"
                            onSubmitEditing={() => onSearch(input).then(() => {
                                setSearch(false)
                                setInput("")
                            })}
                        />
                        <Pressable onPress={() => setSearch(!search)}>
                            <Ionicons
                                name="close"
                                size={24}
                                color={colorScheme === "light" ? ColorConfiguration.light.title : ColorConfiguration.dark.title}
                            />
                        </Pressable>
                    </>
                ) : (
                    <>
                        <Text className="text-2xl font-bold text-light-title dark:text-dark-title py-1">Khmer Dictionary</Text>
                        <Pressable onPress={handleSearchPress}>
                            <Ionicons
                                name="search"
                                size={24}
                                color={colorScheme === "light" ? ColorConfiguration.light.title : ColorConfiguration.dark.title}
                            />
                        </Pressable>
                    </>
                )}
            </View>
            <View className="flex-1 bg-light-bgColor dark:bg-dark-bgColor px-4">
                {children}
            </View>
        </SafeAreaView>
    )
}

export default SearchLayout;
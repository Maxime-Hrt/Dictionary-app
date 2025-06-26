import { useRef, useState } from "react"
import { TextInput, View } from "react-native"

interface SearchBarProps {
    onSearch: (input: string) => Promise<void>
    className?: string
}

const SearchBar = ({ onSearch, className }: SearchBarProps) => {
    const [input, setInput] = useState<string>("")
    const inputRef = useRef<TextInput>(null)

    return (
        <View className={`flex-row items-center justify-between ${className}`}>
            <TextInput
                ref={inputRef}
                onChangeText={setInput}
                className="flex-1 border-2 border-blue-600 py-2 px-3 bg-white text-black"
                placeholder="Search"
                placeholderTextColor="#9CA3AF"
                onSubmitEditing={() => onSearch(input).then(() => {
                    setInput("")
                })}
            />
        </View>
    )
}

export default SearchBar
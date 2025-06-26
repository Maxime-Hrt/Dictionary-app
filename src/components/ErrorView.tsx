import { Text, View } from "react-native"

interface ErrorViewProps {
    error: string | null
}

const ErrorView = ({ error }: ErrorViewProps) => {
    const errorMessageList = [
        "Wrong language",
        "No data found",
    ]
    return (
        <View className="flex-1 items-center justify-center h-full">
            { error === "Wrong language" && (
                <View className="flex-col items-center justify-center">
                    <Text className="text-2xl font-bold text-light-title dark:text-dark-title">Wrong language</Text>
                    <Text className="text-light-title dark:text-dark-title">Please enter a khmer word</Text>
                </View>
            )}
            { error === "No data found" && (
                <View className="flex-col items-center justify-center">
                    <Text className="text-2xl font-bold text-light-title dark:text-dark-title">No data found</Text>
                    <Text className="text-light-title dark:text-dark-title">Please enter a valid word</Text>
                </View>
            )}
            { error && !errorMessageList.includes(error) && (
                <Text>{error}</Text>
            )}
        </View>
    )
}

export default ErrorView
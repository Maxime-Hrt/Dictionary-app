import { ColorConfiguration } from "@/config/Color"
import { ActivityIndicator, View } from "react-native"

interface LoadingViewProps {
    colorScheme: "light" | "dark"
}

const LoadingView = ({ colorScheme }: LoadingViewProps) => {
    return (
        <View className="flex-1 items-center justify-center h-full">
            <ActivityIndicator size="large" color={colorScheme === "light" ? ColorConfiguration.light.title : ColorConfiguration.dark.title} />
        </View>
    )
}

export default LoadingView
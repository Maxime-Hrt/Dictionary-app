import { useColorScheme } from "nativewind";
import { SafeAreaView, Switch, Text, View } from "react-native";

export default function Settings() {
    const { colorScheme, toggleColorScheme } = useColorScheme();

    return (
        <SafeAreaView className="flex-1 p-4">
            <View className="flex-row items-center justify-between dark:bg-gray-800 bg-white">
                <Text className="text-lg dark:text-white">Dark Mode</Text>
                <Switch
                    value={colorScheme === "dark"}
                    onValueChange={toggleColorScheme}
                />
            </View>
        </SafeAreaView>
    )
}   
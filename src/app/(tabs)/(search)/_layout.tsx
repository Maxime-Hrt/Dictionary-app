import { ColorConfiguration } from "@/config/Color";
import { Stack } from "expo-router";
import { useColorScheme } from "nativewind";

export default function SearchLayout() {
    const { colorScheme } = useColorScheme();

    return (
        <Stack 
            screenOptions={{ 
                headerShown: false,
                contentStyle: {
                    backgroundColor: colorScheme === "dark" ? ColorConfiguration.dark.background : ColorConfiguration.light.background
                }
            }}>
            <Stack.Screen name="index" options={{ title: "Search" }} />
            <Stack.Screen name="[id]" options={{ title: "Search Result" }} />
        </Stack>
    )
}
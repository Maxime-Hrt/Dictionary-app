import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useColorScheme } from "nativewind";

export const unstable_settings = {
    initialRouteName: "/(tabs)/(search)"
}

export default function TabsLayout() {
    const { colorScheme } = useColorScheme()

    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: colorScheme === "dark" ? "#131414" : "#fff",
                borderTopColor: colorScheme === "dark" ? "#717171" : "#A1A1A1",
            },
            // tabBarActiveTintColor: colorScheme === "dark" ? ColorConfiguration.dark.button : ColorConfiguration.light.button,
            // tabBarInactiveTintColor: colorScheme === "dark" ? ColorConfiguration.dark.placeholder : ColorConfiguration.light.placeholder,
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    href: null
                }}
            />
            <Tabs.Screen 
                name="(search)" 
                options={{
                    title: "Search",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="search" color={color} size={size} />
                    )
                }}
            />
            <Tabs.Screen
                name="(favorite)"
                options={{
                    title: "Favorite",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="star" color={color} size={size} />
                    )
                }}
            />
            <Tabs.Screen
                name="(settings)"
                options={{
                    title: "Settings",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="settings" color={color} size={size} />
                    )
                }}
            />
        </Tabs>
    );
}
import AndroidConfig from "@/config/Android";
import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SearchResult() {
    const { id } = useLocalSearchParams();
    return (
        <SafeAreaView style={AndroidConfig.AndroidSafeArea}>
            <Text>{id}</Text>
        </SafeAreaView>
    )
}
import { Etymology as EtymologyType } from "@/type/wiktionary"
import { Text, View } from "react-native"

interface EtymologyProps {
    data: EtymologyType
    className?: string
}

const Etymology = ({ data, className }: EtymologyProps) => {
    return (
        <View className={`flex-col gap-y-3 ${className}`}>
            <Text className="text-2xl font-bold text-light-title dark:text-dark-title">
                Etymology
            </Text>
            <Text className="text-xl text-light-title dark:text-dark-title">
                {data}
            </Text>
        </View>
    )
}

export default Etymology
import { Definition as DefinitionType } from "@/type/wiktionary";
import { Text, View } from "react-native";

interface DefinitionProps {
    data: DefinitionType
    className?: string
}

const Definitions = ({ data, className }: DefinitionProps) => {
    return (
        <View className={`flex-col gap-y-3 ${className}`}>
            { Object.keys(data).map((key, index) => (
                <View key={index} className="flex-col gap-y-2">
                    <Text
                        className="text-2xl font-bold text-light-title dark:text-dark-title"
                    >
                        {key.split('_').join(' ')}
                    </Text>
                    <View className="flex-col gap-y-2">
                        {data[key].map((item, index) => (
                            <View key={index} className="flex-row gap-x-1">
                                <Text style={{ fontFamily: "Khmer_400Regular" }} className="text-xl text-light-title dark:text-dark-title pl-2">
                                    {index + 1}.
                                </Text>
                                <Text style={{ fontFamily: "Khmer_400Regular" }} className="text-xl text-light-title dark:text-dark-title pl-2">
                                    {item}
                                </Text>
                            </View>
                        ))}
                    </View>
                </View>
            ))}
        </View>
    )
}

export default Definitions
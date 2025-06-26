import { Text, View } from "react-native"

interface TitleProps {
    input: string
}

const Title = ({ input }: TitleProps) => {
    return (
        <View className="flex-row items-center gap-x-2">
            <Text style={{ fontFamily: "Moul_400Regular" }} className="text-4xl text-light-title dark:text-dark-title pt-7">
                {input}
            </Text>
            <Text style={{ fontFamily: "Khmer_400Regular" }} className="text-4xl text-light-title dark:text-dark-title pt-7">
                -
            </Text>
            <Text style={{ fontFamily: "Khmer_400Regular" }} className="text-4xl text-light-title dark:text-dark-title pt-7">
                {input}
            </Text>
        </View>
    )
}

export default Title
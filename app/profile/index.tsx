import { useLocalSearchParams } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import { NativeWindStyleSheet } from "nativewind";


const profile = () => {
    const { id } = useLocalSearchParams();

    return(
        <View className="flex h-full justify-center  bg-black">
            <Text className="text-white text-center text-6xl min-[320px]:text-3xl">Who's watching?</Text>
            {/* AvatarCard */}
            {/* AvatarCard */}
            {/* AvatarCard */}
            {/* AvatarCard */}

            <TouchableOpacity
                className='self-center'
                >
                    <Text className="text-gray-400 min-[320px]:text-sm">Manage Profile</Text>
            </TouchableOpacity>

        </View>
    )
}

export default profile;
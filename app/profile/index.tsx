import { useLocalSearchParams, router } from "expo-router";
import { View, Text, TouchableOpacity} from "react-native";
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
        onPress={() => router.navigate({pathname: "/profile/dashboard/[id]", params: { id: "" }})
      }
      className='bg-white rounded-full p-2 mt-5'
      >
        <Text>Open Jetflix</Text>
      </TouchableOpacity>

        </View>
    )
}

export default profile;
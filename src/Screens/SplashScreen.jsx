import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";

const SplashScreen = ({ navigation }) => {
    // const {user} = useAuth();
    const user = false;
    useEffect(() => {
        setTimeout(() => {
            if (user) navigation.replace("Home");
            else navigation.replace("Login");
        }, 2000);
    }, []);
    return (
        <View className="flex-1 relative">
            <Image
                blurRadius={40}
                source={require("../../assets/images/wallpaper.avif")}
                className="absolute w-full h-full"
            />
            <View className="flex-1 justify-center items-center">
                <Text className="text-2xl font-bold text-white">
                    Welcome Foodie Genie
                </Text>
            </View>
        </View>
    );
};

export default SplashScreen;

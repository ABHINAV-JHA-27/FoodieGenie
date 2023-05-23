import React from "react";
import { Image, Text, View } from "react-native";

const SplashScreen = ({ navigation }) => {
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

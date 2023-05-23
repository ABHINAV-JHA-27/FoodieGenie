import { View, Text } from "react-native";
import React, { useEffect } from "react";

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace("Home");
        }, 2000);
    }, []);
    return (
        <View>
            <Text>Splash Screen</Text>
        </View>
    );
};

export default SplashScreen;

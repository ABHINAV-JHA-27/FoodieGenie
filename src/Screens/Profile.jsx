import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import React from "react";
import {
    Bars3CenterLeftIcon,
    ChevronLeftIcon,
} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
    const navigation = useNavigation();
    return (
        <View className="flex-1 relative">
            <Image
                blurRadius={40}
                source={require("../../assets/images/wallpaper.avif")}
                className="absolute w-full h-full"
            />
            <SafeAreaView className="flex-1">
                <View className="flex-row justify-between items-center mx-4">
                    <TouchableOpacity
                        className="bg-white shadow-md rounded-2xl p-3"
                        onPress={() => navigation.goBack()}
                    >
                        <ChevronLeftIcon size="23" stroke={50} color="black" />
                    </TouchableOpacity>
                </View>
                <View className="flex-col items-center space-y-5">
                    <View
                        className="rounded-[100px] justify-center items-center"
                        style={{
                            backgroundColor: "rgba(255,255,255,0.7)",
                            padding: 3,
                            width: 150,
                            height: 150,
                        }}
                    >
                        <Image
                            className="rounded-[100px]"
                            source={require("../../assets/images/me.png")}
                            style={{
                                width: 145,
                                height: 145,
                            }}
                        />
                    </View>
                    <Text>{}</Text>
                    <TouchableOpacity
                        className="rounded-2xl"
                        style={{
                            backgroundColor: "rgba(255,255,255,0.7)",
                            width: Dimensions.get("window").width * 0.8,
                            padding: 10,
                        }}
                        onpr
                    >
                        <Text
                            style={{
                                fontSize: 22,
                                textAlign: "center",
                                color: "gray",
                            }}
                        >
                            My Account
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="rounded-2xl"
                        style={{
                            backgroundColor: "rgba(255,255,255,0.7)",
                            width: Dimensions.get("window").width * 0.8,
                            padding: 10,
                        }}
                        onpr
                    >
                        <Text
                            style={{
                                fontSize: 22,
                                textAlign: "center",
                                color: "gray",
                            }}
                        >
                            Wishlist
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="rounded-2xl"
                        style={{
                            backgroundColor: "rgba(255,255,255,0.7)",
                            width: Dimensions.get("window").width * 0.8,
                            padding: 10,
                        }}
                        onpr
                    >
                        <Text
                            style={{
                                fontSize: 22,
                                textAlign: "center",
                                color: "gray",
                            }}
                        >
                            Recent Orders
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="rounded-2xl"
                        style={{
                            backgroundColor: "rgba(255,255,255,0.3)",
                            width: Dimensions.get("window").width * 0.4,
                            padding: 8,
                        }}
                        onpr
                    >
                        <Text
                            style={{
                                fontSize: 22,
                                textAlign: "center",
                                color: "gray",
                            }}
                        >
                            Logout
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    );
};

export default Profile;

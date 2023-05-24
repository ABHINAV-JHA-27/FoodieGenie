import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    Dimensions,
    Image,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import * as Animatable from "react-native-animatable";

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
                <View className="flex-col items-center">
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
                    <View className="mt-10 space-y-5">
                        <Animatable.View delay={120} animation="slideInDown">
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
                                    Profile
                                </Text>
                            </TouchableOpacity>
                        </Animatable.View>
                        <Animatable.View delay={240} animation="slideInDown">
                            <TouchableOpacity
                                className="rounded-2xl"
                                style={{
                                    backgroundColor: "rgba(255,255,255,0.7)",
                                    width: Dimensions.get("window").width * 0.8,
                                    padding: 10,
                                }}
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
                        </Animatable.View>
                        <Animatable.View delay={360} animation="slideInDown">
                            <TouchableOpacity
                                className="rounded-2xl"
                                style={{
                                    backgroundColor: "rgba(255,255,255,0.7)",
                                    width: Dimensions.get("window").width * 0.8,
                                    padding: 10,
                                }}
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
                        </Animatable.View>
                        <Animatable.View delay={480} animation="slideInDown">
                            <TouchableOpacity
                                className="rounded-2xl"
                                style={{
                                    backgroundColor: "rgba(255,255,255,0.7)",
                                    width: Dimensions.get("window").width * 0.8,
                                    padding: 10,
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 22,
                                        textAlign: "center",
                                        color: "gray",
                                    }}
                                >
                                    About
                                </Text>
                            </TouchableOpacity>
                        </Animatable.View>
                    </View>
                </View>
                <Animatable.View
                    delay={120}
                    animation="slideInUp"
                    style={{
                        position: "absolute",
                        bottom: 40,
                        alignSelf: "center",
                    }}
                >
                    <TouchableOpacity
                        className="rounded-2xl"
                        style={{
                            backgroundColor: "rgba(255,255,255,0.3)",
                            width: Dimensions.get("window").width * 0.4,
                            padding: 8,
                        }}
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
                </Animatable.View>
            </SafeAreaView>
        </View>
    );
};

export default Profile;

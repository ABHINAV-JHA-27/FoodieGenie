import {
    View,
    Text,
    Image,
    SafeAreaView,
    TextInput,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import {
    AdjustmentsHorizontalIcon,
    Bars3CenterLeftIcon,
    MagnifyingGlassIcon,
} from "react-native-heroicons/solid";
import { categories, foodItems } from "../Constants";
import * as Animatable from "react-native-animatable";
import FoodCard from "../Components/FoodCard";

const HomeScreen = () => {
    const [activeCategory, setActiveCategory] = useState("Burger");
    return (
        <View className="flex-1 relative">
            <Image
                blurRadius={40}
                source={require("../../assets/images/wallpaper.avif")}
                className="absolute w-full h-full"
            />
            <SafeAreaView className="flex-1">
                <View className="flex-row justify-between items-center mx-4">
                    <View className="bg-white shadow-md rounded-2xl p-3">
                        <Bars3CenterLeftIcon
                            size="25"
                            stroke={100}
                            color="black"
                        />
                    </View>
                    <View
                        className="rounded-2xl"
                        style={{
                            backgroundColor: "rgba(255,255,255,0.7)",
                            padding: 3,
                        }}
                    >
                        <Image
                            className="h-12 w-12 rounded-2xl"
                            source={require("../../assets/images/me.png")}
                            style={{ backgroundColor: "rgba(255,255,255,0.7)" }}
                        />
                    </View>
                </View>
                <View className="my-12 space-y-2">
                    <Text className="mx-4 text-5xl font-medium text-gray-800">
                        Fast and
                    </Text>
                    <Text className="mx-4 text-5xl font-medium text-gray-800">
                        <Text className="font-extrabold">Deliciouse</Text> Food
                    </Text>
                </View>
                <View className="mx-4 flex-row justify-between items-center">
                    <View className="flex-row flex-1 p-4 bg-white rounded-2xl">
                        <MagnifyingGlassIcon stroke={40} color="gray" />
                        <TextInput
                            placeholder="Food"
                            value="Search"
                            className="ml-2 text-gray-800"
                        />
                    </View>
                </View>
                <ScrollView
                    className="mt-6 pt-6 max-h-20"
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 20 }}
                >
                    {categories.map((category, index) => {
                        let isActive = category == activeCategory;
                        let textClass = isActive ? " font-bold" : "";
                        return (
                            <Animatable.View
                                delay={index * 120} // delay for each item
                                animation="slideInDown" // animation type
                                key={index}
                            >
                                <TouchableOpacity
                                    className="mr-9"
                                    onPress={() => setActiveCategory(category)}
                                >
                                    <Text
                                        className={
                                            "text-white text-base tracking-widest " +
                                            textClass
                                        }
                                    >
                                        {category}
                                    </Text>
                                    {isActive ? (
                                        <View className="flex-row justify-center">
                                            <Image
                                                source={require("../../assets/images/line.png")}
                                                className="h-4 w-5"
                                            />
                                        </View>
                                    ) : null}
                                </TouchableOpacity>
                            </Animatable.View>
                        );
                    })}
                </ScrollView>

                <ScrollView
                    contentContainerStyle={{ paddingHorizontal: 20 }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {foodItems.map((item, index) => (
                        <FoodCard item={item} index={index} key={index} />
                    ))}
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

export default HomeScreen;

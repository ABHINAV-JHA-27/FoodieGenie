import AsyncStorage from "@react-native-async-storage/async-storage";
import { ToastAndroid } from "react-native";

export const login = async (user) => {
    if (user !== null) {
        await AsyncStorage.setItem("user", JSON.stringify(user));
    } else {
        ToastAndroid.show("Note Created Successfully!", ToastAndroid.SHORT);
    }
};

export const logout = async () => {
    const user = await AsyncStorage.getItem("user");
    await AsyncStorage.setItem("user", null);
};

import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Navigation from "./src/Navigation";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Navigation />
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
    },
});

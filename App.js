import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import Navigation from "./src/Navigation";
import SplashScreen from "./src/Screens/SplashScreen";

export default function App() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    if (loading) {
        return <SplashScreen />;
    }
    return <Navigation />;
}

const styles = StyleSheet.create({});

import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import SplashScreen from "../Screens/SplashScreen";
import Login from "../Screens/Login";
import Signup from "../Screens/Signup";
import ProductPage from "../Screens/ProductPage";
import Checkout from "../Screens/Checkout";
import { NavigationContainer } from "@react-navigation/native";
import useAuth from "../Hooks/useAuth";

const Stack = createStackNavigator();

const index = () => {
    const { user } = useAuth();
    if (user) {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="Product"
                        component={ProductPage}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="Checkout"
                        component={Checkout}
                        options={{
                            headerShown: false,
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    } else {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="Signup"
                        component={Signup}
                        options={{
                            headerShown: false,
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
};

export default index;

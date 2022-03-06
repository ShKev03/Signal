import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";

const Stack = createNativeStackNavigator();

const ScreenOption1 = {
    headerStyle: {
        backgroundColor: "#2c6bed",
    },
    headerTitleStyle: {
        color: "white",
    },
    headerTintColor: "white",
};
const ScreenOption2 = {
    headerStyle: {
        backgroundColor: "#ff006f",
    },
    headerTitleStyle: {
        color: "white",
    },
    headerTintColor: "black",
    title: "Create A New Account",
};

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={LoginPage}
                    options={ScreenOption1}
                />
                <Stack.Screen
                    name="Register"
                    options={ScreenOption2}
                    component={RegisterPage}
                />
                <Stack.Screen name="Home" component={HomePage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

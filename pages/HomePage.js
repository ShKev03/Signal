import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
    TouchableOpacity,
} from "react-native";
import CustomListItem from "../components/CustomListItem";
import React, { useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import { auth } from "../firebase";

const HomePage = ({ navigation }) => {
    const signOutUser = () => {
        auth.signOut().then(() => {
            navigation.replace("Login");
        });
        console.log("Sign out user");
    };
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Signal",
            headerStyle: { backgroundColor: "#fff" },
            headerTitleStyle: {
                color: "black",
                alignSelf: "center",
            },
            headerAlign: "center",
            headerTintColor: "black",
            headerLeft: () => {
                return (
                    <View style={{ marginEnd: 100 }}>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={signOutUser}
                        >
                            <Avatar
                                rounded
                                source={{ uri: auth?.currentUser?.photoURL }}
                            />
                        </TouchableOpacity>
                    </View>
                );
            },
        });
    }, []);

    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListItem />
            </ScrollView>
            <StatusBar style="dark" />
        </SafeAreaView>
    );
};

export default HomePage;

const styles = StyleSheet.create({});

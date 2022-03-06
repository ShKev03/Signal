import * as firebase from "firebase"
import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Input } from "react-native-elements/dist/input/Input";
import { KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
import { auth } from "../firebase";
import { useState } from "react";

const LoginPage = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState()
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                navigation.replace("Home");
            }
            console.log(firebase.auth().currentUser);
        });
        return unsubscribe;
    }, []);

    const signInUser = () => {
        auth.signInWithEmailAndPassword(email, password)
        console.log('sign in')
    };

    return (
        <ScrollView style={{ backgroundColor: "#fff" }}>
            <KeyboardAvoidingView
                behavior="padding"
                style={styles.container}
                keyboardVerticalOffset={100}
            >
                <View style={{ height: 10 }} />
                <StatusBar style="light" />
                <Image
                    source={{
                        uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
                    }}
                    style={{ width: 200, height: 200 }}
                />
                <View style={styles.inputContainer}>
                    <Input
                        placeholder="Email"
                        autoFocus
                        autoCapitalize="none"
                        type="email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <Input
                        placeholder="Password"
                        secureTextEntry
                        type="password"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        onSubmitEditing={()=>{auth.signInWithEmailAndPassword(email, password)}}
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={()=>{auth.signInWithEmailAndPassword(email, password)}}>
                    <View style={styles.buttonfilled}>
                        <Text style={{ color: "white" }}>Login</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                        onPress={() => {
                        navigation.navigate("Register");
                    }}
                    style={styles.button}
                >
                    <View style={styles.buttonoutline}>
                        <Text style={{ color: "#2c6bed" }}>
                            New User? Create A Account
                        </Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

export default LoginPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        width: 250,
        margin: 5,
    },
    inputContainer: {
        width: 300,
    },
    buttonfilled: {
        width: "100%",
        backgroundColor: "#2c6bed",
        padding: 10,
        alignItems: "center",
        borderRadius: 5,
    },
    buttonoutline: {
        width: "100%",
        backgroundColor: "#00000000",
        padding: 10,
        alignItems: "center",
        borderRadius: 5,
        borderColor: "#2c6bed",
        borderWidth: 1,
    },
});

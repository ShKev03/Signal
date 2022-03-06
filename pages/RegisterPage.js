import { KeyboardAvoidingView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Input } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { auth } from "../firebase";

const RegisterPage = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [avatar, setAvatar] = useState("");

    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredentials) => {
                if (userCredentials.user) {
                    userCredentials.user.updateProfile({
                        displayName: name,
                        photoURL:
                            avatar ||
                            `https://image.flaticon.com/icons/png/128/149/149071.png`,
                    });
                }
            })
            .catch(function (error) {
                alert(error.message);
            });
    };

    return (
        <ScrollView style={{ backgroundColor: "#fff" }}>
            <KeyboardAvoidingView
                behavior="padding"
                style={styles.container}
                keyboardVerticalOffset={100}
            >
                <View style={{ marginBottom: 50 }} />
                <View style={{ width: 300 }}>
                    <Input
                        placeholder="Full Name"
                        autoFocus
                        style={{ width: 300 }}
                        type="text"
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                    <Input
                        placeholder="Email"
                        style={{ width: 300 }}
                        value={email}
                        autoCapitalize="none"
                        type="email"
                        onChangeText={(text) => setEmail(text)}
                    />
                    <Input
                        placeholder="Password"
                        style={styles.input}
                        value={password}
                        autoCapitalize="none"
                        secureTextEntry
                        type="password"
                        onChangeText={(text) => setPassword(text)}
                    />
                    <Input
                        placeholder="URL for profile photo (optional)"
                        style={{ width: 300 }}
                        value={avatar}
                        type="text"
                        autoCapitalize="none"
                        onChangeText={(text) => setAvatar(text)}
                        onSubmitEditing={register}
                    />
                </View>
                <TouchableOpacity onPress={register} style={styles.button}>
                    <View style={styles.buttonfilled}>
                        <Text style={{ color: "white" }}>Create</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate("Login");
                    }}
                >
                    <View style={styles.buttonoutline}>
                        <Text style={{ color: "#ff006f" }}>
                            Already Have Account? Login
                        </Text>
                    </View>
                </TouchableOpacity>
                <StatusBar style="light" />
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

export default RegisterPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        width: 300,
    },
    buttonfilled: {
        width: "100%",
        backgroundColor: "#ff006f",
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
        borderColor: "#ff006f",
        borderWidth: 1,
    },
    button: {
        width: 250,
        margin: 5,
    },
});

import { StyleSheet, Text, View, Alert, ImageBackground } from 'react-native'
import React, { useState } from "react";
import { TextInput } from "react-native"
import appFirebase from '../../../credentials'
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from 'firebase/auth'
import { TouchableOpacity } from 'react-native-gesture-handler'
import firebase from 'firebase/compat/app';

const auth = getAuth(appFirebase)


const Register = (props) => {

    const [newEmail, setNewEmail] = useState()
    const [newPassword, setNewPassword] = useState()

    const handleCreateAccount = () => {
        createUserWithEmailAndPassword (auth, newEmail, newPassword)
        .then((userCredentials) => {
            const user = userCredentials.user
            sendEmailVerification(user)
            .then(()=> {
                Alert.alert("Please check your email to verify your account to complete the register");
                props.navigation.navigate("Login")
            })
        })
        .catch(error =>{
            console.log(error)
        })
    }

    const relogIn = async() => {
        try {
            props.navigation.navigate("Login")
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <ImageBackground source={{uri: "https://i.pinimg.com/originals/71/68/2c/71682c787e3aa7a6401b272c70a4ea31.jpg"}} style={styles.fondo}>
            <Text style={styles.textTitle}>Are you Ready to Escape?</Text>
            <View style={styles.newUser}>
                <TextInput placeholder='User Name (email)'
                onChangeText={(text) => setNewEmail(text)}
                style={styles.text}
                />
            </View>
            <View style={styles.newUser}>
                <TextInput placeholder='Password' secureTextEntry={true}
                onChangeText={(text) => setNewPassword(text)}
                style={styles.text}
                />
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity onPress={handleCreateAccount} style={styles.button1}>
                    <Text style={styles.buttonText}>Create Account</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={relogIn} style={styles.button2}>
                    <Text style={styles.buttonText}>Back to Login</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}



export default Register

const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    textTitle: {
        fontSize: 30,
        fontWeight: "500",
        color: "white",
    },
    newUser: {
        borderWidth: 3,
        width: "65%",
        height: 40,
        backgroundColor: "#D7D7D8",
        borderRadius: 12,
        borderColor: "white"
    },
    text: {
        color: "black",
        textAlign: "center",
        justifyContent: "center",
        textAlignVertical: "auto",
    },
    buttons: {
        gap: 30
    },
    button1: {
        borderWidth: 3,
        borderColor: "white",
        borderRadius: 14,
        padding: 15,
        backgroundColor: "yellow",
    },
    button2: {
        borderWidth: 3,
        borderColor: "white",
        borderRadius: 14,
        padding: 15,
        backgroundColor: "red",
        marginBottom: 45
    },
    buttonText: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16,
    }
})
import { StyleSheet, Text, View, Alert } from 'react-native'
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
        <View>
            <Text>Are you Ready to Escape?</Text>
            <View>
                <TextInput placeholder='User Name (email)'
                onChangeText={(text) => setNewEmail(text)}
                />
            </View>
            <View>
                <TextInput placeholder='Password' secureTextEntry={true}
                onChangeText={(text) => setNewPassword(text)}
                />
            </View>
            <TouchableOpacity onPress={handleCreateAccount}>
                <Text>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={relogIn}>
                <Text>Back to Login</Text>
            </TouchableOpacity>
        </View>
    )
}



export default Register

const styles = StyleSheet.create({})
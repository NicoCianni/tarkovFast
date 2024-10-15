import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native'
import React, { useState } from "react";
import appFirebase from '../../../credentials'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
const auth = getAuth(appFirebase)

const Login = (props) => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    const login = async() => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            Alert.alert("Iniciando sesion", "Ingresando...")
            props.navigation.navigate("Home")
        } catch (error) {
            console.log(error);
        }
    }

    const register = async() => {
        try {
            props.navigation.navigate("Register")
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <ImageBackground source={{uri:"https://wallpaperaccess.com/full/2121144.png"}} style={styles.logo}>
            <View style={styles.user}>
                <TextInput placeholder="Username (email)" style={styles.text}
                onChangeText={(text)=> setEmail(text)}
                />
                <TextInput placeholder="Password" style={styles.text} secureTextEntry={true}
                onChangeText={(text)=> setPassword(text)}
                />
            </View>
            <View style={styles.cajaBoton}>
                <TouchableOpacity onPress= {login}>
                    <Text style={styles.botonText}>Sign In</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cajaBoton}>
                <TouchableOpacity onPress= {register}>
                    <Text style={styles.botonText}>Register</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default Login

const styles = StyleSheet.create({
    logo:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    user:{
        justifyContent: "space-evenly",
        backgroundColor: "black",
        borderRadius: 15,
        width: "85%",
        gap: 40,
        margin: 30,
        padding: 15,
        borderWidth: 1,
        borderColor: "white",
    },
    text:{
        fontSize: 16,
        backgroundColor: "#C1BEBC",
        borderRadius: 10,
        margin: 5,
        padding: 10,
        color: "white",
    },
    cajaBoton:{
        backgroundColor: "black",
        padding: 20,
        borderRadius: 20,
        margin: 20,
        borderColor: "white",
        borderWidth: 2,
        width: "30%",
        shadowColor: "white",
        shadowOffset:{
            width: 0,
            height: 2,
        },
        shadowOpacity: 20,
        shadowRadius: 20,
        elevation: 20,
    },
    botonText:{
        fontSize: 18,
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
    }
})

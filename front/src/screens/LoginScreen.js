import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import { auth } from '../../Firebase'
import { createUserWithEmailAndPassword , onAuthStateChanged , signInWithEmailAndPassword } from 'firebase/auth'
import Logo from '../Imagens/Logo.png'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
    const[email, setEmail]= useState('')
    const[senha, setSenha]= useState('')

    const[user, setUser]= useState('')

    const navigation= useNavigation()

    useEffect(() =>{
        const unsubscribe  = auth.onAuthStateChanged(user=>{
            if(user){
                navigation.replace("Index")
            }
        })
        return unsubscribe
    })

    onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
    });

    const registra = async ()=>{
        navigation.navigate("SignInScreen")
    }

    const login = async ()=>{
        try{
            //const user = await signInWithEmailAndPassword(auth,email,senha);
            navigation.navigate("Index")

        }catch(error){
            console.log(error.message)
        }
    }

    return(
        <KeyboardAvoidingView
            style={styles.container}
            behavior="paddingBottom: 20,"
        >
            <Image source={Logo} style={styles.image} />
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Senha"
                    value={senha}
                    onChangeText={text => setSenha(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={login}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={registra}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },
    image:{
        flex : 1,
        maxHeight: 200,
        maxWidth : 200,
        resizeMode:'contain',
        padding: 50,
        marginBottom: 'auto',
        marginTop:'auto',
    }
})

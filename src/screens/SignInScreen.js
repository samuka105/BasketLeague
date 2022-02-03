import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {

    const [emailSignIn, setEmailSignIn] = useState('')
    const [senhaSignIn, setSenhaSignIn] = useState('')
    const [senhaRepitidaSignIn, setRepitidaSenhaSignIn] = useState('')
    
    const navigation= useNavigation()


    const registra = async () => {
        if(senhaSignIn == senhaRepitidaSignIn){
            try {
                const user = await createUserWithEmailAndPassword(auth, emailSignIn, senhaSignIn);
            } catch (error) {
                console.log(error.message)
            }
            //navigation.navigate("AccountConfig")
            navigation.replace("Index")
        }else{
            console.log("senha errada");
        }
    }
    

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="paddingBottom: 20,"
        >
            <KeyboardAvoidingView>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Email"
                        value={emailSignIn}
                        onChangeText={text => setEmailSignIn(text)}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Senha"
                        value={senhaSignIn}
                        onChangeText={text => setSenhaSignIn(text)}
                        style={styles.input}
                        secureTextEntry
                    />
                    <TextInput
                        placeholder="Repita a senha"
                        value={senhaRepitidaSignIn}
                        onChangeText={text => setRepitidaSenhaSignIn(text)}
                        style={styles.input}
                        secureTextEntry
                    />
                    <TouchableOpacity
                        onPress={registra}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Registre-se</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </KeyboardAvoidingView>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container:{
        padding: 20,
    },
    inputContainer: {
        width: '100%',
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 12,
        justifyContent:'space-evenly'
    },
    button: {
        backgroundColor: '#0782F9',
        width: '50%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
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
});

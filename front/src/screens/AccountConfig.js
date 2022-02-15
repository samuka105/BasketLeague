import { StyleSheet, Text, View, TouchableOpacity, ScrollView, KeyboardAvoidingView, SafeAreaView, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { auth, db } from '../../Firebase';
import { collection, addDoc, setDoc, getDoc, getDocs, updateDoc, collectionGroup, doc } from "firebase/firestore"
import { query, where } from "firebase/firestore";
import { useNavigation } from '@react-navigation/native';


const AccountConfig = () => {

    const [nome, setnome] = useState('')

    const navigation = useNavigation()

    const user = {
        idUsuario: auth.currentUser?.uid,
        nome: ' ',
        timeJogador: {
            jogador1: null,
            jogador2: null,
            jogador3: null,
            jogador4: null,
            jogador5: null,
        },
        ptsRodadas: [null],
        patrimonio: 70,
    };

    const colRef = collection(db, "Usuario")

    const criaUsario = async () => {
        try {
            let docRef = query(colRef, where("idUsuario", '==', auth.currentUser?.uid));
            let docs = getDocs(docRef);
            if ((await docs).size == 0) {
                addDoc(colRef, user)
                console.log('Adicionou');
            } else {
                console.log('não adicionou');
            }
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        criaUsario();
    });


    const updateNome = async () => {
        try {
            let docRef = query(colRef, where("idUsuario", '==', auth.currentUser?.uid));
            let docs = getDocs(docRef);
            if(nome.length > 3){
                (await docs).forEach(async doc =>{
                    await updateDoc(doc.ref,{nome: nome})
                })
            }
        } catch (error) {
            console.log(error);
        }
        navigation.replace("Index")
    }


    return (
        <SafeAreaView>
            <ScrollView>
                <KeyboardAvoidingView>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="nome"
                            value={nome}
                            onChangeText={text => setnome(text)}
                            style={styles.input}
                        />
                        <TouchableOpacity
                            style={styles.button}
                            onPress={updateNome}
                        ><Text style={styles.buttonText}>Finalizar</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>

    );
};

export default AccountConfig;

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
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
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight:'auto',
        marginLeft: 'auto',
        width: '80%',
    },
    button: {
        backgroundColor: '#0782F9',
        width: '50%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop:10,
        marginRight:'auto',
        marginLeft: 'auto',
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
});

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { auth , db} from '../../Firebase';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '@react-native-firebase/firestore';
//import { firestore } from '../../Firebase';
//import { firestore } from 'firebase-admin';
//import { Firestore } from 'firebase/firestore';


const AccountConfig = () => {
    /*const getUser = async () => {
        try {
            let data = {
                name: 'Los Angeles',
                state: 'CA',
                country: 'USA'
              };
            const res = await db.collection('cities').doc('LA').set(data);
            /*firestore.collection('Usuario').add({
                idUsuario: auth.currentUser.uid,
                nome: 'gabriel medina',
            }).then(() => {
                console.log('tudo certo ate aki');
            })
        }catch(error) {
            console.log(error.message)
        }
    }*/
    
    

    return (
            <TouchableOpacity
                onPress={getUser}
                style={styles.button}
            ><Text style={styles.buttonText}>teste </Text>
            </TouchableOpacity>
        
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
});

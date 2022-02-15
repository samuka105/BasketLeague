import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { db } from '../../Firebase'
import { useNavigation } from '@react-navigation/native'
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore'
import userImage from '../../assets/usuarioSemFoto.png'


const Leaderbord = () => {

    const navigation = useNavigation()
    const colRef = collection(db, "Usuario");
    const data=[]

    useEffect ( () =>{
         getUsuarios()
    })

    const getUsuarios= async()=>{
        const q = query(colRef, orderBy('ptsTotais'), limit(10))
        const docs = getDocs(q);
        const dados = {
            nomeTime : null,
            nome : null,
        }
        (await docs).forEach((doc)=>{
            dados.nomeTime = doc.data().nomeTime;
            dados.nome =  doc.data().nomeTime;
            data.push(dados)
        })
    }
    console.log("data:")
    console.log(data);

        if(data.length < 6){
            return <div />
        }
    else return(
        <ScrollView style={{ flexDirection: 'column'}}>
            <View style={StyleSheet.blockUser,{flex: 1}}>
                <Image source={userImage} style={StyleSheet.Image} />
                <Text style={StyleSheet.nomeTime}>{data[1].nomeTime}</Text>
                <Text style={{ marginLeft: 'auto' }}>{data[1].ptsTotais}</Text>
            </View>
            <View style={StyleSheet.blockUser, { flex: 2 }}>
                <Image source={userImage} style={StyleSheet.Image} />
                <Text style={StyleSheet.nomeTime}>{data[2].nomeTime}</Text>
                <Text style={{ marginLeft: 'auto' }}>{data[2].ptsTotais}</Text>
            </View>
            <View style={StyleSheet.blockUser, { flex: 3 }}>
                <Image source={userImage} style={StyleSheet.Image} />
                <Text style={StyleSheet.nomeTime}>{data[3].nomeTime}</Text>
                <Text style={{ marginLeft: 'auto' }}>{data[3].ptsTotais}</Text>
            </View>
            <View style={StyleSheet.blockUser, { flex: 4 }}>
                <Image source={userImage} style={StyleSheet.Image} />
                <Text style={StyleSheet.nomeTime}>{data[4].nomeTime}</Text>
                <Text style={{ marginLeft: 'auto' }}>{data[4].ptsTotais}</Text>
            </View>
            <View style={StyleSheet.blockUser, { flex: 5 }}>
                <Image source={userImage} style={StyleSheet.Image} />
                <Text style={StyleSheet.nomeTime}>{data[5].nomeTime}</Text>
                <Text style={{ marginLeft: 'auto' }}>{data[5].ptsTotais}</Text>
            </View>
        </ScrollView>
    )
}

export default Leaderbord;

const styles = StyleSheet.create({
    blockUser: {
        flexDirection: 'row',
        margin: 10,
        backgroundColor: '#fff9e9',
        minWidth: 40,
        minHeight: 40,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 'auto',
        marginLeft: 'auto',
        width: '95%',
        borderColor: 'black'
    },
    Image: {
        flex: 1,
        minHeight: 35,
        minWidth: 35,
        resizeMode: 'stretch',
        padding: 12,
        marginRight: 'auto',
    },
    nomeTime: {
        flex: 2,
        flexDirection: 'column',
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontSize: 24,
        marginRight: 'auto',
    },
})

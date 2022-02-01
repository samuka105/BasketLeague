import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../../Firebase' 
import { signOut } from 'firebase/auth'

const HomeScreen = () => {
  const navigation = useNavigation()


  const logout = async () => {
    await signOut(auth).then(()=>{
      navigation.replace("LoginScreen")
    }).catch(e => alert(e.message));    
  };

  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={logout}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sair </Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   button: {
    backgroundColor: 'red',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})
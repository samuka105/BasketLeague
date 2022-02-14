import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { auth } from '../../Firebase'
import { signOut } from 'firebase/auth'
import ProfileScreen from  './profile2';

import { Tab, Text, TabView } from 'react-native-elements';

export default () => {
  const [index, setIndex] = React.useState(0);

  return (
    <>
      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>
          <Text h1>Index lalala</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
          <Text h1>Meu time e n sei oque</Text>
        </TabView.Item>
        <TabView.Item style={{ width: '100%' }}>
          <ProfileScreen />
        </TabView.Item>
      </TabView>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: 'white',
          height: 3,
        }}
        variant="primary"
      >
        <Tab.Item
          title="Home"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: 'home', type: 'ionicon', color: 'white' }}
        />
        <Tab.Item
          title="Meu Time"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: 'people', type: 'ionicon', color: 'white' }}
        />
        <Tab.Item
          title="Mercado"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: 'cart', type: 'ionicon', color: 'white' }}
        />
      </Tab>

    </>
  );
};
/**
const HomeScreen = () => {
  const navigation = useNavigation()


  const logout = async () => {
    await signOut(auth).then(()=>{
      navigation.replace("profile")
    }).catch(e => alert(e.message));
  };
/*
  const logout1 = async () => {
      navigation.replace("AccountConfig")
  };
  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>



      <Button title="Hello World!" />;
      <TouchableOpacity
        onPress={logout}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sair </Text>
      </TouchableOpacity>
      {/*<TouchableOpacity
        onPress={logout1}
        style={styles.button}
      >
        <Text style={styles.buttonText}>teste </Text>
      </TouchableOpacity>}
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
*/

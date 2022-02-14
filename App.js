import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import Index from './src/screens/Index';
import SignInScreen from './src/screens/SignInScreen';
import AccountConfig from './src/screens/AccountConfig';
import LoginScreen1 from './src/screens/profile';
import ProfileScreen from  './src/screens/profile2';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer documentTitle={{
        enabled: false
      }}>
      <Stack.Navigator >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="Player Stats" component={ProfileScreen}/>
        <Stack.Screen name="SignInScreen" component={SignInScreen}/>
        <Stack.Screen name="AccountConfig" component={AccountConfig}/>
        <Stack.Screen name="profile" component={LoginScreen1}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

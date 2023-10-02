import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
 import Login from './screens/LoginPage/Login/Login'
import SignUp from './screens/LoginPage/SignUp/SignUp';
import Profile from './screens/Profile/Profile/Profile'
import Inscription from './screens/Profile/Inscription/Inscription';
import Home from './screens/Home/Home';
const Stack = createNativeStackNavigator()


export default function App() {
  return (
    <NativeBaseProvider>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
     <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}}  />   
     <Stack.Screen name="Login" component={Login} options={{headerShown:false}}  /> 
     <Stack.Screen name="SignUp" component={SignUp} /> 
     <Stack.Screen name="Inscription" component={Inscription} options={{headerShown:false}} />
    <Stack.Screen name="Home" component={Home} options={{headerShown:false}} /> 
    </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}



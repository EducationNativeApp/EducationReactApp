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
import Navbar from './screens/Navbar/Navbar'
import Chat1 from './screens/Chat/Chat1';
import Contactus from './screens/Contactus/Contactus';
const Stack = createNativeStackNavigator()


export default function App() {
  return (
    <NativeBaseProvider>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Contactus">
    <Stack.Screen name="Navbar" component={Navbar} options={{headerShown:false}}  />   
     <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}}  />   
     <Stack.Screen name="Login" component={Login} options={{headerShown:false}}  /> 
     <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}} /> 
     <Stack.Screen name="Inscription" component={Inscription} options={{headerShown:false}} />
    <Stack.Screen name="Home" component={Home} options={{headerShown:false}} /> 
    <Stack.Screen name="Chat1" component={Chat1} options={{headerShown:false}} /> 
    <Stack.Screen name="Contactus" component={Contactus} options={{headerShown:false}} /> 
    </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}



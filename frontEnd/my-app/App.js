import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/LoginPage/Login/Login'
import SignUp from './screens/LoginPage/SignUp/SignUp';
import Profile from '../my-app/screens/Profile/Profile'
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NativeBaseProvider>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Profile">
    <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}}  />  
    {/* <Stack.Screen name="Login" component={Login} options={{headerShown:false}}  /> */}
    <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}



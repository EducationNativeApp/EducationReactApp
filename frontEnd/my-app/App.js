import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
 import Login from './screens/LoginPage/Login/Login'
import SignUp from './screens/LoginPage/SignUp/SignUp';
const Stack = createNativeStackNavigator()


export default function App() {
  return (
    <NativeBaseProvider>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="SignUp">
    <Stack.Screen name="Login" component={Login}  />
    <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}  />
    </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}



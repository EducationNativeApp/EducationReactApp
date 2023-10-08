import {StyleSheet, Text , View , TextInput ,Button, Image ,ScrollView  } from "react-native"
import {lightTheme, darkTheme} from '../../Theme/Theme'
import { useState } from "react";
import { useContext } from "react";
import { MyContext } from "../../useContext/useContext";
const Chat1 = () => {
  const { isDarkMode,setMode } = useContext(MyContext);
  const theme = isDarkMode ? darkTheme : lightTheme;
  const darkMode=()=>{
    setMode(!isDarkMode)
  }
  return (
<View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <View style={styles.nav}>
        <Text style={{color:theme.textColor}}> Messages</Text>
      </View>
      <Text style={{color:theme.textColor}} onPress={()=>{darkMode()}}>Hola</Text>
      </View>
  )
}
const styles = StyleSheet.create({
  container: {    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },nav:{
    width:"100%",
    height:150,
    marginTop:-523,
    borderBottomWidth:0.3
  }
});

export default Chat1
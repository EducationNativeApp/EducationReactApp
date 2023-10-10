import React from 'react';
import {StyleSheet, Text , View , TextInput ,Button, Image } from "react-native"
import {lightTheme, darkTheme} from '../../Theme/Theme'
import { useContext } from "react";
import { MyContext } from "../../useContext/useContext";

const Contact = () => {
  const { isDarkMode,setMode } = useContext(MyContext);
  const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <View style={[styles.container,{
      backgroundColor:theme.backgroundColor
    }]}>
      <View style={{marginTop:100}}>
      <Text style={[styles.text,{
        color:theme.textColor,
        marginLeft:"15%"
      }]}>Get In Touch</Text>
      <Text style={{
        fontSize:12,
        color:theme.textColor
      }}>We are here for you ! How Can we help</Text>
    </View>
    <Text style={{marginLeft:"-53%", marginTop:"20%",color:"#A901DB"}}>Password</Text>
    <TextInput placeholder="password"  secureTextEntry={true}  style={{borderColor:"#A901DB",backgroundColor:"#F2F2F2",borderWidth:1 ,marginTop:"-5%" , height:"10%", width:"80%" , borderRadius:7.69 }} />
    <Text style={{marginLeft:"-53%", marginTop:"8%",color:"#A901DB"}}>Password</Text>
    <TextInput   placeholder="password"  secureTextEntry={true}  style={{borderColor:"#A901DB",backgroundColor:"#F2F2F2",borderWidth:1 ,marginTop:"5%" , height:"10%", width:"80%" , borderRadius:7.69 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Contact;

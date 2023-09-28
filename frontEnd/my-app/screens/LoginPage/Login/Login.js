import {StyleSheet, Text , View , TextInput ,Button, Image } from "react-native"
import { useEffect, useState } from "react";
import FontAwesomeIcon from 'react-native-fontawesome';
import axios from 'axios'
function Login() {
const [view,setView]=useState('Home')
useEffect(()=>{
  axios.get('http:/192.168.103.6/')
})
const changeView=(views)=>{
  setView(views)
}
  const handleClick=()=>{
    alert("you have a click")
  }
  return (
    <View style={styles.container}>
    <Text style={{marginTop:"-5%", marginLeft:"-79%"}}>Home</Text>
    <Image
    style={{width:40,
    height:40,
    marginLeft:5,
  
  }}
  source={{uri:'https://images.vexels.com/media/users/3/224233/isolated/preview/d5ee0e9c87bb54cf867d7fb89c4570b8-online-education-logo.png'}} />
    <Text style={{marginTop:"1%", color:"#8A0886",fontFamily:"bold"}}>Welcome Back</Text>
    <Text style={{marginTop:"1,5%"}}>Login to continue</Text>
    <Text style={{marginLeft:"-49%",marginTop:"8%", color:"#A901DB"}}>Email Adress</Text>
    {/* <FontAwesomeIcon
        style={{ color: '#92329f', marginLeft:20 }}
        icon='envelope'
        size={30} // Adjust the size as needed
      /> */}
    <TextInput placeholder="Email" style={{backgroundColor:"#F2F2F2",borderWidth:1,borderColor:"#A901DB" ,marginTop:"5%" , height:"10%", width:"80%" , borderRadius:"10%"}} />
   <Text style={{marginLeft:"-53%", marginTop:"8%",color:"#A901DB"}}>Password</Text>
    <TextInput keyboardType="password" placeholder="password"  secureTextEntry={true}  style={{borderColor:"#A901DB",backgroundColor:"#F2F2F2",borderWidth:1 ,marginTop:"5%" , height:"10%", width:"80%" , borderRadius:"10%" }} />
    <Text style={{marginLeft:"39%",marginTop:"5%",color:"#A901DB"}}>Forgot Password ?</Text>
    {/* <Button onPress={handleClick}
  title="LOG IN"
    color={"red"}
    
/> */}

<View  style={styled.btn}>
  <Text  style={styled.Log}>LOG IN</Text>
</View>
<Text style={styled.text}>Don't have an account?</Text>
<Text style={styleed.text1}>Sign up Now</Text>

 </View>
  )
}
const styles = StyleSheet.create({
  container: {    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
const styled = StyleSheet.create({
  text: {  
      marginLeft:"-30%",
      marginTop:"10%"
  },btn:{
    marginTop:20,
    width:210,
    height:60,
    borderRadius:8,
    backgroundColor:"#A901DB"
  },Log:{
    color:"#fff",
    marginLeft:80,
    marginTop:20
  }

});
const styleed = StyleSheet.create({
  text1: {  
      marginLeft:"45%",
      marginTop:"-5.5%",
      color:"#A901DB"
  },

});


export default Login
import {StyleSheet, Text , View , TextInput ,Button, Image } from "react-native"
import { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import axios from 'axios'
function Login({navigation}) {
  const [email,setEmail]=useState('')
  const [password , setPassword]=useState('')
  const [data,setData]=useState([])
const handleLog=(e)=>{
e.preventDefault()
    axios.post('http://192.168.101.18:3001/api/login',{
      email,
      password,
    }).then((res)=>{
      setData(res.data)
      console.log(data);
      alert("welcome")
      navigation.navigate('Chat1')
    }).catch((err)=>{
      if(email===""){
        console.log("enter your email");
        alert('enter your email')
      }else if(password===""){
        console.log("enter your password");
        alert("enter your password")
      }else{
      console.log(err)
      alert("check your pass or your email")
    }
  })
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
    <Text style={{marginTop:"1%", color:"#8A0886"}}>Welcome Back</Text>
    <Text style={{marginTop:"1.5%"}}>Login to continue</Text>
    <TextInput placeholder="Email" onChangeText={setEmail} style={{backgroundColor:"#F2F2F2",borderWidth:1,borderColor:"#A901DB" ,marginTop:"5%" , height:"10%", width:"80%" , borderRadius:7.69}} />
   <Text style={{marginLeft:"-53%", marginTop:"8%",color:"#A901DB"}}>Password</Text>
    <TextInput  onChangeText={setPassword} placeholder="password"  secureTextEntry={true}  style={{borderColor:"#A901DB",backgroundColor:"#F2F2F2",borderWidth:1 ,marginTop:"5%" , height:"10%", width:"80%" , borderRadius:7.69 }} />
    <Text style={{marginLeft:"39%",marginTop:"5%",color:"#A901DB"}} onPress={()=>{navigation.navigate("FindEmail")}}>Forgot Password ?</Text>
    {/* <Button onPress={handleClick}
  title="LOG IN"
    color={"red"}
/> */}

<View  style={styled.btn}>
  <Text  style={styled.Log} onPress={(e) => handleLog(e)}>LOG IN</Text>
</View>
<Text style={styled.text}>Don't have an account?</Text>
<Text style={styleed.text1}
onPress={()=>{ navigation.navigate("SignUp")}}>Sign up Now</Text>
<Navbar />
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
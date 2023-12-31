import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";
import { useEffect, useState } from "react";
import { lightTheme, darkTheme } from "../../../Theme/Theme";
import Navbar from "../../Navbar/Navbar";
import axios from "axios";
import { useContext } from "react";
import { MyContext } from "../../../useContext/useContext";
import ADRESS_API from "../../serverUrl";

function Login({ navigation }) {
  const { isDarkMode, setMode, setUser } = useContext(MyContext);
  const theme = isDarkMode ? darkTheme : lightTheme;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  const handleLog = (e) => {
    e.preventDefault();
    axios
      .post(`http://${ADRESS_API}:3001/user/login`, {
        email,
        password,
      })
      .then((res) => {
        setData(res.data);
        setUser(res.data);
        console.log(data);
        alert("welcome");
        navigation.navigate("Parent");
      })
      .catch((err) => {
        if (email === "") {
          console.log("enter your email");
          alert("enter your email");
        } else if (password === "") {
          console.log("enter your password");
          alert("enter your password");
        } else {
          console.log(err);
          alert("check your pass or your email");
        }
      });
  };
  return (
<<<<<<< HEAD
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <Image
        style={{ width: 40, height: 40, marginLeft: 5 }}
        source={{
          uri: "https://images.vexels.com/media/users/3/224233/isolated/preview/d5ee0e9c87bb54cf867d7fb89c4570b8-online-education-logo.png",
        }}
      />
      <Text style={{ marginTop: "1%", color: "#8A0886" }}>Welcome Back</Text>
      <Text style={{ marginTop: "1.5%", color: "#8A0886" }}>
        Login to continue
      </Text>
      <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        style={{
          backgroundColor: "#F2F2F2",
          borderWidth: 1,
          borderColor: "#A901DB",
          marginTop: "5%",
          height: "10%",
          width: "80%",
          borderRadius: 7.69,
        }}
      />
      <Text style={{ marginLeft: "-53%", marginTop: "8%", color: "#A901DB" }}>
        Password
      </Text>
      <TextInput
        onChangeText={setPassword}
        placeholder="password"
        secureTextEntry={true}
        style={{
          borderColor: "#A901DB",
          backgroundColor: "#F2F2F2",
          borderWidth: 1,
          marginTop: "5%",
          height: "10%",
          width: "80%",
          borderRadius: 7.69,
        }}
      />
      <Text
        style={{ marginLeft: "39%", marginTop: "5%", color: "#A901DB" }}
        onPress={() => {
          navigation.navigate("FindEmail");
        }}
      >
        Forgot Password ?
      </Text>
      {/* <Button onPress={handleClick}
=======
    <View style={[styles.container,{ backgroundColor: theme.backgroundColor }]}>

    <Image
    style={{width:40,
    height:40,
    marginLeft:5,
    top:"-4%"
  }}
  source={{uri:'https://images.vexels.com/media/users/3/224233/isolated/preview/d5ee0e9c87bb54cf867d7fb89c4570b8-online-education-logo.png'}} />
    <Text style={{marginTop:"2%", color: "rgba(0, 0, 0, 1)"  ,  fontWeight: "700"}}>Welcome Back</Text>
    <Text style={{marginTop:"1.5%", color: "rgba(0, 0, 0, 1)"  ,  fontWeight: "400"}}>Login to continue</Text>

    <Text   style={{left:"-35%", top:"3%", color: "rgba(0, 0, 0, 1)"  ,  fontWeight: "500"}}> Email</Text>
    <TextInput  onChangeText={setEmail} style={{borderColor: "#66328E",
    backgroundColor: "#F2F2F2",
    top: "3%",
    height: "10%",
    width: "80%",
    marginTop: "5%",
    backgroundColor: "rgba(248, 240, 240, 1)",
    borderWidth: 1,
    borderColor: "rgba(102, 50, 142, 1)",
    borderRadius: 7.681159973144531,
  }} />
   <Text style={{marginLeft:"-63%", marginTop:"12%",color:"rgba(0, 0, 0, 1)"  ,  fontWeight: "500"}}>Password</Text>
    <TextInput  onChangeText={setPassword}   secureTextEntry={true}  style={{borderColor: "#66328E",
    backgroundColor: "#F2F2F2",
    marginTop: "10%",
    height: "10%",
    width: "80%",
    marginTop: "5%",
    backgroundColor: "rgba(248, 240, 240, 1)",
    borderWidth: 1,
    borderColor: "rgba(102, 50, 142, 1)",
    borderRadius: 7.681159973144531 }} />
    <Text style={{marginLeft:"39%",marginTop:"5%",color: "rgba(0, 0, 0, 1)",
    fontWeight: "500"}} onPress={()=>{navigation.navigate("FindEmail")}}>Forgot Password ?</Text>
    {/* <Button onPress={handleClick}
>>>>>>> origin/main
  title="LOG IN"
    color={"red"}
/> */}

      <View style={styled.btn}>
        <Text style={styled.Log} onPress={(e) => handleLog(e)}>
          LOG IN
        </Text>
      </View>
      <Text style={[styled.text, { color: theme.textColor }]}>
        Don't have an account?
      </Text>
      <Text
        style={styleed.text1}
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      >
        Sign up Now
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
const styled = StyleSheet.create({
  text: {
<<<<<<< HEAD
    marginLeft: "-30%",
    marginTop: "10%",
  },
  btn: {
    marginTop: 20,
    width: 210,
    height: 60,
    borderRadius: 8,
    backgroundColor: "#A901DB",
  },
  Log: {
    color: "#fff",
    marginLeft: 80,
    marginTop: 20,
  },
});
const styleed = StyleSheet.create({
  text1: {
    marginLeft: "45%",
    marginTop: "-5.5%",
    color: "#A901DB",
=======
      marginLeft:"-30%",
      marginTop:"10%"
      
  },btn:{
    marginTop:20,
    width:210,
    height:60,
    borderRadius:8,
    backgroundColor: "#66328E",
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
      color: "rgba(0, 0, 0, 1)",
      fontWeight: "500"
>>>>>>> origin/main
  },
});
export default Login;

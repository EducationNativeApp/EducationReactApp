import axios from "axios"
import {StyleSheet, Text , View , TextInput ,Button, Image ,ScrollView} from "react-native"
import { useState } from "react"
import { useContext } from "react";
import { MyContext } from "../../../useContext/useContext";
const Inscription = ({navigation}) => {
const [First_name,setFirstName]=useState('')
const [LastName,setLastName]=useState('')
const [Birthday,setBirthday]=useState('')
const [image,setImage]=useState('')
const [Class,setClass]=useState('')
const handle=()=>{
  axios.post('http://192.168.1.108:3001/student/add',{
    First_name,
    LastName,
    Birthday,
    image:'dfghjhgfds',
    class:Class,
    users_idusers:1,
    classes_idclasses:1

  }).then((res)=>{
    alert("student added succesufully")
    navigation.navigate('Home')
  }).catch((err)=>{
    alert(err);
  })
}
  return (
    <ScrollView>
        <View style={styles.container}>
        <View style={styles.Edit} >
      <Image
    style={{width:40,
    height:40,
    marginLeft:56,marginTop:30
  
  }}
  source={{uri:'https://images.vexels.com/media/users/3/224233/isolated/preview/d5ee0e9c87bb54cf867d7fb89c4570b8-online-education-logo.png'}} />
      <Text style={{fontSize:18}}>Student Inscription</Text>
      </View>
            <View >
                
            <Text style={{color:"#A901DB",marginTop:20}}>First Name</Text>
            <TextInput onChangeText={setFirstName} style={{borderColor:"#A901DB",backgroundColor:"#F2F2F2",borderWidth:1 ,marginTop:"10%" , height:45 , width:240 , borderRadius:8,marginTop:10 }} />
            <Text style={{color:"#A901DB",marginTop:20}}>Last Name</Text>
            <TextInput onChangeText={setLastName} style={{borderColor:"#A901DB",backgroundColor:"#F2F2F2",borderWidth:1 ,marginTop:"10%" , height:45 , width:240 , borderRadius:8 ,marginTop:10 }} />
            <Text style={{color:"#A901DB",marginTop:20}}>Date Of Birthday</Text>
            <TextInput onChangeText={setBirthday} style={{borderColor:"#A901DB",backgroundColor:"#F2F2F2",borderWidth:1 ,marginTop:"10%" , height:45 , width:240 , borderRadius:8,marginTop:10  }} />
            <Text style={{color:"#A901DB",marginTop:20}}>Class</Text>
            <TextInput onChangeText={setClass} style={{borderColor:"#A901DB",backgroundColor:"#F2F2F2",borderWidth:1 ,marginTop:"10%" , height:45 , width:240 , borderRadius:8,marginTop:10  }} />
            <Text style={{color:"#A901DB",marginTop:20}}>Current_graduation_Certificate</Text>
            <View style={styles.img}></View><View  style={styles.btn}>
  <Text  style={styles.Log} onPress={()=>handle()}>Send</Text>
</View>

            
</View>

        </View>
    </ScrollView>
  )
}
const styles=StyleSheet.create({
    img:{
        width:80,
        height:80,
        borderRadius:10,
        borderWidth:1,
        borderColor:"#A901DB",
        marginLeft:0,
        marginTop:20
    },Log:{
        color:"#fff",
        marginLeft:90,
        marginTop:20
      },btn:{
        marginTop:30,
        width:205,
        height:60,
        borderRadius:8,
        marginLeft:14,
        backgroundColor:"#A901DB"
      },container: {    flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom:30
      }
})

export default Inscription
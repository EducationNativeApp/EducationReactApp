import {StyleSheet, Text , View , TextInput ,Button, Image ,ScrollView,Dimensions, TouchableNativeFeedback  } from "react-native"
import ImagePicker from 'react-native-image-picker';
import { useEffect,useState  } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useContext } from "react";
import axios from "axios";
import { MyContext } from "../../../useContext/useContext";
const ProfileView=({navigation})=> {
    const {iduser,setUsersID,username} = useContext(MyContext);
    const {height,width}=Dimensions.get('window')

const edity=()=>{
    navigation.navigate('Profile')
}


const [data,setData]=useState([])

useEffect(() => {
    axios
      .get(`http://192.168.137.230.15:3000/user/getById/${iduser}`)
      .then((res) => {
        setData(res.data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); 
const Logout=()=>{
    axios.delete(`http://192.168.137.230:3000/user/delete/${iduser}`).then((res)=>{
        console.log("deleted User "+iduser);
        navigation.navigate('Home')
    }).catch((err)=>{
        console.log(err);
    })
    navigation.navigate('Home')

}

    return (
        <View style={{
            width:width,
            height:height
        }}>
                 <SafeAreaView style={{backgroundColor:"black"}}>
  </SafeAreaView>
        <ScrollView>
      <View style={Styles.container}>
      
        <View style={{borderColor: "rgba(102, 50, 142, 1)",width:width - 200,height:height -450,borderRadius:100,borderWidth:0.3,marginTop:width-280}}></View>
      
    </View>
    <View>
    {data.map((e)=>{
        return( 
            <View>
        <View style={{marginTop:"15%",marginLeft:20}}>
        <Text style={{color:"rgba(102, 50, 142, 1)",fontSize:17}}>
Your Name is :
        </Text>
        </View>
        <View style={{marginTop:"5%",marginLeft:20}} >
        <Text style={{color:"rgba(102, 50, 142, 1)",fontSize:17 }}>
Your Email is :
        </Text>
        </View>  
        <View style={{marginTop:"5%",marginLeft:20}} >
        <Text style={{color:"rgba(102, 50, 142, 1)",fontSize:17}}>
Your Number is :
        </Text>
        </View >
        <View style={{marginTop:"5%",marginLeft:20}}>
        <Text style={{color:"rgba(102, 50, 142, 1)",fontSize:17}}>
Your Birthday at :
        </Text>
        </View>
      
    </View>
    )})}
    </View>

    
    <TouchableNativeFeedback onPress={()=>edity()}>
            <View style={{backgroundColor:"rgba(102, 50, 142, 1)",marginTop:width - 220,marginLeft:width -310,width:width/2.5,height:width-280,borderRadius:10,borderWidth:0.6,justifyContent:"center",alignItems:"center"}}>
            <Text style={{color:"white"}}>Edit Your Profile</Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={()=>Logout()}>
            <View style={{backgroundColor:"red",marginTop:width - 360,marginLeft:width - 140,width:width/2.5,height:width-280,borderRadius:10,borderWidth:0.6,justifyContent:"center",alignItems:"center"}}>
            <Text style={{color:"white"}}>Delete Account</Text>
            </View>
        </TouchableNativeFeedback>
    </ScrollView>
   </View>
    )
  }

  const Styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }
})

export default ProfileView
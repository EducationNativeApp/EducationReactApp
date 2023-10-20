import {StyleSheet, Text , View , TextInput ,Button, Image ,ScrollView, TouchableNativeFeedback ,FlatList  } from "react-native"
import Video from 'react-native-video'
import {lightTheme, darkTheme} from '../../Theme/Theme'
import { useContext,useEffect,useState } from "react";
import { MyContext } from "../../useContext/useContext";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

const seeAllTeachers = () => {
    const { bra,isDarkMode,setMode} = useContext(MyContext);
   
    const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <SafeAreaView> 
    <View style={styles.container}>
    <Text style={{color:"black",fontSize:19,marginTop:26,fontFamily:"Verdana"}}>See All Teachers</Text>
    <View>
    {data.map((e)=>{
        <View style={[styles.Teachers, {borderColor:theme.borderColor}]}>
                <Image style={{borderWidth:0.6,width:90,height:90,borderRadius:100,backgroundColor:"black",marginTop:8,marginLeft:28,borderColor:theme.borderColor}}
                source={{uri:e.image}}
                />
                <View style={{marginLeft:15,marginTop:21}}>
                    <Text style={{color:theme.textColor}}>{e.name}</Text>
                    <Text style={{marginLeft:23,color:theme.textColor}}>IT Teacher</Text>
                </View>
            </View>
    })}
    </View>
    
            {/* <FlatList
          data={data}
          renderItem={this._renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingVertical: 20 }}
        /> */}
    </View>
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
    container: {  
        justifyContent: 'center'
},Teachers:{
    marginTop:20,
    marginLeft:10,
    height:190,
    borderWidth:0.6,
     width:150,
     borderRadius:15,
    //  backgroundColor:"red"
}
})
export default seeAllTeachers
import {StyleSheet, Text , View , TextInput ,Button, Image ,ScrollView  } from "react-native"
const Inscription = () => {
  return (
    <ScrollView>
        <View>
            <Text>Fist Name</Text>
            <TextInput />
            <Text>Last Name</Text>
            <TextInput />
            <Text>Date Of Birthday</Text>
            <TextInput />
            <Text>Current Class</Text>
            <TextInput />
            <Text>Current_graduation_Certificate</Text>
            <View style={Styles.img}></View>
            <View  style={styles.btn}>
  <Text  style={styles.Log}>Send</Text>
</View>
        </View>
    </ScrollView>
  )
}
const styles=StyleSheet.create({
    img:{
        width:80,
        height:80,
        borderRadius:15
    },Log:{
        color:"#fff",
        marginLeft:60,
        marginTop:20
      },btn:{
        marginTop:30,
        width:205,
        height:60,
        borderRadius:8,
        marginLeft:14,
        backgroundColor:"#A901DB"
      }
})

export default Inscription
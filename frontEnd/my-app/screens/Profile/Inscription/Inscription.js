import {StyleSheet, Text , View , TextInput ,Button, Image ,ScrollView  } from "react-native"
const Inscription = ({navigation}) => {
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
            <TextInput style={{borderColor:"#A901DB",backgroundColor:"#F2F2F2",borderWidth:1 ,marginTop:"10%" , height:45 , width:240 , borderRadius:8,marginTop:10 }} />
            <Text style={{color:"#A901DB",marginTop:20}}>Last Name</Text>
            <TextInput style={{borderColor:"#A901DB",backgroundColor:"#F2F2F2",borderWidth:1 ,marginTop:"10%" , height:45 , width:240 , borderRadius:8 ,marginTop:10 }} />
            <Text style={{color:"#A901DB",marginTop:20}}>Date Of Birthday</Text>
            <TextInput style={{borderColor:"#A901DB",backgroundColor:"#F2F2F2",borderWidth:1 ,marginTop:"10%" , height:45 , width:240 , borderRadius:8,marginTop:10  }} />
            <Text style={{color:"#A901DB",marginTop:20}}>Current Class</Text>
            <TextInput style={{borderColor:"#A901DB",backgroundColor:"#F2F2F2",borderWidth:1 ,marginTop:"10%" , height:45 , width:240 , borderRadius:8,marginTop:10  }} />
            <Text style={{color:"#A901DB",marginTop:20}}>Current_graduation_Certificate</Text>
            <View style={styles.img}></View><View  style={styles.btn}>
  <Text  style={styles.Log} onPress={()=>navigation.navigate('Home')}>Send</Text>
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
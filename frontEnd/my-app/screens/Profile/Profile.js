import {StyleSheet, Text , View , TextInput ,Button, Image ,ScrollView  } from "react-native"
const Profile=()=>{
  return (
    <ScrollView >
 <View style={styles.container} >
    <View >
      <View style={styles.Edit} >
      <Image
    style={{width:40,
    height:40,
    marginLeft:25,marginTop:-30
  
  }}
  source={{uri:'https://images.vexels.com/media/users/3/224233/isolated/preview/d5ee0e9c87bb54cf867d7fb89c4570b8-online-education-logo.png'}} />
      <Text style={{fontSize:18}}>Edit Profile</Text>
      </View>
      <View style={styles.circle}></View>
      <View style={styles.inputs} >
      <Text style={{color:"#A901DB"}}>Name</Text>
    <TextInput  style={{borderColor:"#A901DB",backgroundColor:"#F2F2F2",borderWidth:1 ,marginTop:"5%" , height:45 , width:240 , borderRadius:"10%" }} />
    <Text style={{ marginTop:"10%",color:"#A901DB"}}>Email Adress</Text>
    <TextInput      style={{borderColor:"#A901DB",backgroundColor:"#F2F2F2",borderWidth:1 ,marginTop:"5%" , height:45 , width:240 , borderRadius:"10%" }} />
    <Text style={{ marginTop:"10%",color:"#A901DB"}}>Date Of Birthday</Text>
    <TextInput   placeholder="password"    style={{borderColor:"#A901DB",backgroundColor:"#F2F2F2",borderWidth:1 ,marginTop:"5%" , height:45 , width:240 , borderRadius:"10%" }} />
    <Text style={{ marginTop:"10%",color:"#A901DB"}}>Current Password</Text>
    <TextInput   placeholder="password"   style={{borderColor:"#A901DB",backgroundColor:"#F2F2F2",borderWidth:1 ,marginTop:"5%" , height:45 , width:240 , borderRadius:"10%" }} />
    <Text style={{ marginTop:"10%",color:"#A901DB"}}>New Password</Text>
    <TextInput   placeholder="password"    style={{borderColor:"#A901DB",backgroundColor:"#F2F2F2",borderWidth:1 ,marginTop:"5%" , height:45 , width:240 , borderRadius:"10%" }} />
    <View  style={styles.btn}>
  <Text  style={styles.Log}>Save Changes</Text>
</View>
    </View>
    <View style={styles.aboutUs}>
    <Text style={{marginLeft:40}} >16 ghazala , ariana /tunis</Text>
    <Text style={{marginLeft:65,marginTop:20}} >+216 27011482</Text>
    <Text style={{marginLeft:55,marginTop:20}}>School@gmail.com</Text>
    </View>
    </View>
 </View>
 
 </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },circle:{
    width:160,
    height:160,
    borderRadius:100,
    borderWidth:1,
    borderColor:"#8A0868",
    marginTop:20,
    marginLeft:40
  },inputs:{
    marginTop:20
  },Edit:{
    marginLeft:78,

    marginTop:90
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
  },aboutUs:{
    width:250,
    height:250,
    marginLeft:-5,
    marginTop:20
  }


});

export default Profile
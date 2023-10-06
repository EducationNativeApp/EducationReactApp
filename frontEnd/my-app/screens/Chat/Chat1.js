import {StyleSheet, Text , View , TextInput ,Button, Image ,ScrollView  } from "react-native"
const Chat1 = () => {
  return (
    
    <View style={styles.container}>
      <View style={styles.nav}>
        <Text style={styles.message}> Messages</Text>
      </View>
      <Text>Hola</Text>
      </View>
  )
}
const styles = StyleSheet.create({
  container: {    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },nav:{
    width:"100%",
    height:150,
    marginTop:-523,
    backgroundColor:"beige",
    borderBottomWidth:0.3
  },message:{
    color:"black"
  }
});

export default Chat1
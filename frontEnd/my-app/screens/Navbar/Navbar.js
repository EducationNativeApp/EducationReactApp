import {StyleSheet, Text , View , TextInput ,Button, Image } from "react-native"
const Navbar = () => {
  return (
    <View style={styles.container}>
<View style={styles.nav}>
  <View><Image
    style={{width:35,
    height:35,
    marginLeft:12,marginTop:16
  }}
  source={{uri:'https://cdn-icons-png.flaticon.com/128/9314/9314363.png'}} /></View>
  <View>
  <Image
    style={{width:40,
    height:40,
    marginLeft:88,marginTop:-39
  }}
  source={{uri:'https://cdn-icons-png.flaticon.com/128/2989/2989993.png'}} />
  </View>
  <View>
  <Image
    style={{width:30,
    height:30,
    marginLeft:180,marginTop:-35
  }}
  source={{uri:'https://cdn-icons-png.flaticon.com/128/2645/2645897.png'}} />
  </View>
  <View>
  <Image
    style={{width:40,
    height:40,
    marginLeft:260,marginTop:-42
  }}
  source={{uri:'https://cdn-icons-png.flaticon.com/128/149/149071.png'}} />
  </View>
</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },nav:{
    width :"101%",
    marginTop:10,
    height:60,
    borderTopWidth:1,
    // backgroundColor:"red"
  }
});

export default Navbar
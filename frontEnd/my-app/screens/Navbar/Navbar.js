import {StyleSheet, Text , View , TextInput ,Button, Image ,TouchableWithoutFeedback } from "react-native"
import { useNavigation } from "@react-navigation/native"; 
import { useContext } from "react";
import { MyContext } from "../../useContext/useContext";
import { ScrollView } from "native-base";
import {lightTheme, darkTheme} from '../../Theme/Theme'
const Navbar = () => {
  const { isDarkMode,setMode } = useContext(MyContext);
  const theme = isDarkMode ? darkTheme : lightTheme;
  const navigation = useNavigation()
  const darkMode=()=>{
    setMode(!isDarkMode)
  }
  return (
    <View style={[styles.container,{ backgroundColor: theme.backgroundColor}]}>
      <ScrollView horizontal={true}>
<View style={styles.nav}>
  <View>
    <TouchableWithoutFeedback onPress={()=>navigation.navigate('Login')}>
      <Image
    style={{width:35,
    height:35,
    marginLeft:12,marginTop:16
  }}
  source={{uri:'https://cdn-icons-png.flaticon.com/128/2343/2343694.png'}} />
  </TouchableWithoutFeedback>
 </View>

  <View>
    <TouchableWithoutFeedback  onPress={()=>navigation.navigate('Inscription')} >
  <Image
    style={{width:40,
    height:40,
    marginLeft:88,marginTop:-39,
  }}
  source={{uri:'https://cdn-icons-png.flaticon.com/128/6299/6299232.png'}} />
  </TouchableWithoutFeedback>
  </View>
  <View>
  <TouchableWithoutFeedback onPress={()=>navigation.navigate('Chat1')}>
    <Image
    style={{width:40,
    height:40,
    marginLeft:180,marginTop:-40
  }}
  source={{uri:'https://cdn-icons-png.flaticon.com/128/9171/9171457.png'}} />
  </TouchableWithoutFeedback>
  </View>
  <View>
    <TouchableWithoutFeedback onPress={()=>navigation.navigate('Home')}>
  <Image
    style={{width:40,
    height:40,
    marginLeft:260,marginTop:-42
  }}
  source={{uri:'https://cdn-icons-png.flaticon.com/128/149/149071.png'}} />
 </TouchableWithoutFeedback>
  </View>
  <View>
  <TouchableWithoutFeedback onPress={()=>darkMode()}>

  <Image
    style={{width:40,
    height:40,
    marginLeft:330,marginTop:-42
  }}
  source={{uri:'https://cdn-icons-png.flaticon.com/128/8139/8139348.png'}} />
  </TouchableWithoutFeedback>

  </View>
</View>
</ScrollView>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {   
    
  },nav:{
    width :"101%",
    height:60,

    // backgroundColor:"red"
  }
});

export default Navbar
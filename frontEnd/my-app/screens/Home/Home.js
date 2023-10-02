import {StyleSheet, Text , View , TextInput ,Button, Image ,ScrollView  } from "react-native"
const Home = () => {
  return (
    <ScrollView>
        <View style={styles.container}>
            <View style={styles.nav}>
            <Image
    style={{width:40,
    height:40,
    marginLeft:12,marginTop:5
  }}
  source={{uri:'https://images.vexels.com/media/users/3/224233/isolated/preview/d5ee0e9c87bb54cf867d7fb89c4570b8-online-education-logo.png'}} />
            </View>
            <View style={styles.fImg}></View>
        <View style={styles.seeAll}>
            <Text style={styles.text1}>See All</Text>
        </View>
        <View style={styles.matieres}>
            <View style={styles.matiere}></View>
            <View style={styles.matieree}></View>
        </View>
        </View>
    </ScrollView>
  )
}

const styles=StyleSheet.create({
    container: {    flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }
    ,nav:{
        backgroundColor:"red",
        width:"100%",
        height:50,
        marginTop:17
    },fImg:{
        backgroundColor:"black",
        width:"100%",
        height:160,
        marginTop:17
    },seeAll:{
          
        width:"100%",
        height:40,
        marginTop:17
    },text1:{
        marginLeft:260,
        marginTop:12
    },matiere:{
        width:180,
        height:120,
        backgroundColor:"white",
        borderRadius:12,
        borderWidth:1
    },matieres:{
        width:"100%",
        height:150,
       
        
    },matieree:{
        width:180,
        height:120,
        backgroundColor:"white",
        borderRadius:12,
        marginLeft:190,
        marginTop:-120,
        borderWidth:1
    }
})

export default Home
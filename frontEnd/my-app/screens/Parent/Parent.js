import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useContext } from "react";
import { MyContext } from "../../useContext/useContext";
const Parent = () => {
const navigation = useNavigation();
  
const handleImageClick = () => {
    navigation.navigate("Profile")
  };

  const handleImageClick1 = () => {
    navigation.navigate("Inscription")
  };

  const handleImageClick2 = () => {
    navigation.navigate("Modules")
  };

  const handleImageClick3 = () => {
    navigation.navigate("Teachers")
  };

  const handleImageClick4 = () => {
    navigation.navigate("Student")
  };

  const handleImageClick5 = () => {
    navigation.navigate("Options")
  };

  const handleImageClick6 = () => {
    navigation.navigate("Payement")
  };

  const handleImageClick7 = () => {
    navigation.navigate("Notes")
  };

  const handleImageClick8 = () => {
    navigation.navigate("Contact")
  };


  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.homeDiv}>
        <Text style={styles.homeText}>Home</Text>
      </View>
       <Image
    source={require('../../../my-app/assets/profil.png')}
    style={styles.imaged}
   
   />
    <View style={styles.text}>
        <Text style={{ color: '#66328E',fontSize:18 }}>Welcome Mr Houssem</Text>
      </View>
      <View style={{...styles.imageContainer   }} >
  <View style={styles.imageTextWrapper}>
  <TouchableOpacity onPress={handleImageClick}>
    <Image
      source={require('../../../my-app/assets/profil.png')}
      style={styles.imaged}
      
    />
    </TouchableOpacity>
    <Text style={{ color: '#66328E',marginRight:25  }}
   >Profile</Text>
  </View>
  <TouchableOpacity onPress={handleImageClick1}>
  <View style={{ ...styles.imageTextWrapper, marginLeft: 30 }}>
    <Image
      source={require('../../../my-app/assets/inscri.png')}
      style={styles.imaged}
      
    />
    <Text style={{ color: '#66328E',marginRight:25  }}>Inscription</Text>
  </View>
  </TouchableOpacity>
</View>

<View style={{...styles.imageContainer   }} >
  <View style={styles.imageTextWrapper}>
  <TouchableOpacity onPress={handleImageClick2}>
    <Image
      source={require('../../../my-app/assets/exams.png')}
      style={styles.imaged}
      
    />
    </TouchableOpacity>
    <Text style={{ color: '#66328E',marginRight:25 }}>Modules</Text>
  </View>
  <View style={{ ...styles.imageTextWrapper, marginLeft: 30 }}>
  <TouchableOpacity onPress={handleImageClick3}>
    <Image
      source={require('../../../my-app/assets/teacher.png')}
      style={styles.imaged}
      
    />
    </TouchableOpacity>
    <Text style={{ color: '#66328E',marginRight:25 }}>Teacher</Text>
  
  </View>
</View>


<View style={{...styles.imageContainer   }} >
  <View style={styles.imageTextWrapper}>
  <TouchableOpacity onPress={handleImageClick4}>
    <Image
      source={require('../../../my-app/assets/student.png')}
      style={styles.imaged}
    />
    </TouchableOpacity>
    <Text style={{ color: '#66328E',marginRight:25  }}>Student</Text>
  </View>
  <View style={{ ...styles.imageTextWrapper, marginLeft: 30 }}>
  <TouchableOpacity onPress={handleImageClick5}>
    <Image
      source={require('../../../my-app/assets/options.png')}
      style={styles.imaged}
     
    />
    </TouchableOpacity>
    <Text style={{ color: '#66328E',marginRight:25  }}>Options</Text>
  </View>
</View>

<View style={{...styles.imageContainer   }} >
  <View style={styles.imageTextWrapper}>
  <TouchableOpacity onPress={handleImageClick6}>
    <Image
      source={require('../../../my-app/assets/payement.png')}
      style={styles.imaged}
      
    />
    </TouchableOpacity>
    <Text style={{ color: '#66328E',marginRight:25 }}>Payement</Text>
  </View>
  <View style={{ ...styles.imageTextWrapper, marginLeft: 30 }}>
  <TouchableOpacity onPress={handleImageClick7}>
    <Image
      source={require('../../../my-app/assets/Notes.png')}
      style={styles.imaged}

    />
    </TouchableOpacity>
    <Text style={{ color: '#66328E',marginRight:25 }}>Notes</Text>
  </View>
</View>

<View style={styles.imageTextWrapper}>
<TouchableOpacity onPress={handleImageClick8}>
    <Image
      source={require('../../../my-app/assets/contact.png')}
      style={styles.imaged}
      
    />
    </TouchableOpacity>
    <Text style={{ color: '#66328E',marginRight:25 }}>Contact us</Text>
  </View>

    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F0F0',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    paddingTop: 10,
  },
  homeDiv: {
    backgroundColor: '#F8F0F0',
    width: 312,
    height: 50,
    marginLeft: 21,
    marginTop: 40,
  },
  homeText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 20,
    color: '#65328e',
  },
  imageContainer: {
    marginTop: 20,
    width: 100,
    height: 50,
    marginLeft: 21, // Adjust the marginLeft to align the image with the "Home" text
  },
 
  text: {
    marginLeft: 21, // Adjust marginLeft to align with the image and "Home" text
    marginTop: 10, // Add margin-top to create some space between the image and "Create Account"
  },
  imaged: {
    width: 100, // Adjust the width and height to make them square
    height: 100,
    borderRadius: 10, // Add border radius for rounded corners
    margin: 10, // Add margin for spacing between images
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    flexDirection: 'row', // Arrange the images and text horizontally
    justifyContent: 'space-between', // Add space between the images
    marginTop: 20,
    marginLeft: 21,
  },
  imageTextWrapper: {
    alignItems: 'center',
   // Center items (image and text) vertically
  },
  imaged: {
    width: 80,
    height: 80,
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  }
  

});

export default Parent;

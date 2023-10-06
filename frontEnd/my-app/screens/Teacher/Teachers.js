import React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Teachers = () => {
  const navigation = useNavigation();
  
const images1 = () => {
    navigation.navigate("TeacherDetail")
  };
  return (
    <View style={styles.container}>
      <View style={styles.rectContainer}>
        <Text style={styles.teacherText}>teachers</Text>
      </View>
      <View style={styles.imageRow}>
        <View style={styles.rectangles}>
        <TouchableOpacity onPress={images1}>
          <Image
            source={require('../../../my-app/assets/matiere.png')}
            style={styles.image} 
          />
          </TouchableOpacity>
          <View style={styles.textContain}>
            <Text style={styles.text}>Arabic</Text>
          </View>
        </View>
        <View style={styles.rectangles}>
          <Image
            source={require('../../../my-app/assets/matiere.png')}
            style={styles.image}
            onPress={()=>{navigation.navigate("TeacherDetail")}}
          />
          <View style={styles.textContain}>
            <Text style={styles.text}>Math</Text>
          </View>
        </View>
      
      </View>
      <View style={styles.imageRow}>
        <View style={styles.rectangles}>
          <Image
            source={require('../../../my-app/assets/matiere.png')}
            style={styles.image}
            onPress={()=>{navigation.navigate("TeacherDetail")}}
          />
          <View style={styles.textContain}>
            <Text style={styles.text}
            >Science</Text>
          </View>
        </View>
        <View style={styles.rectangles}>
          <Image
            source={require('../../../my-app/assets/matiere.png')}
            style={styles.image}
            onPress={()=>{navigation.navigate("TeacherDetail")}}
          />
          <View style={styles.textContain}>
            <Text style={styles.text}
            >Sport</Text>
          </View>
        </View>
       
      </View>
      <View style={styles.imageRow}>
        <View style={styles.rectangles}>
          <Image
            source={require('../../../my-app/assets/matiere.png')}
            style={styles.image}
          />
          <View style={styles.textContain}>
            <Text style={styles.text}>Arts</Text>
          </View>
        </View>
        <View style={styles.rectangles}>
          <Image
            source={require('../../../my-app/assets/matiere.png')}
            style={styles.image}
            onPress={()=>{navigation.navigate("TeacherDetail")}}
          />
          <View style={styles.textContain}>
            <Text style={styles.text}>IT</Text>
          </View>
        </View>
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '75%',
    backgroundColor: '#DBC8E4',
  },
  rectContainer: {
    backgroundColor: '#66328E',
    borderRadius: 10,
    paddingHorizontal: 50,
    paddingVertical: 15,
    marginTop: -20,
    alignSelf: 'center',
  },
  teacherText: {
    fontSize: 20,
    color: 'white',
  },
  rectangles: {
    backgroundColor: 'white',
    width: 120,
    height: 140,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 30,
    borderColor: '#66328E',
    borderWidth: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  textContain: {
    marginTop: 10,
  },
  text: {
    fontSize: 18,
  },
  imageRow: {
    flexDirection: 'row', 
    justifyContent: 'center',
    marginRight:25 
  },
});

export default Teachers;

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const StudentClass = () => {
    const navigation = useNavigation();

    const handle1 = () => {
      navigation.navigate('DataStudent1');
    };

    const handle2 = () => {
        navigation.navigate('DataStudent2');
      };

      const handle3 = () => {
        navigation.navigate('DataStudent3');
      };

      const handle4 = () => {
        navigation.navigate('DataStudent4');
      };

      const handle5 = () => {
        navigation.navigate('DataStudent5');
      };

      const handle6 = () => {
        navigation.navigate('DataStudent6');
      };
  return (
    <View style={styles.detailContainer}>
      <Text style={styles.className}>Classes</Text>

      <TouchableOpacity style={styles.button} onPress={handle1}>
        <Text style={styles.buttonText}>Classe 1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handle2}>
        <Text style={styles.buttonText}>Classe 2</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handle3}>
        <Text style={styles.buttonText}>Classe 3</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handle4}>
        <Text style={styles.buttonText}>Classe 4</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handle5}>
        <Text style={styles.buttonText}>Classe 5</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handle6}>
        <Text style={styles.buttonText}>Classe 6</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    backgroundColor: "#DBC8E4",
    borderColor:"purple",
    borderRadius: 10,
    width: "80%",
    height: "90%",
    padding: 20,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:30,
    borderWidth:5,
  },
  className: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#8B5FBF',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default StudentClass;

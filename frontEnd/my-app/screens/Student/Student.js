import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

export default function Student() {
  return (
    <View style={styles.container}>
      <View style={styles.purpleRectangle} />
      <View style={styles.whiteRectangle}>
        <View style={styles.ellipseContainer}>
          <Image
            source={require('../../../my-app/assets/girl.jpeg')} 
            style={styles.ellipseImage}
          />
        </View>
        <View style={styles.studentInfo}>
          <Text style={styles.studentInfoLabel}>Name</Text>
          <Text style={styles.studentInfoValue}>Khouloud</Text>
          <Text style={styles.studentInfoLabel}>Lastname:</Text>
          <Text style={styles.studentInfoValue}>Ouelhazi</Text>
          <Text style={styles.studentInfoLabel}>Date of Birth:</Text>
          <Text style={styles.studentInfoValue}>12/09/2004</Text>
          <Text style={styles.studentInfoLabel}>Class:</Text>
          <Text style={styles.studentInfoValue}>Your Class Name</Text>
          <Text style={styles.studentInfoLabel}>Option 1:</Text>
          <Text style={styles.studentInfoValue}>Avec Bus</Text>
          <Text style={styles.studentInfoLabel}>Option 2:</Text>
          <Text style={styles.studentInfoValue}>Sans Cantine</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  purpleRectangle: {
    width: '90%',
    height: '33.33%',
    backgroundColor: 'purple',
    borderRadius: 20,
    borderTopRightRadius: 16,
    marginTop: 45,
  },
  whiteRectangle: {
    width: '90%',
    height: '80.33%',
    backgroundColor: 'white',
    borderRadius: 20,
    borderBottomLeftRadius: 16,
    marginTop: -150,
    borderColor: '#BA68C8',
    borderWidth: 2,
    alignItems: 'center',
  },
  ellipseContainer: {
    width: 150,
    height: 150,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#BA68C8',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -50,
  },
  ellipseImage: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  studentInfo: {
    marginTop: 40,
    alignItems: 'center',
  },
  studentInfoLabel: {
    fontWeight: 'bold',
    color:"#BA68C8",
    fontSize: 25,
    marginBottom: 5,
  },
  studentInfoValue: {
    fontSize: 16,
  },
});

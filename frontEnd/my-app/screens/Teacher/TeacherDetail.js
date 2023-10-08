
import React from 'react';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { useContext } from "react";
import { MyContext } from "../../useContext/useContext";
const TeacherDetail = () => { 
  const {Class,setClass} = useContext(MyContext);
  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <Text style={styles.centeredText}>Mr/Mss</Text>
        <View style={styles.centeredView}>
          {/* Contenu de la deuxième vue */}
          <View style={styles.contentContainer}>
            {/* Ellipse avec image */}
            <View >
            <Image
          source={require('../../../my-app/assets/girl.jpeg')}
          style={styles.image}
        />
            </View>

            {/* Nom et prénom en gras */}
            <Text style={styles.name}>Nom Prénom</Text>

            {/* Description de la personne */}
            <Text style={styles.description}>Description de la personne...</Text>

            {/* Rectangle avec le bouton "Send Message" et l'icône de chat */}
            <View style={styles.rectangle}>
              <FontAwesomeIcon icon={faComment} style={styles.chatIcon} />
              <Text  style={styles.sendMessage}>Send Message</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailContainer: {
    backgroundColor: '#DBC8E4',
    borderRadius: 10,
    width: '80%',
    height: '90%',
    padding: 20,
    marginTop: 40,
  },
  centeredView: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'purple',
    width: '100%',
    height: '90%',
    marginTop: 30,
  },
  centeredText: {
    textAlign: 'center',
    fontSize: 20,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ellipse: {
    width: 200,
    height: 200,
    borderRadius: 50,
    backgroundColor: '#66328E',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 300,
    borderRadius: 40,
    marginBottom: 10,
   
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
  },
  rectangle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#66328E',
    borderRadius: 10,
  },
  chatIcon: {
    color: 'white',
    marginRight: 5,
  },
  sendMessage: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default TeacherDetail;

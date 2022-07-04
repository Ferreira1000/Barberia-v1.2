// importação das Bibliotecas 
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { authentication } from '../../config/firebaseconfig';
import { getFirestone, collection, getDocs } from 'firebase/firestore/lite';


//Funcao  Tela Login 

export const Agendamentos = ({ navigation }) => (  
    <View style={styles.container}>
      <View style={styles.square} />
      <View style={styles.square} />
      <View style={styles.square} />
    </View>
  );

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#000",
      flex:1,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    square: {
      backgroundColor: "#8B0000",
      width: 350,
      height: 150,
      margin: 10,
      borderRadius: 10,
    }
  })

export default  Agendamentos;
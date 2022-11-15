import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import LoginScreen from './LoginScreen';

import Logo from '../assets/profile.png';


function WelcomeScreen({ navigation }) {
  
  const pressHandler = () => {
    navigation.navigate("LoginScreen"); // Nájde obrazovku a prepne
    navigation.goBack();
}

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageLogo}
        source={Logo}
      />
      <View style={styles.containerLogIn}>
        <TouchableOpacity onPress={pressHandler}>
          <Text style={styles.textSetup}>LOG IN</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.containerSignUp}>
          <Text style={styles.textSetup}>SIGN UP</Text>
        </View>
    </View>
  )
}

export const styles = StyleSheet.create({

    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fffb00',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    imageLogo: {
        height: '25%',
        width: '25%',
        marginBottom: "50%",
    },
    containerLogIn: {
        height: '12.5%',
        maxHeight: '12.5%',
        width: '100%',
        backgroundColor: '#f23c55',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerSignUp: {
        height: '12.5%',
        maxHeight: '12.5%',
        width: '100%',
        backgroundColor: '#0eadff',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textSetup: {
        fontSize: 25,
        fontWeight: '600',
        color: 'white'
    },
})


export default WelcomeScreen
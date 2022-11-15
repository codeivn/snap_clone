import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import ChatScreen from './ChatScreen';


function LoginScreen({ navigation }) {

  const [inputName, setInputName] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const userName = 'admin';
  const userPassword = '123';
  

  const UserLogin = () => {
  
    if (inputName == userName && inputPassword == userPassword) {
      navigation.navigate("ChatScreen");
    }
    else {
      Alert.alert('User do not exist');
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.textHeader}>Log In</Text>
      </View>
      <Text style={styles.textUserName}>USERNAME OR EMAIL</Text>
      <TextInput 
        onChangeText={(value => setInputName(value))}
        value={inputName} 
        style={styles.input} 
      />
      <Text style={styles.textUserName}>PASSWORD</Text>
      <TextInput
        onChangeText={(value => setInputPassword(value))}
        value={inputPassword}  
        style={styles.input}
       />
      <View style={styles.containerSaveLogin}>
        <Ionicons name="md-cloud-done-outline" 
          size={25} 
          color="black" />
        <Text style={styles.textSave}>Save login Info on your iCloud devices</Text>
      </View>
      <Text style={styles.textForgot}>Forgot your password??</Text>
      <TouchableOpacity
        style={styles.buttonLogin}
        onPress={UserLogin}
      >
        <Text>Log In</Text>
      </TouchableOpacity>
    </View>
  )
}

export const styles = StyleSheet.create ({

    containerHeader: {
      alignItems: 'center',
      paddingTop: 25,
    },
    textHeader: {
      fontSize: 25
    },
    textUserName: {
      color: 'grey',
      paddingTop: 25,
      paddingLeft: 50,
    },
    input: {
      borderBottomColor: 'grey',
      borderBottomWidth: 1,
      width: '75%',
      paddingTop: 25,
      marginLeft: 50,
      fontSize: 15,
    },
    containerSaveLogin: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 15,
    },
    textSave: {
      color: 'grey',
      fontSize: 12.5,
      paddingLeft: 12.5,
    },
    textForgot: {
      color: '#4481bd',
      justifyContent: 'flex-end',
      fontSize: 12.5,
      marginLeft: '30%',
      marginTop: '5%',
    },
    buttonLogin: {
      height: 50,
      width: 200,
      marginLeft: 85,
      alignItems: "center",
      justifyContent: 'center',
      backgroundColor: "#DDDDDD",
      borderRadius: 45,
      marginTop: '50%',
    },
})

export default LoginScreen
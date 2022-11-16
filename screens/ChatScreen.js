import React, { useState } from 'react'

import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'; 

import HeaderChat from '../components/HeaderChat';

import Profile from '../assets/profile.png'

function ChatScreen() {

     const [chat, setChat] = useState([
        { name: 'Telegram', date: 'Today', uri: {Profile}, key: '1' },
        { name: 'Ivan', date: 'Sun', uri: {Profile}, key: '2'},
        { name: 'React', date: '23.10', uri: require('../assets/profile.png'), key: '3'}, 
    ]) 

    const MessageTap = () => {
        const message = 'Správa';

        Alert.alert(message);
      }

  return (
    <View style={styles.container}>
        <HeaderChat />
        <ScrollView>
                { chat.map((item) => {
                    return(
        <View key={item.key} style={styles.containerChat}>
                <View style={styles.firstRow}>
                <Image 
                    style={styles.imageSetup} 
                    source={item.uri} 
                />
            <TouchableOpacity onPress={MessageTap}>
            <Text style={styles.textMessage}>
            
            <Text style={styles.textName}>{item.name}</Text> {"\n"}Hey there, welcome on Telegram</Text></TouchableOpacity>
            <Text style={styles.textDate}>{item.date}</Text>
            
            </View>
        </View>
               )
            })}</ScrollView>
    </View>
  )
}

export const styles = StyleSheet.create({

    containerChat: {
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderBottomColor: 'grey',
        borderBottomStartRadius: '50%',
    },
    textName: {
        color: 'white',
        fontSize: 17.5,
    },
    textDate: {
        color: '#828282',
        paddingTop: 20,
        paddingLeft: 30,
        fontSize: 15,
        marginLeft: 5,
    },
    textMessage: {
        color: '#828282',
        paddingTop: 20,
        paddingLeft: 10,
        fontSize: 15,
        marginBottom: 7.5,
    },
    imageSetup: {
        height: 50,
        width: 50,
        borderRadius: 100,
        resizeMode: 'contain',
        marginTop: 10,
        marginLeft: 5,
        marginRight: 2.5,
     },
})

export default ChatScreen
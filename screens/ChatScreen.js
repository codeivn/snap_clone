import React, { useState } from 'react'

import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'; 

import HeaderChat from '../components/HeaderChat';

import Profile from '../assets/profile.png'
import NavigationBar from '../components/NavigationBar';

function ChatScreen() {

     const [chat, setChat] = useState([
        { name: 'Ivan', date: 'Today', status: 'Opened', time: '5h', uri: require('../assets/avatar.png'), key: '1' },
        { name: 'Snapchat', date: 'Sun', status: 'Opened', time: '6h', uri: require('../assets/profile.png'), key: '2'},
        { name: 'React', date: '23.10', status: 'Delivered', time: '30m', uri: require('../assets/react.png'), key: '3'}, 
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
                                style={styles.imageProps} 
                                source={item.uri} 
                            />
                        <TouchableOpacity onPress={MessageTap}>
                            <Text style={styles.textMessage}>
                            <Text style={styles.textName}>{item.name}</Text> {"\n"}{item.status} • {item.time}</Text>
                        </TouchableOpacity>
                        <Feather 
                            name="camera" 
                            style={styles.iconProps} 
                            size={24} 
                            color="#828282" 
                        />
                        </View>
                    </View>
               )
            })}
        </ScrollView>
        <NavigationBar />
    </View>
  )
}

export const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
    containerChat: {
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderBottomColor: '#dfe8e1',
    },
    textName: {
        color: 'black',
        fontSize: 17.5,
    },
    textMessage: {
        color: '#828282',
        paddingTop: 20,
        paddingLeft: 10,
        fontSize: 15,
        marginBottom: 7.5,
    },
    imageProps: {
        height: 45,
        width: 45,
        resizeMode: 'contain',
        marginTop: 10,
        marginLeft: 7.5,
        marginRight: 2.5,
     },
     firstRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 5,
    },
    iconProps: {
        marginLeft: 125,
        marginTop: 15, 
    },
})

export default ChatScreen
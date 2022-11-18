import React from 'react'

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

import Profile from '../assets/avatar.png'

function HeaderChat() {
  return (
    <View style={styles.container}>
        <View style={styles.firstItems}>
        <Image
            source={Profile} 
            style={styles.imageProfile} 
        />
        <FontAwesome 
            name="search" 
            size={25} 
            color="#7c7e8b" 
            style={styles.iconBasic}
        />
        </View>
        <Text style={styles.textHeader}>Chat</Text>
        <View style={styles.secondItems}>
        <FontAwesome 
            name="user-plus" 
            size={25} 
            color="#7c7e8b" 
            style={styles.iconBasic}
        />
        <FontAwesome 
            name="search" 
            size={25} 
            color="#7c7e8b" 
            style={styles.iconBasic}
        />
        </View>
    </View>
  )
}

export const styles = StyleSheet.create({
    
    container: {
        height: 80,
       // backgroundColor: 'grey',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imageProfile: {
        height: 40,
        width: 40,
        marginLeft: 10,
        marginTop: 10,
    },
    firstItems: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconBasic: {
        marginLeft: 10,
        marginTop: 10,  
    },
    textHeader: {
        fontSize: 25,
        fontWeight: '700',
        marginTop: 10,
    },
    secondItems: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
    },
})

export default HeaderChat
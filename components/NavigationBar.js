import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function NavigationBar() {
  return (
    <View style={styles.container}>
        <Ionicons name="location-outline" size={30} color="white" />
        <Ionicons name="chatbox-outline" size={30} color="white" />
        <Ionicons name="ios-camera-outline" size={30} color="white" />
        <Ionicons name="people-outline" size={30} color="white" />
        <Ionicons name="play-outline" size={30} color="white" />
    </View>
  )
}

export const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
})
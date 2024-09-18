import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
<Tabs styles={styles.container} >
  <Tabs.Screen
    name="home"
    options={{
      title: "HOME",
    }}
  />
  <Tabs.Screen
    name="profile"
    options={{
      title: "PROFILE",
    }}
  />
  <Tabs.Screen
    name="settings"
    options={{
      title: "SETTINGS",
    }}
  />
</Tabs>
  )
}

const styles = StyleSheet.create({
  container: { 
    backgroundColor: "red",
    width: "100%",
    height: "100%",
    flex: 1, 
    zIndex: 4
  }

})
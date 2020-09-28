  
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View,Text } from 'react-native'
import TabScreen from './components/screens/TabScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <TabScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

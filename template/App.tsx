import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const App = () => {
  return (
    <View style={styles.appContainer}>
      <Text style={styles.appText}>App Screen</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  appText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000'
  }
})
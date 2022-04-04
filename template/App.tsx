import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const App = () => {
  return (
    <View style={styles.appContainer}>
      <Text style={styles.appText}>App Screen</Text>
      <Text style={styles.secondText}>by Mindinventory</Text>
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000'
  },
  secondText: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'normal',
    color: '#aaa'
  }
})
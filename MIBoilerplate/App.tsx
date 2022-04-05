import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { miLogoImg } from 'app-assets';

const App = () => {
  return (
    <View style={styles.appContainer}>      
      <Image source={miLogoImg} resizeMode='contain' style={styles.logo} />
      <Text style={styles.secondText}>Created by <Text style={styles.boldText}>Mindinventory</Text></Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  secondText: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'normal',
    color: '#aaa',
    
  },
  boldText: {
    fontWeight: 'bold',
    
  },
  logo: {
    height: 100,
    width: 300,
    alignSelf: 'center',
  }
})
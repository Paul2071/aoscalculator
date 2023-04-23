import React from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, } from 'react-native'

function AvgDamage({}) {
  return (
    <View style={styles.mainContainer}>
        <View style={styles.inputContainer}>


        </View>
        <View style={styles.effectsContainer}>


        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
      flex: 1,
  },
  inputContainer: {
    backgroundColor: "blue",
    flex: 1
  },
  effectsContainer: {
    flex: 1,
    backgroundColor: "pink"
    
  },

})

export default AvgDamage
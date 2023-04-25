import React from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, } from 'react-native'
import CheckBoxGroup from './checkboxtest'

function AvgDamage({}) {

  
  return (


    <View style={styles.mainContainer}>
        <View style={styles.inputContainer}>
            <View style={styles.titlesPositioning}>
              <Text style={styles.textTitlesStyling}>Number of attacks</Text>
              <Text style={styles.textTitlesStyling}>Hitting on</Text>
              <Text style={styles.textTitlesStyling}>Wounding on</Text>
              <Text style={styles.textTitlesStyling}>Rend</Text>
              <Text style={styles.textTitlesStyling}>Average Hits</Text>
              <Text style={styles.textTitlesStyling}>Average Wounds</Text>
              <Text style={styles.textTitlesStyling}>Enemy Save</Text>
              <Text style={styles.textTitlesStyling}>Ward Save</Text>
            </View>

            <View style={styles.inputPositioning}>
            <TextInput style={styles.textInputStyling} placeholder='0'></TextInput>
            <TextInput style={styles.textInputStyling} placeholder='0'></TextInput>
            <TextInput style={styles.textInputStyling} placeholder='0'></TextInput>
            <TextInput style={styles.textInputStyling} placeholder='0'></TextInput>
            <TextInput style={styles.textInputStyling} placeholder='0'></TextInput>
            <TextInput style={styles.textInputStyling} placeholder='0'></TextInput>
            <TextInput style={styles.textInputStyling} placeholder='0'></TextInput>
            <TextInput style={styles.textInputStyling} placeholder='0'></TextInput>
            </View>

        </View>
        <View style={styles.effectsContainer}>
          <CheckBoxGroup/>
        
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
      flex: 1,
  },
  inputContainer: {
    //backgroundColor: "grey",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  effectsContainer: {
    flex: 1,
    backgroundColor: "pink"
    
  },
  titleAndInputContainer: {
    flexDirection:"column",
    justifyContent: "space-evenly"
  },
  titlesPositioning: {
    backgroundColor: "lightgreen",
  },
  inputPositioning: {
    backgroundColor: "orange",  
    

  },
  textInputStyling: {
  borderColor: 'black',
  borderWidth: 1,
  borderRadius: 5,
  height: 40,
  width: 30,
  textAlign: "center",
  margin: 2,
  
  },
  textTitlesStyling: {
    borderColor: 'black',
  borderWidth: 1,
  borderRadius: 5,
  height: 40,
  width: 180,
  textAlign: "center",
  padding: 10,
  margin: 2,
  

  }

})

export default AvgDamage
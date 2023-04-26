import React from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, } from 'react-native'
import CheckBoxGroup from './checkboxtest'

function AvgDamage({}) {

  
  return (


    <View style={styles.mainContainer}>
        <View style={styles.inputContainer}>
            
            <View style={styles.hitAndWoundInput} >
              <Text style={styles.textTitlesStyling} >Hitting on</Text>
              <TextInput style={styles.textInputStyling}  placeholder='0'></TextInput>
              <Text >Wounding on</Text>
              <TextInput style={styles.textInputStyling}  placeholder='0'></TextInput>
            </View>

            <View style={styles.attacksAndRendInput}>
              <Text >Number of attacks</Text>
              <TextInput  placeholder='0'></TextInput>
              <Text >Rend</Text>
              <TextInput  placeholder='0'></TextInput>
            </View>

            <View style={styles.averageHitandWounds}>
              <Text >Average Hits</Text>
              <Text> 0</Text>
              <Text >Average Wounds</Text>
              <Text> 0</Text>
            </View>

            <View style={styles.enemySavesInput}>
              <Text >Enemy Save</Text>
              <TextInput  placeholder='0'></TextInput>
              <Text >Ward Save</Text>
              <TextInput  placeholder='0'></TextInput>
            </View>


            <View >
            
            
            
           
            
            
            </View>

        </View>
        <View style={styles.effectsContainer}>

            <Text></Text>

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
      
  },
  effectsContainer: {
    flex: 1.5,
    backgroundColor: "pink"
    
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
  alignContent: 'center',
 
  
  

  },
  hitAndWoundInput: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    margin: 10,
    padding: 10,
    textAlign: "center"
  },
  attacksAndRendInput : {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    margin: 10,
    padding: 10,
    textAlign: "center",
    
  },
  averageHitandWounds: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    margin: 10,
    padding: 10,
    textAlign: "center"
  },
  enemySavesInput: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    margin: 10,
    padding: 10,
    textAlign: "center"
  }

})

export default AvgDamage
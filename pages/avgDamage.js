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
              <Text style={styles.textTitlesStyling}>Wounding on</Text>
              <TextInput style={styles.textInputStyling}  placeholder='0'></TextInput>
            </View>

            <View style={styles.attacksAndRendInput}>
              <Text style={styles.textTitlesStyling}>Number of attacks</Text>
              <TextInput style={styles.textInputStyling}   placeholder='0'></TextInput>
              <Text style={styles.textTitlesStyling}>Rend</Text>
              <TextInput style={styles.textInputStyling}  placeholder='0'></TextInput>
            </View>

            <View style={styles.averageHitandWounds}>
              <Text style={styles.textTitlesStyling}>Average Hits</Text>
              <Text> 0</Text>
              <Text style={styles.textTitlesStyling}>Average Wounds</Text>
              <Text> 0</Text>
            </View>

            <View style={styles.enemySavesInput}>
              <Text style={styles.textTitlesStyling}>Enemy Save</Text>
              <TextInput style={styles.textInputStyling} placeholder='0'></TextInput>
              <Text style={styles.textTitlesStyling}>Ward Save</Text>
              <TextInput style={styles.textInputStyling} placeholder='0'></TextInput>
            </View>


            <View >
            
            
            
           
            
            
            </View>

        </View>

        <View style={styles.effectsContainer}>

            
          <CheckBoxGroup/>
        
        </View>

        <View style={styles.damageCalculationsContainer}>
            <View style={styles.damageCalculationsTitles}>
              <Text style={styles.damageCalculationsText}>Mortal Wounds</Text>
              <Text style={styles.damageCalculationsText}>0</Text>
              <Text style={styles.damageCalculationsText}>Wounds</Text>
              <Text style={styles.damageCalculationsText} >0</Text>
            </View>

            <View style={styles.totalDamageCalculationContainer}>
              <Text style={styles.totalDamageCalculationText}>TOTAL DAMAGE: </Text>
              <Text style={styles.totalDamageCalculationText}>0</Text>
            </View>
          
        </View>
    </View>
  )
}

const styles = StyleSheet.create({

  //container that has all content on this page
  mainContainer: {
      flex: 1,
      
  },
  //container that has the top half requiring user input
  inputContainer: {
    //backgroundColor: "grey",
    flex: 1.8,
    
      
  },
  //container that has the bottom half of the page, the checkboxes and damage output
  effectsContainer: {
    flex: 2,
    backgroundColor: "pink"
    
  },
 
  
  //styling for any text input components on the page
  textInputStyling: {
  borderColor: 'black',
  borderWidth: 1,
  borderRadius: 20,
  
  width: 50,
  textAlign: "center",
 
  
  },
  //styling for any text components on the page
  textTitlesStyling: {
    borderColor: 'black',
  borderWidth: 1,
  borderRadius: 5,
  alignContent: 'center',
  padding: 10,
  textAlign:"center" 

  },
  hitAndWoundInput: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    margin: 5,
    padding: 10,
    textAlign: "center"
  },
  attacksAndRendInput : {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    margin: 5,
    padding: 10,
    textAlign: "center",
    
  },
  averageHitandWounds: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    margin: 5,
    padding: 10,
    textAlign: "center"
  },
  enemySavesInput: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    margin: 5,
    padding: 10,
    textAlign: "center"
  },

   //container for the damage calculations at the bottom of screen
   damageCalculationsContainer: {
    //backgroundColor: 'lightgreen',
    flex: 0.6,
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 5,
    margin: 2
   
},

  damageCalculationsTitles: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flex: 1,
    backgroundColor: "grey"
  
  },
  damageCalculationsText: {
   
   padding: 3
  },

  totalDamageCalculationContainer: {
    flex: 2,
    backgroundColor: "lightblue",
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    

  },
  totalDamageCalculationText: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 15
  }

})

export default AvgDamage
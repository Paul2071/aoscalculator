import React from 'react'
import { Text, Button, View, TouchableOpacity, StyleSheet  } from 'react-native'

import HeaderHamburger from '../components/headerHamburger'

function Menu({navigation}) {
  return (

    <View style={styles.mainContainer}>
      

      
              <TouchableOpacity 
              title='AvgDamage'
              onPress={()=> navigation.navigate("AvgDamage")} >
                <Text style={styles.buttonContainerStyling}> DAMAGE CALCULATOR</Text>
              </TouchableOpacity>

              <TouchableOpacity 
              title='AvgDice'
              onPress={()=> navigation.navigate("AvgDice")} >
                <Text style={styles.buttonContainerStyling}> DICE ROLL AVERAGES</Text>
              </TouchableOpacity>

              <TouchableOpacity 
              title='DiceRolling'
              onPress={()=> navigation.navigate("DiceRolling")} >
                <Text style={styles.buttonContainerStyling}>DICE ROLLING</Text>
              </TouchableOpacity>
              <TouchableOpacity 
              title='Checkboxtest'
              onPress={()=> navigation.navigate("Checkboxtest")} >
                <Text style={styles.buttonContainerStyling}>Checkboxtest</Text>
              </TouchableOpacity>

             
       

               
     </View>

  )
}

const styles = StyleSheet.create ({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#003049"
  },

  buttonContainerStyling: {
    backgroundColor: "#c1121f",
    borderRadius: 8,    
    textAlign: "center",
    color: "#fff8dc",
    padding: 20,
    fontWeight: "bold",
    width: 180,
    fontSize: 20,
  }
})

export default Menu
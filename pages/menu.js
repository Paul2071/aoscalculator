import React from 'react'
import { Text, Button, View, TouchableOpacity, StyleSheet  } from 'react-native'

import HeaderHamburger from '../components/headerHamburger'

function Menu({navigation}) {
  return (

    <View style={styles.mainContainer}>
          <View style={styles.keyContainer}>

            <View style={styles.keyPositioningLeft}>

              <Text>Key:</Text>
                <View style={styles.keyContentPositioning}>
                  <Text style={styles.keyContent}>H</Text> 
                  <Text>:To hit</Text>
                </View>

              <View style={styles.keyContentPositioning}>
              <Text style={styles.keyContent}>W</Text>
               <Text>:To wound</Text> 
              </View>


              <View style={styles.keyContentPositioning}>
              <Text style={styles.keyContent}>A</Text>
               <Text>:Attacks total</Text> 
              </View>

            </View>


            <View style={styles.keyPositioningRight}>

              <Text>R:</Text>
              <Text>D:</Text>
              <Text>S:</Text>
              <Text>W:</Text>

            </View>


          </View>

          <View style={styles.buttonContainer}>
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

            
            </View>
             
       

               
     </View>

  )
}

const styles = StyleSheet.create ({
  mainContainer: {
    flex: 1,
    
  },

  keyContainer: {
    flex: 0.5,
    flexDirection: "row"
  },

  buttonContainer: {
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
  },
  keyPositioningLeft: {
    backgroundColor: "lightgreen",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  keyPositioningRight: {
    flex: 1,
    backgroundColor: "salmon",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",

  },
  keyContent: {
    backgroundColor: "red",
    borderRadius: 5,
    padding: 8,
    borderWidth: 4,
    height: 30,
    width: 30,
    
  },
  
  keyContentPositioning: {
    flexDirection: "row"
  },
})

export default Menu
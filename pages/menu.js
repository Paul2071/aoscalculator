import React from 'react'
import { Text, Button, View, TouchableOpacity, StyleSheet  } from 'react-native'

import HeaderHamburger from '../components/headerHamburger'

function Menu({navigation}) {
  return (

    <View style={styles.mainContainer}>
          <View style={styles.keyContainer}>

            <View style={styles.keyPositioningLeft}>

            <View style={styles.rightKeyContentPositioning} >
                  <Text >H</Text>
                  <Text >: To hit</Text>
                  
                </View>  

                <View style={styles.rightKeyContentPositioning}>
                  <Text >W</Text>
                  <Text >: To wound</Text>
                 </View>  

                <View style={styles.rightKeyContentPositioning}>
                  <Text >A</Text>
                  <Text >: Total attacks</Text>
                 </View>

                 <View style={styles.rightKeyContentPositioning}>
                  <Text >D</Text>
                  <Text >: Damage</Text>
                 </View>  

                      



            </View>



            <View style={styles.keyPositioningRight}>
              
                <View style={styles.rightKeyContentPositioning} >
                  <Text >R</Text>
                  <Text >: Rend</Text>
                  
                </View>  

                 

                <View style={styles.rightKeyContentPositioning}>
                  <Text >S</Text>
                  <Text >: Base Save</Text>
                 </View>

                <View style={styles.rightKeyContentPositioning}>
                  <Text >W</Text>
                  <Text >: Ward Save</Text>
                 
                </View>  

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
    backgroundColor: "#c1121f",
    borderRadius: 8,   
    borderWidth: 3, 
    textAlign: "center",
    color: "#fff8dc",
    padding: 10,
    margin: 2,
    fontWeight: "bold",
    width: 40,
    height: 40,
    fontSize: 16,
    
  },
    

  keyContentPositioning: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

 

  keyContentContainer: {
    flex: 6,
    backgroundColor: "lightgrey"
  },
  keyContentValues: {
    flex: 1,
  },

  rightKeyContentPositioning: {
    flexDirection: "row",
    justifyContent: "center"  
  },
 
})

export default Menu
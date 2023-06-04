import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet  } from 'react-native'



function Menu({navigation}) {
  return (

    <View style={styles.mainContainer}>
          <View style={styles.keyContainer}>

            <View style={styles.keyPositioningLeftContainer}>

            <View  >
                  <Text style={styles.legendContainerStyling}>LEGEND</Text>
                                  </View>  

            <View style={styles.rightKeyContentPositioning} >
                  <Text style={styles.keyContentBox} >H</Text>
                  <Text style={styles.keyContentText}>: TO HIT</Text>
                  
                </View>  

                <View style={styles.rightKeyContentPositioning}>
                  <Text style={styles.keyContentBox}>W</Text>
                  <Text style={styles.keyContentText}>: TO WOUND</Text>
                 </View>  

                <View style={styles.rightKeyContentPositioning}>
                  <Text style={styles.keyContentBox}>A</Text>
                  <Text style={styles.keyContentText}>: TOTAL ATTACKS</Text>
                 </View>


                      



            </View>



            <View style={styles.keyPositioningRightContainer}>
              
                
                 <View style={styles.rightKeyContentPositioning}>
                  <Text style={styles.keyContentBox}>D</Text>
                  <Text style={styles.keyContentText}>: DAMAGE</Text>
                 </View>  


                <View style={styles.rightKeyContentPositioning} >
                  <Text style={styles.keyContentBox}>R</Text>
                  <Text style={styles.keyContentText}>: REND</Text>
                  
                </View>  

                 

                <View style={styles.rightKeyContentPositioning}>
                  <Text style={styles.keyContentBox}>S</Text>
                  <Text style={styles.keyContentText}>: BASE SAVE</Text>
                 </View>

                <View style={styles.rightKeyContentPositioning}>
                  <Text style={styles.keyContentBox}>W</Text>
                  <Text style={styles.keyContentText}>: WARD SAVE</Text>
                 
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
                <Text style={styles.buttonContainerStyling}>ATTACK DICE ROLLING</Text>
              </TouchableOpacity>
              <TouchableOpacity 
              title='DiceRolling'
              onPress={()=> navigation.navigate("DiceRolling")} >
                <Text style={styles.betaButtonStyling}>THIS APP IS IN BETA</Text>
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
  betaButtonStyling: {
    backgroundColor: "#fff8dc",
    borderRadius: 38,    
    textAlign: "center",
    color: "#c1121f",
    padding: 20,
    fontWeight: "bold",
    width: 180,
    fontSize: 20,
  },
 legendContainerStyling: {
    backgroundColor: "#c1121f",
    borderRadius: 35,    
    textAlign: "center",
    color: "#fff8dc",
    padding: 10,   
    fontWeight: "bold",
    width: 140,
    fontSize: 20,
    
  },
  keyPositioningLeftContainer: {
    backgroundColor: "#003049",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    
  },
  keyPositioningRightContainer: {
    flex: 1,
    backgroundColor: "#003049",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",

  },
  keyContentBox: {
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
  keyContentText: {
    fontWeight: "bold",
    padding: 10,
    color: "#fff8dc"
  },  
 


   rightKeyContentPositioning: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: 'flex-start',
    marginLeft: 10,
    
    
  },
 
})

export default Menu
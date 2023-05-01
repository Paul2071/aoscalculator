import React, { useEffect } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, } from 'react-native'
import CheckBoxGroup from './checkbox'

function AvgDamage() {
  //user input what value to hit the dice needs
  const [ toHitValue, setToHitValue ] = React.useState(0)
  //user input what value to wound the dice needs
  const [ toWoundValue, setToWoundValue ] = React.useState(0)
  //user input to determine number of attacks being made
  const [attacksValue, setAttacksValue ] = React.useState(10)
  //user input to determine value of rend
  const [rendValue, setRendValue] = React.useState(0)
  //user input to determine the enemy unit save
  const [shownEnemySaveValue, setShownEnemySaveValue ] = React.useState(0 )
  //user input to determine the ward save value
  const [ wardSaveValue, setWardSaveValue ] = React.useState(0)
  //user input determining the rend value
 
 //actual enemy save value is taking user input of save value minus the rend value and is used for wound calculations
 const [ actualEnemySaveValue, setActualEnemySaveValue]  = React.useState(0)

  //average hits calculated by toHit divided by attacksValue
  const [averageHitsCalculation, setAverageHitsCalculation ] = React.useState(0)
  //average wounds calculation, taking averageHitsCalculation value and using same if check as tohit finding how many wound
  const [ averageWoundsCalculation, setAverageWoundsCalculation ]  = React.useState(0)
  //the number of wounds calculated after factoring in enemy save
  const [enemySaveAndWounds, setEnemySaveAndWounds]  = React.useState(0)

  //mortal wounds generated 
  const [mortalWounds, setMortalWounds]  = React.useState(0)

  let actualEnemySave = Number(shownEnemySaveValue) + Number(rendValue)
 

  function calculateAverageHits ( ) {
    if (toHitValue === "1"){
      setAverageHitsCalculation(1 * attacksValue )
      console.log(attacksValue)
    } 
    else if (toHitValue === "2")
    {
      setAverageHitsCalculation(Math.round(0.83 * attacksValue) )
    }
    else if (toHitValue === "3")
    {
      setAverageHitsCalculation(Math.round(0.66 * attacksValue) )
    } 
    else if (toHitValue === "4")
    {
      setAverageHitsCalculation(Math.round(0.50 * attacksValue) )
    }
    else if (toHitValue === "5")
    {
      setAverageHitsCalculation(Math.round(0.33 * attacksValue) )
    }
    else if (toHitValue === "6")
    {
      setAverageHitsCalculation(Math.round(0.17 * attacksValue) )
    }
    calculateAverageWounds()

  }


   async function  calculateAverageWounds () {
      if (toWoundValue === "1"){
        
        setAverageWoundsCalculation(1 * averageHitsCalculation)  
      }
      else if (toWoundValue === "2" ){
        setAverageWoundsCalculation(Math.round(0.83 * averageHitsCalculation) )
      }
      else if (toWoundValue === "3" ){
        setAverageWoundsCalculation(Math.round(0.66 * averageHitsCalculation) )
      }
      else if (toWoundValue === "4" ){
        setAverageWoundsCalculation(Math.round(0.50 * averageHitsCalculation) )
      }
      else if (toWoundValue === "5" ){
        setAverageWoundsCalculation(Math.round(0.33 * averageHitsCalculation) )
      }
      else if (toWoundValue === "6" ){
        setAverageWoundsCalculation(Math.round(0.17 * averageHitsCalculation) )
      }
      
      actualWounds(averageWoundsCalculation)
    }

      //here, I have average wounds calculation. Need to include enermy save, ward save, and rend


      function actualWounds (averageWoundsCalculation) {
        console.log(typeof averageWoundsCalculation)
        console.log( actualEnemySave)
        console.log( enemySaveAndWounds + "before")
       

        
        
         if   (actualEnemySave === 1) {
           setEnemySaveAndWounds(Math.round (1  * averageWoundsCalculation ))
         }
         else if (actualEnemySave === 2) {
           setEnemySaveAndWounds(Math.round (0.83  * averageWoundsCalculation ))
         }
         else if (actualEnemySave === 3) {
           setEnemySaveAndWounds(Math.round (0.66  * averageWoundsCalculation ))
         }
         else if (actualEnemySave === 4) {
           setEnemySaveAndWounds(Math.round (0.50  * averageWoundsCalculation))
         }
         else if (actualEnemySave === 5) {
           setEnemySaveAndWounds(Math.round (0.33  * averageWoundsCalculation ))
         }
         else if (actualEnemySave === 6) {
           setEnemySaveAndWounds(Math.round (0.17  * averageWoundsCalculation ))
         }

         console.log( enemySaveAndWounds + "after")
       
      }

  function resetUserInput ( ) {
    setToHitValue(0)
    setToWoundValue(0)
    setAttacksValue(0)
    setRendValue(0)
    setShownEnemySaveValue(0)
    setWardSaveValue(0)
    setAverageHitsCalculation(0)
    setAverageWoundsCalculation(0)
    setEnemySaveAndWounds(0)
  }

   
  
    






  return (


    <View style={styles.mainContainer}>
    
        <View style={styles.inputContainer}>
            
            <View style={styles.hitAndWoundInput} >
            
              <Text style={styles.textTitlesStyling} >To Hit</Text>
              <TextInput 
              style={styles.textInputStyling}  
              placeholder='0'
              keyboardType='numeric'
              value={toHitValue}
              onChangeText={setToHitValue}>
              </TextInput>
              <Text style={styles.textTitlesStyling}>To Wound</Text>
              <TextInput style={styles.textInputStyling}  
              placeholder='0'
              keyboardType='numeric'
              value={toWoundValue}
              onChangeText={setToWoundValue}>                
              </TextInput>
            </View>

            <View style={styles.attacksAndRendInput}>
              <Text style={styles.textTitlesStyling}>Number of attacks</Text>
              <TextInput style={styles.textInputStyling}   
              placeholder='0'
              keyboardType='numeric'
              value={attacksValue}
              onChangeText={setAttacksValue}>
              </TextInput>
              <Text style={styles.textTitlesStyling}>Rend</Text>
              <TextInput style={styles.textInputStyling}  
              placeholder='0'
              keyboardType='numeric'
              value={rendValue}
              onChangeText={setRendValue}>                
              </TextInput>
            </View>

            <View style={styles.averageHitandWounds}>
              <Text style={styles.textTitlesStyling}>Average Hits</Text>
              <Text style={styles.averageHitandWoundsText}> {averageHitsCalculation}</Text>
              <Text style={styles.textTitlesStyling}>Average Wounds</Text>
              <Text style={styles.averageHitandWoundsText}> {averageWoundsCalculation}</Text>
            </View>

            <View style={styles.enemySavesInput}>
              <Text style={styles.textTitlesStyling}>Enemy Save</Text>
              <TextInput style={styles.textInputStyling} 
              placeholder='0'
              keyboardType='numeric'
              value={shownEnemySaveValue}
               onChangeText={setShownEnemySaveValue}
              >
              </TextInput>
              <Text style={styles.textTitlesStyling}>Ward Save</Text>
              <TextInput style={styles.textInputStyling} 
              placeholder='0'
              keyboardType='numeric'
              value={wardSaveValue}
              onChangeText={setWardSaveValue}>                
              </TextInput>
            </View>
            <View style={styles.headingContainer}>

            <Text style={styles.textTitlesStyling}>To Hit</Text>
            <TouchableOpacity 
              title='AvgDice'
              onPress={()=>calculateAverageHits()} >
                <Text style={styles.buttonContainerStyling}> CALCULATE</Text>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={()=> resetUserInput() }>
                  <Image
                  style={styles.resetIconStyling}
                  source={require("../assets/images/reseticon.png")}></Image>
              </TouchableOpacity>
            
            <Text style={styles.textTitlesStyling} >To wound</Text>
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
              <Text style={styles.damageCalculationsText} >{enemySaveAndWounds}</Text>
            </View>

            <View style={styles.totalDamageCalculationContainer}>
              <Text style={styles.totalDamageCalculationText}>TOTAL DAMAGE: </Text>
              <Text style={styles.totalDamageCalculationText}>{enemySaveAndWounds + mortalWounds}</Text>
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
    flex: 2.4,  
    backgroundColor: 'lightblue'          
  },
  //container that has the bottom half of the page, the checkboxes and damage output
  effectsContainer: {
    flex: 2,
    //backgroundColor: "pink"    
  },
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5
  },
  buttonContainerStyling: {
    backgroundColor: "#c1121f",
    borderRadius: 8,  
    textAlign: "center",
    color: "#fff8dc",
    padding: 10,
    fontWeight: "bold",
    
    
    
    
  },
  resetIconStyling: {
      height: 40,
      width: 40
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
  },
  //positioning for hit and wound textinput
  hitAndWoundInput: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    margin: 5,
    padding: 10,    
  },
  attacksAndRendInput : {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    margin: 5,
    padding: 10,    
    
  },
  averageHitandWounds: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    margin: 5,
    padding: 10,
    
  },
  averageHitandWoundsText: {
      padding: 10,
      borderWidth: 1,
      borderRadius: 5,
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
    //backgroundColor: "grey"
  
  },
  damageCalculationsText: {
   fontWeight: "bold",
   fontSize: 15,
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
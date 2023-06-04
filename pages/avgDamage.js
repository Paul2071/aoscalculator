import React from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, } from 'react-native'
import CheckBoxGroup from './checkbox'


function AvgDamage() {
  //user input what value to hit the dice needs
  const [ toHitValue, setToHitValue ] = React.useState(0)
  //user input what value to wound the dice needs
  const [ toWoundValue, setToWoundValue ] = React.useState(0)
  //user input to determine number of attacks being made
  const [attacksValue, setAttacksValue ] = React.useState(0)
  //user inout to determine damage value
  const [ damageValue, setDamageValue ] = React.useState(0)
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
  //the amound of damage done after ward saves
  const [ woundsTotalAfterSaveAndWardSave, setWoundsTotalAfterSaveAndWardSave] = React.useState(0)

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


   function  calculateAverageWounds () {
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
      // save 1 = 0 d
      // save 2 = 5d
      // save 3 = 10d
      //save 4 = 15d
      // save 5 = 20d
      // save 6 = 25d


      function actualWounds (averageWoundsCalculation) {     
                       
         if   (actualEnemySave === 1) {
           setEnemySaveAndWounds(Math.round (averageWoundsCalculation - (1  * averageWoundsCalculation)  ))
         }
         else if (actualEnemySave === 2) {
           setEnemySaveAndWounds(Math.round ( averageWoundsCalculation - (0.83  * averageWoundsCalculation)  ))
         }
         else if (actualEnemySave === 3) {
           setEnemySaveAndWounds(Math.round (averageWoundsCalculation -  (0.66  * averageWoundsCalculation )))
         }
         else if (actualEnemySave === 4) {
           setEnemySaveAndWounds(Math.round (averageWoundsCalculation -  (0.50  * averageWoundsCalculation)))
         }
         else if (actualEnemySave === 5) {
           setEnemySaveAndWounds(Math.round ( averageWoundsCalculation -  (0.33  * averageWoundsCalculation) ))
         }
         else if (actualEnemySave === 6) {
           setEnemySaveAndWounds(Math.round ( averageWoundsCalculation -  (0.17  * averageWoundsCalculation) ))
         } 
         else if (actualEnemySave > 6 ) {
          setEnemySaveAndWounds(averageWoundsCalculation)
         }        
       wardSave (averageWoundsCalculation)
      }



      function wardSave () {
         
         if ( wardSaveValue === 0 ){
          console.log(" I CAN SEE")
          setWoundsTotalAfterSaveAndWardSave( enemySaveAndWounds     )
         } 
         if ( wardSaveValue === "1" ){
          setWoundsTotalAfterSaveAndWardSave(Math.round(enemySaveAndWounds - (1 * enemySaveAndWounds )))          } 
         else if (wardSaveValue === "2") {
          setWoundsTotalAfterSaveAndWardSave(Math.round(enemySaveAndWounds - (0.83 * enemySaveAndWounds )))          }
        else if (wardSaveValue === "3") {
          setWoundsTotalAfterSaveAndWardSave(Math.round(enemySaveAndWounds - (0.66 * enemySaveAndWounds )))          }
        else if (wardSaveValue === "4") {
          setWoundsTotalAfterSaveAndWardSave(Math.round(enemySaveAndWounds - (0.50 * enemySaveAndWounds )))         }
        else if (wardSaveValue === "5") {
          setWoundsTotalAfterSaveAndWardSave(Math.round(enemySaveAndWounds - (0.33 * enemySaveAndWounds )))        
        }
        else if (wardSaveValue === "6") {
          setWoundsTotalAfterSaveAndWardSave(Math.round(enemySaveAndWounds - (0.17 * enemySaveAndWounds )))         } 
        else if (wardSaveValue > "6" ) {
          setWoundsTotalAfterSaveAndWardSave( enemySaveAndWounds     )
        }        
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
    setDamageValue(0)
  }

   
  
    






  return (


    <View style={styles.mainContainer}>
    
        <View style={styles.inputContainer}>
            
            <View style={styles.hitAndWoundInput} >

               <View  >
                  <Text style={styles.inputValuesStyling}>INPUT VALUES</Text>
               </View>  
               
               <View style={styles.userInputContainer}>
                  <Text style={styles.textTitlesStyling} >H</Text>
                  <TextInput 
                  style={styles.textInputStyling}  
                  placeholder='0'
                  keyboardType='numeric'
                  value={String(toHitValue)}
                  onChangeText={setToHitValue}>
                  </TextInput>
              </View>

              <View style={styles.userInputContainer}>
                  <Text style={styles.textTitlesStyling}>W</Text>

                  <TextInput style={styles.textInputStyling}  
                  placeholder='0'
                  keyboardType='numeric'
                  value={String(toWoundValue)}
                  onChangeText={setToWoundValue}>                
                  </TextInput>
                </View>

              <View style={styles.userInputContainer}>
                    <Text style={styles.textTitlesStyling}>A</Text>

                    <TextInput style={styles.textInputStyling}   
                    placeholder='0'
                    keyboardType='numeric'
                    value={String(attacksValue)}
                    onChangeText={setAttacksValue}>
                    </TextInput>
               </View>
            </View>

            <View style={styles.attacksAndRendInput}>

            <View style={styles.userInputContainer}>
                <Text style={styles.textTitlesStyling}>D</Text>
                <TextInput style={styles.textInputStyling}   
                placeholder='0'
                keyboardType='numeric'
                value={String(damageValue)}
                onChangeText={setDamageValue}>
                </TextInput>
            </View>


            <View style={styles.userInputContainer}>
              <Text style={styles.textTitlesStyling}>R</Text>
              <TextInput style={styles.textInputStyling}  
              placeholder='0'
              keyboardType='numeric'
              value={String(rendValue)}
              onChangeText={setRendValue}>                
              </TextInput>
             </View>

              <View style={styles.userInputContainer}>  
                <Text style={styles.textTitlesStyling}>S</Text>
                <TextInput style={styles.textInputStyling} 
                placeholder='0'
                keyboardType='numeric'
                value={String(shownEnemySaveValue)}
                onChangeText={setShownEnemySaveValue}>
                </TextInput>
              </View>

              <View style={styles.userInputContainer}>
                <Text style={styles.textTitlesStyling}>W</Text>
                <TextInput style={styles.textInputStyling} 
                placeholder='0'
                keyboardType='numeric'                          
                value={String(wardSaveValue)}
                onChangeText={setWardSaveValue}>                
                </TextInput>
              </View>
            </View>

            


          
        </View>


        <View style={styles.headingContainer}>

            
            
           
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
          </View>

          <View style={styles.averageHitandWounds}>
              <Text style={styles.textTitles}>AVERAGE HITS</Text>
              <Text style={styles.averageHitandWoundsText}> {averageHitsCalculation}</Text>
              <Text style={styles.textTitles}>AVERAGE WOUNDS</Text>
              <Text style={styles.averageHitandWoundsText}> {averageWoundsCalculation}</Text>
            </View>

       
            

            <View style={styles.totalDamageCalculationContainer}>
              <Text style={styles.totalDamageCalculationFont}>AVERAGE DAMAGE: </Text>
              <Text style={styles.totalDamageCalculationFont}>{(woundsTotalAfterSaveAndWardSave * damageValue ) + mortalWounds}</Text>
            </View>
          
       
    </View>
  )
}

const styles = StyleSheet.create({

  userInputContainer: {
    flex: 1,
    
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",

  },
  inputValuesStyling: {
    backgroundColor: "#c1121f",
    borderRadius: 35,    
    textAlign: "center",
    color: "#fff8dc",
    padding: 10,   
    fontWeight: "bold",
    width: 160,
    fontSize: 20,
    margin: 10
    
  },

  //container that has all content on this page
  mainContainer: {
      flex: 1,  
      backgroundColor: "#669bbc" 
      
      
  },
  //container that has the top half requiring user input
  inputContainer: {
    
    flex: 2,  
    flexDirection: "row",
    
    
    
          
  },

  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",    
    flex: 0.5,
   
    
  },
  totalDamageCalculationContainer: {
    
    flex: 1,
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 5,
    margin: 2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: "center",
    backgroundColor: "#c1121f",
    marginBottom: 40
    
    
    
  },
  buttonContainerStyling: {
    backgroundColor: "#c1121f",
    borderRadius: 8,  
    textAlign: "center",
    color: "#fff8dc",
    padding: 10,
    fontWeight: "bold",
    fontSize: 15,
    
    
    
    
  },
  resetIconStyling: {
      height: 40,
      width: 40,
      borderRadius: 8
  },
 
  
  //styling for any text input components on the page
  textInputStyling: {
  borderColor: 'black',
  borderWidth: 1,
  borderRadius: 5,  
  padding: 10,
  backgroundColor: "lightgrey",
  fontWeight: "bold",
  width: 80,
  textAlign: "center",  
  
  },
  textTitles: {
    borderRadius: 5,
    alignContent: 'center',
    padding: 10,
    backgroundColor: "#c1121f",
    color: "#fff8dc",
    fontWeight: "bold",
    fontSize: 15,
    
    
  },
  //styling for any user input heading text components on the page
  textTitlesStyling: {
  backgroundColor: "#c1121f",
  borderRadius: 8,   
  borderWidth: 3, 
  textAlign: "center",
  color: "#fff8dc",
  padding: 10,
  fontWeight: "bold",
  width: 40,
  height: 40,
  fontSize: 16,
  },
  //positioning for hit and wound textinput
  hitAndWoundInput: {
    flexDirection: "column",
    
    flex: 1
    
        
  },
  attacksAndRendInput : {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'space-evenly',
    
    
  },
  averageHitandWounds: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    margin: 15,
    padding: 10,
    backgroundColor: "#c1121f",
    borderRadius: 5,
    borderWidth: 5,
    
    
  },
  averageHitandWoundsText: {
      padding: 10,
      color: "#fff8dc",
      borderRadius: 5,
      fontWeight: "bold",
      fontSize: 15,
  },
  enemySavesInput: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    margin: 15,
    padding: 10,
    textAlign: "center"
  },

  
  
  

  totalDamageCalculationFont: {
    
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff8dc",
    
  }

})

export default AvgDamage
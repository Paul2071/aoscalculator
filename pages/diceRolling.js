import React from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'


function DiceRolling() {
  //user input what value to hit the dice needs
  const [ toHitValue, setToHitValue ] = React.useState(0)
   //user input what value to wound the dice needs
  const [ toWoundValue, setToWoundValue ] = React.useState(0)
  //user input how many dice to roll
  const [ numberOfDice, setNumberOfDice ] = React.useState(0)
  //values that hit, based on user input to hit and values generated from dice roll
  const [ totalHit, setTotalHit] = React.useState(0)
  //values that hit, based on user input to wound and values generated from dice roll
  const [ totalWound, setTotalWound] = React.useState(0)
  //how many have hit from the rolled dice
  const [ successfulHit, setSuccessfulHit] = React.useState(0)
  
  //values generated from dice roll that hit
  const [diceRollHits, setDiceRollHits ] = React.useState({1:0, 2:0, 3:0, 4:0, 5:0, 6:0})
  //values generated from dice rolls to wound
  const [ diceRollWounds, setDiceRollWounds] = React.useState({1:0, 2:0, 3:0, 4:0, 5:0, 6:0})



//function that takes the user input from how many dice? and generates a random number between 1 and 6 that many times.

  function rollDiceUSerInputNumberOfTimes () {      
    
    const diceRollsArray = []
   
    for (let i = 0; i < numberOfDice; i++) {
      const  singleDiceRoll = (Math.floor(Math.random() * 6 + 1));
      diceRollsArray.push(singleDiceRoll);  
      
    }
    
    //console.log(diceRollsArray)
    const calculateHowManyHit = diceRollsArray.filter(checkToHit)
    
        let countDiceRolls = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
      }
      
      for (let j = 0; j < diceRollsArray.length; j++) {
        
        
        if (diceRollsArray[j] === 1) {
          countDiceRolls[1]++
        }  else if (diceRollsArray[j] === 2) {
          countDiceRolls[2]++
          
        } 
        else if (diceRollsArray[j] === 3) {
          countDiceRolls[3]++
          
        } 
        else if (diceRollsArray[j] === 4) {
          countDiceRolls[4]++
          
        } 
        else if (diceRollsArray[j] === 5) {
          countDiceRolls[5]++
          
        } 
        else if (diceRollsArray[j] === 6) {
          countDiceRolls[6]++
          
        } 
        
      }
      //console.log(countDiceRolls)
      setDiceRollHits(countDiceRolls)
      setTotalHit(calculateHowManyHit.length)
      setSuccessfulHit(calculateHowManyHit)
      
      
    }
    

    //function that takes the to hit from user input and checks how many of the dice rolls are equal to or above the to hit value. Invoked as part of the dice roll function
    
    function checkToHit (successfulHits) {
      
      return successfulHits >= toHitValue
  }
    function checkToWound (successfulHits) {
      
      return successfulHits >= toHitValue
  }


  function calculateWounds () {

    const diceRollForWounds = []

    for ( w = 0; w < successfulHit.length; w++) {
      const  singleDiceRoll = (Math.floor(Math.random() * 6 + 1));
      diceRollForWounds.push(singleDiceRoll)
    }
  
    const calculateHowManyWound = diceRollForWounds.filter(checkToWound) 
    
    let countDiceRollsWounds = {
      1:0,
      2:0,
      3:0,
      4:0,
      5:0,
      6:0,

    }

      for ( w = 0; w < diceRollForWounds.length; w++) {
        if (diceRollForWounds[w] === 1) {
          countDiceRollsWounds[1]++
        }  else if (diceRollForWounds[w] === 2) {
          countDiceRollsWounds[2]++
          
        } 
          else if (diceRollForWounds[w] === 3) {
          countDiceRollsWounds[3]++
          
        } 
          else if (diceRollForWounds[w] === 4) {
          countDiceRollsWounds[4]++
          
        } 
          else if (diceRollForWounds[w] === 5) {
          countDiceRollsWounds[5]++
          
        } 
          else if (diceRollForWounds[w] === 6) {
          countDiceRollsWounds[6]++
          
        } 
        
      }

    console.log(diceRollForWounds)
    console.log(calculateHowManyWound)
    setDiceRollWounds(countDiceRollsWounds)
    setTotalWound(calculateHowManyWound.length)
  }

 function resetUserInput () {
  setToHitValue(0)
  setToWoundValue(0)
  setNumberOfDice(0)
  setTotalHit(0)
  setTotalWound(0)
  setDiceRollHits({1:0, 2:0, 3:0, 4:0, 5:0, 6:0})
  setDiceRollWounds({1:0, 2:0, 3:0, 4:0, 5:0, 6:0})
 }
 
  return (
    //main view
    <View style={styles.mainContainer}>
   
  
        {/*view for to hit and to wound values */}
        <View style={styles.toHitPositioning}>

          <Text style={styles.textBoxTitle }>H</Text>

          <TextInput
              textAlign={'center'}
              style={styles.userInputBox}
              value={toHitValue}
              onChangeText={setToHitValue}
              keyboardType="numeric"
              placeholder="0">
          </TextInput>

          <Text style={styles.textBoxTitle }>W</Text>
         
          <TextInput
              textAlign={'center'}
              style={styles.userInputBox}
              value={toWoundValue}
              onChangeText={setToWoundValue}
              keyboardType="numeric"
              placeholder="0">
          </TextInput>

            <Text style={styles.textBoxTitle }>A</Text>

            <TextInput 
                textAlign={'center'}
                style={styles.userInputBox}
                value={numberOfDice}
                onChangeText={setNumberOfDice}
                keyboardType="numeric"
                placeholder="0">          
            </TextInput>
        </View>
 
 {/*view for total hit and wound values */}
        <View style={styles.totalHitPositioning}>

          <Text style={[styles.textBox, styles.textStyling] }>TOTAL HIT</Text>

          <Text style={styles.totalHitWoundBox}>
              {totalHit}
          </Text>

          <Text style={[styles.textBox, styles.textStyling] }>TOTAL WOUND</Text>

          <Text style={styles.totalHitWoundBox}>
              {totalWound}
         </Text>

        </View>

{/*view for dice image and text */}

    <View style={styles.buttonPositioning}>

          <View>

              <TouchableOpacity
              onPress={()=> rollDiceUSerInputNumberOfTimes() }>
                  <Text style={styles.buttonContainerStyling}> CALCULATE HITS</Text>
              </TouchableOpacity>

        </View>

        <View>

              <TouchableOpacity
              onPress={()=> calculateWounds() }>
                  <Text style={styles.buttonContainerStyling}> CALCULATE WOUNDS</Text>
              </TouchableOpacity>

              
        </View>
        <View style={styles.resetIconPositioning}>

              <TouchableOpacity
              onPress={()=> resetUserInput() }>
                  <Image
                  style={styles.resetIconStyling}
                  source={require("../assets/images/reseticon.png")}></Image>
              </TouchableOpacity>


        </View>

    </View>


    
{/* view for dispalying columns of dice rolls */}

    <View style={styles.actualDiceRollsPositioning}>

      <View style={{justifyContent: "flex-start"}}> 
       <Text style={[styles.textBox, styles.textStyling]}>HIT ROLLS</Text>
       </View>

      <View>
       <Text style={[styles.textBox, styles.textStyling]}>WOUND ROLLS</Text> 
       </View>

    </View>  

{/*view for containing dice images and number of dice rolled */}    
      <View style={styles.totalDiceRollsPositioning}>
           <View style={styles.hitRollsContainer} >
                      <Image 
                        style={styles.resizingSingleDiceImages}
                        source={require('../assets/images/dice1.png')}
                      ></Image>
                      
                      <Image 
                        style={styles.resizingSingleDiceImages}
                        source={require('../assets/images/dice2.png')}
                      ></Image>
                      <Image 
                        style={styles.resizingSingleDiceImages}
                        source={require('../assets/images/dice3.png')}
                      ></Image>
                      <Image 
                        style={styles.resizingSingleDiceImages}
                        source={require('../assets/images/dice4.png')}
                      ></Image>
                      <Image 
                        style={styles.resizingSingleDiceImages}
                        source={require('../assets/images/dice5.png')}
                      ></Image>
                      <Image 
                        style={styles.resizingSingleDiceImages}
                        source={require('../assets/images/dice6.png')}
                      ></Image>     
              </View> 

              <View style={styles.hitRollsContainer2}>
                  <Text style={styles.calculatedHitWoundValues}>{diceRollHits[1]}</Text>

                  <Text style={styles.calculatedHitWoundValues}>{diceRollHits[2]}</Text>
                  <Text style={styles.calculatedHitWoundValues}>{diceRollHits[3]}</Text>

                  <Text style={styles.calculatedHitWoundValues}>{diceRollHits[4]}</Text>

                  <Text style={styles.calculatedHitWoundValues}>{diceRollHits[5]}</Text>

                  <Text style={styles.calculatedHitWoundValues}>{diceRollHits[6]}</Text>


              </View>

           <View style={styles.woundRollsContainer}>
                      <Image 
                        style={styles.resizingSingleDiceImages}
                        source={require('../assets/images/dice1.png')}
                      ></Image>
                      
                      <Image 
                        style={styles.resizingSingleDiceImages}
                        source={require('../assets/images/dice2.png')}
                      ></Image>
                      <Image 
                        style={styles.resizingSingleDiceImages}
                        source={require('../assets/images/dice3.png')}
                      ></Image>
                      <Image 
                        style={styles.resizingSingleDiceImages}
                        source={require('../assets/images/dice4.png')}
                      ></Image>
                      <Image 
                        style={styles.resizingSingleDiceImages}
                        source={require('../assets/images/dice5.png')}
                      ></Image>
                      <Image 
                        style={styles.resizingSingleDiceImages}
                        source={require('../assets/images/dice6.png')}
                      ></Image>     
              </View> 
              <View style={styles.woundRollsContainer2}>
              <Text style={styles.calculatedHitWoundValues}
              >{diceRollWounds[1]}</Text>
              <Text style={styles.calculatedHitWoundValues} >{diceRollWounds[2]}
              </Text>
              <Text style={styles.calculatedHitWoundValues}>{diceRollWounds[3]}</Text>
              <Text style={styles.calculatedHitWoundValues}>{diceRollWounds[4]}</Text>
              <Text style={styles.calculatedHitWoundValues}>{diceRollWounds[5]}</Text>
              <Text style={styles.calculatedHitWoundValues}>{diceRollWounds[6]}</Text>

              </View>
        </View>     
    </View>
  )
}

const styles = StyleSheet.create({


//view that contains all of screen   003049
  mainContainer: {
    flex: 1,
    backgroundColor: "#669bbc",
    
  },
//font styling on whole page  
  textStyling: {
    fontWeight: "bold",
    fontSize: 15,
  },
  
//text comps that contain navigational cues/titles "to hit". "total hit" 
  textBox: {
    alignSelf: "center",
    color: "#fff8dc"
    
  },
  textBoxTitle: {
    backgroundColor: "#c1121f",
    borderRadius: 8,   
    borderWidth: 3, 
    textAlign: "center",
    color: "#fff8dc",
    padding: 10,
    margin: 5,
    fontWeight: "bold",
    width: 40,
    height: 40,
    fontSize: 16,
    
  },
//text component containing total hit and wound values calculate from dice rolls

  totalHitWoundBox: {
    height: 40,
    width: 40,
    margin: 10,
    padding: 10,
    textAlign: "center",
    color: "#fff8dc",
    fontWeight: "bold",
  },

//text inputs that user updates  
  userInputBox: {
  borderColor: 'black',
  borderWidth: 1,
  borderRadius: 20,  
  width: 50,
  textAlign: "center", 
    
  },

//text components that display the contents of the dice rolls
  calculatedHitWoundValues: {
    height: 40,
    width: 40,
    borderRadius: 15,
    borderWidth: 1,
    fontSize: 15,
    padding: 10,
    margin: 5,
    textAlign: "center",
    fontWeight: "bold",
    
  },
  
//posittioning of the view containing to hit, to wound titles and user input
  toHitPositioning: {
    backgroundColor: "#669bbc",
    flexDirection: "row",
    justifyContent: 'space-evenly',    
    margin: 10  
    },

  
  //positioning of the total hit and total wound titles 
  totalHitPositioning: {
    
    flexDirection: "row",
    justifyContent: 'space-evenly',
    borderRadius: 8,   
    borderWidth: 3,   
    margin: 10,
    backgroundColor: "#c1121f",
  },

  //positioning of dice images to roll to hit and to wound
  buttonPositioning: {
    
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 50,
    
    marginBottom: 50,
    
    
  },
  //reset icon styling
  resetIconStyling: {
      height: 40,
      width: 40,
      borderRadius: 8
      
  },

   //positioning of hit rolls and wound rolls 
  actualDiceRollsPositioning: {
    backgroundColor: "#669bbc",
    flexDirection: "row",
    justifyContent: 'space-evenly',
    backgroundColor: "#c1121f",
    borderRadius: 8, 
    borderWidth: 3, 
    textAlign: "center",
    color: "#fff8dc",
    margin: 10,
    padding: 10,
    fontWeight: "bold",
    fontSize: 15,
  },

  //view containing d6 images and actual hit rolls
  totalDiceRollsPositioning: {
    backgroundColor: "#669bbc",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly"


  },
//resized dice side images, will change when redo the images
  resizingSingleDiceImages:{
    height: 40,
    width: 40,
    margin: 5
  },

//resizing the big dice images used to roll the dice  
  diceImageStyling: {
    height: 150,
    width: 150,
    borderWidth: 3, 
    margin: 10,
    borderColor: "black"
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
  hitRollsContainer: {
    flex: 1,    
    alignItems: "center",
},
  hitRollsContainer2: {
    flex: 1,    
    alignItems: "center"
},
  woundRollsContainer: {
    flex: 1,    
    alignItems: "center"
},
  woundRollsContainer2: {
    flex: 1,    
    alignItems: "center"
},



});

export default DiceRolling


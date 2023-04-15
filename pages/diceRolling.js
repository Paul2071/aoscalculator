import React from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'


function DiceRolling() {
  //user input what value to hit the dice needs
  const [ toHitValue, setToHitValue ] = React.useState(0)
   //user input what value to wound the dice needs
  const [ toWoundValue, setToWoundValue ] = React.useState(0)
  //user input how many dice to roll
  const [ numberOfDice, setNumberOfDice ] = React.useState(0)
  //values generated from dice roll that hit - above or equal to to hit value
  //const [diceRollHits, setDiceRollHits ] = React.useState(0)
  //values that hit, based on user input to hit and values generated from dice roll
  const [ totalHit, setTotalHit] = React.useState(0)
   //values that hit, based on user input to wound and values generated from dice roll
  const [ totalWound, setTotalWound] = React.useState(0)
  //how many have hit from the rolled dice
  const [ successfulHit, setSuccessfulHit] = React.useState(0)



//function that takes the user input from how many dice? and generates a random number between 1 and 6 that many times.

  function rollDiceUSerInputNumberOfTimes () {      
    
    const diceRollsArray = []
   
    for (let i = 0; i < numberOfDice; i++) {
      const  singleDiceRoll = (Math.floor(Math.random() * 6 + 1));
      diceRollsArray.push(singleDiceRoll);   
      
    }
   
    const calculateHowManyHit = diceRollsArray.filter(checkToHit)

      console.log(toHitValue )
      console.log(diceRollsArray  )
      console.log(calculateHowManyHit  )
      console.log(calculateHowManyHit.length  )
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
    console.log(diceRollForWounds)
    console.log(calculateHowManyWound)
    setTotalWound(calculateHowManyWound.length)
  }

 function resetUserInput () {
  setToHitValue(0)
  setToWoundValue(0)
  setNumberOfDice(0)
 }
 
  return (
    //main view
    <View style={styles.mainContainer}>
   
  
        {/*view for to hit and to wound values */}
        <View style={styles.toHitPositioning}>

          <Text style={[styles.textBox, styles.textStyling] }>To Hit</Text>

          <TextInput
              textAlign={'center'}
              style={styles.userInputBox}
              value={toHitValue}
              onChangeText={setToHitValue}
              keyboardType="numeric"
              placeholder="0">
          </TextInput>

          <Text style={[styles.textBox, styles.textStyling] }>To Wound</Text>
         
          <TextInput
              textAlign={'center'}
              style={styles.userInputBox}
              value={toWoundValue}
              onChangeText={setToWoundValue}
              keyboardType="numeric"
              placeholder="0">
          </TextInput>

        </View>
 {/*view for how many dice */}
        <View style={styles.diceNumberPositioning}>

            <Text style={[styles.textBox, styles.textStyling] }>How many Dice?</Text>

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

          <Text style={[styles.textBox, styles.textStyling] }>Total Hit</Text>

          <Text style={styles.totalHitWoundBox}>
              {totalHit}
          </Text>

          <Text style={[styles.textBox, styles.textStyling] }>Total Wound</Text>

          <Text style={styles.totalHitWoundBox}>
              {totalWound}
         </Text>

        </View>

{/*view for dice image and text */}

    <View style={styles.diceImagePositioning}>

          <View>

              <TouchableOpacity
              onPress={()=> rollDiceUSerInputNumberOfTimes() }>
                  <Image
                  style={styles.diceImageStyling}
                  source={require("../assets/d6.png")}></Image>
              </TouchableOpacity>

              <Text style={styles.textStyling}>Press to hit</Text>
        </View>

        <View>

              <TouchableOpacity
              onPress={()=> calculateWounds() }>
                  <Image
                  style={styles.diceImageStyling}
                  source={require("../assets/d6.png")}></Image>
              </TouchableOpacity>

              <Text style={styles.textStyling}>Press to wound</Text>
              
        </View>
        <View>

              <TouchableOpacity
              onPress={()=> resetUserInput() }>
                  <Image
                  style={styles.resetIconStyling}
                  source={require("../assets/reseticon.png")}></Image>
              </TouchableOpacity>

              <Text style={styles.textStyling}>Reset Values</Text>

        </View>

    </View>

{/* view for dispalying columns of dice rolls */}

    <View style={styles.actualDiceRollsPositioning}>
       <Text style={[styles.textBox, styles.textStyling]}>Hit Rolls</Text>
       <Text style={[styles.textBox, styles.textStyling]}>Wound Rolls</Text> 

    </View>  

{/*view for containing dice images and number of dice rolled */}    
      <View style={styles.totalDiceRollsPositioning}>
           <View >
                      <Image 
                        style={styles.resizingSingleDiceImages}
                        source={require('../assets/dice1.png')}
                      ></Image>
                      
                      <Image 
                        style={styles.resizingSingleDiceImages}
                        source={require('../assets/dice2.png')}
                      ></Image>
                      <Image 
                        style={styles.resizingSingleDiceImages}
                        source={require('../assets/dice3.png')}
                      ></Image>
                      <Image 
                        style={styles.resizingSingleDiceImages}
                        source={require('../assets/dice4.png')}
                      ></Image>
                      <Image 
                        style={styles.resizingSingleDiceImages}
                        source={require('../assets/dice5.png')}
                      ></Image>
                      <Image 
                        style={styles.resizingSingleDiceImages}
                        source={require('../assets/dice6.png')}
                      ></Image>     
              </View> 

              <View>
                  <Text style={styles.calculatedHitWoundValues}></Text>

                  <Text style={styles.calculatedHitWoundValues}></Text>
                  <Text style={styles.calculatedHitWoundValues}></Text>

                  <Text style={styles.calculatedHitWoundValues}></Text>

                  <Text style={styles.calculatedHitWoundValues}></Text>

                  <Text style={styles.calculatedHitWoundValues}></Text>


              </View>

           <View >
                      <Image 
                        style={styles.resizingSingleDiceImages}
                        source={require('../assets/dice1.png')}
                      ></Image>
                      
                      <Image 
                        style={styles.resizingSingleDiceImages}
                        source={require('../assets/dice2.png')}
                      ></Image>
                      <Image 
                        style={styles.resizingSingleDiceImages}
                        source={require('../assets/dice3.png')}
                      ></Image>
                      <Image 
                        style={styles.resizingSingleDiceImages}
                        source={require('../assets/dice4.png')}
                      ></Image>
                      <Image 
                        style={styles.resizingSingleDiceImages}
                        source={require('../assets/dice5.png')}
                      ></Image>
                      <Image 
                        style={styles.resizingSingleDiceImages}
                        source={require('../assets/dice6.png')}
                      ></Image>     
              </View> 
              <View>
              <Text style={styles.calculatedHitWoundValues}></Text>
              <Text style={styles.calculatedHitWoundValues}></Text>
              <Text style={styles.calculatedHitWoundValues}></Text>
              <Text style={styles.calculatedHitWoundValues}></Text>
              <Text style={styles.calculatedHitWoundValues}></Text>
              <Text style={styles.calculatedHitWoundValues}></Text>

              </View>
        </View>     
    </View>
  )
}

const styles = StyleSheet.create({


//view that contains all of screen  
  mainContainer: {
    flex: 1,
    
  },
//font styling on whole page  
  textStyling: {
    fontWeight: "bold",
    fontSize: 15,
  },
//text comps that contain navigational cues/titles "to hit". "total hit" 
  textBox: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    height: 40,
    margin: 10,
    
  },
//text component containing total hit and wound values calculate from dice rolls

  totalHitWoundBox: {
    height: 40,
    width: 40,
    margin: 10,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    textAlign: "center"
  },

//text inputs that user updates  
  userInputBox: {
    height: 35,
    width: 35,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },

//text components that display the contents of the dice rolls
  calculatedHitWoundValues: {
    height: 30,
    width: 30,
    borderRadius: 20,
    borderWidth: 1,
    fontSize: 10,
    padding: 10,
  },
  
//posittioning of the view containing to hit and to wound titles  
  toHitPositioning: {
    backgroundColor: "red",
    flexDirection: "row",
    justifyContent: 'space-evenly'
    
    
  },

  //positioning of the view containing how many dice title
  diceNumberPositioning: {    
    backgroundColor: "lightblue",
    flexDirection: "row",
    justifyContent: 'space-evenly'   
    
  },
  
  //positioning of the total hit and total wound titles
  totalHitPositioning: {
    backgroundColor: "grey",
    flexDirection: "row",
    justifyContent: 'space-evenly'
    
  },

  //positioning of dice images to roll to hit and to wound
  diceImagePositioning: {

    backgroundColor: "pink",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  //reset icon positioning
  resetIconStyling: {
      height: 40,
      width: 40,
  },

   //positioning of hit rolls and wound rolls 
  actualDiceRollsPositioning: {
    backgroundColor: "orange",
    flexDirection: "row",
    justifyContent: 'space-evenly'
  },

  //view containing d6 images and actual hit rolls
  totalDiceRollsPositioning: {
    backgroundColor: "salmon",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly"


  },
//resized dice side images, will change when redo the images
  resizingSingleDiceImages:{
    height: 30,
    width: 30,
  },

//resizing the big dice images used to roll the dice  
  diceImageStyling: {
    height: 150,
    width: 150,
  }
});

export default DiceRolling

{/* <Text>{toHitValue}</Text>
<Text>{toWoundValue}</Text>
<Text>{numberOfDice}</Text>
<Text>{totalHit}</Text>
<Text>{totalWound}</Text> */}
// function filterDiceRolls () {

    //   let countDiceRolls = {
    //     1: 0,
    //     2: 0,
    //     3: 0,
    //     4: 0,
    //     5: 0,
    //     6: 0,
    //   }
      
      
    //   for (let j = 0; j < diceRollsArray.length; j++) {


    //     if (diceRollsArray[j] === 1) {
    //       countDiceRolls.ones++
    //     }  else if (diceRollsArray[j] === 2) {
    //         countDiceRolls.twos++
          
    //     } 
    //       else if (diceRollsArray[j] === 3) {
    //         countDiceRolls.threes++
          
    //     } 
    //       else if (diceRollsArray[j] === 4) {
    //         countDiceRolls.fours++
          
    //     } 
    //       else if (diceRollsArray[j] === 5) {
    //         countDiceRolls.fives++
          
    //     } 
    //       else if (diceRollsArray[j] === 6) {
    //         countDiceRolls.sixes++
          
    //     } 
        
    //   }
      
      
    //   console.log(diceRollsArray )
      // console.log(countDiceRolls.ones)
      // console.log(countDiceRolls.twos )
      // console.log(countDiceRolls.threes )
      // console.log(countDiceRolls.fives )
      // console.log(countDiceRolls.fours )
      // console.log(countDiceRolls.sixes )
      // console.log(countDiceRolls)
      
      // setCountedDiceRolls (countDiceRolls)
      
   // }
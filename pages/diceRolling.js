import React from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'


function DiceRolling() {
  //user input what value to hit the dice needs
  const [ toHitValue, setToHitValue ] = React.useState(0)
   //user input what value to wound the dice needs
  const [ toWoundValue, setToWoundValue ] = React.useState(0)
  //user input how many dice to roll
  const [ numberOfDice, setNumberOfDice ] = React.useState(0)
  //values generated from dice roll
  const [diceRoll, setDiceRoll ] = React.useState(0)
  //values that hit, based on user input to hit and values generated from dice roll
  const [ totalHit, setTotalHit] = React.useState(0)
   //values that hit, based on user input to wound and values generated from dice roll
  const [ totalWound, setTotalWound] = React.useState(0)
  //stored count rolls
  const [ countedDiceRolls, setCountedDiceRolls] = React.useState({1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0})


//repeat GenerateRandomNumberD6 a number of times equal to numberOfDice state and store in a variable


  const diceRollsArray = []
 
  function rollDiceUSerInputNumberOfTimes () {      
    
    for (let i = 0; i < numberOfDice; i++) {
      const  singleDiceRoll = (Math.floor(Math.random() * 6 + 1));
      diceRollsArray.push(singleDiceRoll);   
      
    }
   
    const calculateHowManyHit = diceRollsArray.filter(checkToHitOrWound)

      console.log(toHitValue )
      console.log(diceRollsArray  )
      console.log(calculateHowManyHit  )
      console.log(calculateHowManyHit.length  )
      setTotalHit(calculateHowManyHit.length)
      
    }
    
 
    
    function checkToHitOrWound (successfulHitsWounds) {
      
      return successfulHitsWounds >= toHitValue
  }






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

   


 
  return (
    //main view
    <View style={styles.mainContainer}>
   
  
        {/*view for to hit and to wound values */}
        <View style={styles.toHitPositioning}>

          <Text style={[styles.textBox, styles.textStyling] }>To Hit</Text>

          <TextInput
              textAlign={'center'}
              style={styles.inputBox}
              value={toHitValue}
              onChangeText={setToHitValue}
              keyboardType="numeric"
              placeholder="0">
          </TextInput>

          <Text style={[styles.textBox, styles.textStyling] }>To Wound</Text>
         
          <TextInput
              textAlign={'center'}
              style={styles.inputBox}
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
                style={styles.inputBox}
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

        <Text style={styles.textStyling}>Tap to roll dice</Text>
        </View>
    <View>

        <TouchableOpacity
        onPress={()=> calculateHowManyFilteredRollsHit() }>
            <Image
            style={styles.diceImageStyling}
            source={require("../assets/d6.png")}></Image>
        </TouchableOpacity>

        <Text style={styles.textStyling}>Tap to calculate</Text>
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
                  <TextInput 
                  textAlign={'center'}
              style={styles.inputBoxActual}
              value={totalWound}
              onChangeText={setTotalWound}
              keyboardType="numeric"
              placeholder="0"></TextInput>
                  <TextInput 
                  textAlign={'center'}
              style={styles.inputBoxActual}
              value={totalWound}
              onChangeText={setTotalWound}
              keyboardType="numeric"
              placeholder="0"></TextInput>
                  <TextInput 
                  textAlign={'center'}
              style={styles.inputBoxActual}
              value={totalWound}
              onChangeText={setTotalWound}
              keyboardType="numeric"
              placeholder="0"></TextInput>
                  <TextInput 
                  textAlign={'center'}
              style={styles.inputBoxActual}
              value={totalWound}
              onChangeText={setTotalWound}
              keyboardType="numeric"
              placeholder="0"></TextInput>
                  <TextInput 
                  textAlign={'center'}
              style={styles.inputBoxActual}
              value={totalWound}
              onChangeText={setTotalWound}
              keyboardType="numeric"
              placeholder="0"></TextInput>
                  <TextInput 
                  textAlign={'center'}
              style={styles.inputBoxActual}
              value={totalWound}
              onChangeText={setTotalWound}
              keyboardType="numeric"
              placeholder="0"></TextInput>

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
                  <TextInput 
                  textAlign={'center'}
              style={styles.inputBoxActual}
              value={totalWound}
              onChangeText={setTotalWound}
              keyboardType="numeric"
              placeholder="0"></TextInput>
                  <TextInput 
                  textAlign={'center'}
              style={styles.inputBoxActual}
              value={totalWound}
              onChangeText={setTotalWound}
              keyboardType="numeric"
              placeholder="0"></TextInput>
                  <TextInput 
                  textAlign={'center'}
              style={styles.inputBoxActual}
              value={totalWound}
              onChangeText={setTotalWound}
              keyboardType="numeric"
              placeholder="0"></TextInput>
                  <TextInput 
                  textAlign={'center'}
              style={styles.inputBoxActual}
              value={totalWound}
              onChangeText={setTotalWound}
              keyboardType="numeric"
              placeholder="0"></TextInput>
                  <TextInput 
                  textAlign={'center'}
              style={styles.inputBoxActual}
              value={totalWound}
              onChangeText={setTotalWound}
              keyboardType="numeric"
              placeholder="0"></TextInput>
                  <TextInput 
                  textAlign={'center'}
              style={styles.inputBoxActual}
              value={totalWound}
              onChangeText={setTotalWound}
              keyboardType="numeric"
              placeholder="0"></TextInput>

              </View>
        </View>     
    </View>
  )
}

const styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
    
  },
  textStyling: {
    fontWeight: "bold",
    fontSize: 15,
  },
  textBox: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    height: 40,
    margin: 10,
    
  },
  totalHitWoundBox: {
    height: 40,
    width: 40,
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    textAlign: "center"
  },
  inputBox: {
    height: 35,
    width: 35,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  inputBoxActual: {
    height: 30,
    width: 30,
    borderRadius: 5,
    borderWidth: 1,
    fontSize: 10,
    padding: 10,
  },
  
  toHitPositioning: {
    backgroundColor: "red",
    flexDirection: "row",
    justifyContent: 'space-evenly'
    
    
  },
  diceNumberPositioning: {    
    backgroundColor: "lightblue",
    flexDirection: "row",
    justifyContent: 'space-evenly'   
    
  },
  
  totalHitPositioning: {
    backgroundColor: "grey",
    flexDirection: "row",
    justifyContent: 'space-evenly'
    
  },

  diceImagePositioning: {

    backgroundColor: "pink",
    flexDirection: "row",
    justifyContent: "space-evenly"



  },

  actualDiceRollsPositioning: {
    backgroundColor: "orange",
    flexDirection: "row",
    justifyContent: 'space-evenly'
  },

  totalDiceRollsPositioning: {
    backgroundColor: "salmon",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly"


  },

  resizingSingleDiceImages:{
    height: 30,
    width: 30,
  },
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
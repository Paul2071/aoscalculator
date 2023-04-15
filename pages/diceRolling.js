import React from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'


function DiceRolling() {
  
  const [ toHitValue, setToHitValue ] = React.useState(0)
  const [ toWoundValue, setToWoundValue ] = React.useState(0)
  const [ numberOfDice, setNumberOfDice ] = React.useState(0)
  const [ totalHit, setTotalHit] = React.useState(0)
  const [ totalWound, setTotalWound] = React.useState(0)



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
          <TextInput 
              textAlign={'center'}
              style={styles.inputBox}
              value={totalHit}
              onChangeText={setTotalHit}
              keyboardType="numeric"
              placeholder="0">
          </TextInput>
          <Text style={[styles.textBox, styles.textStyling] }>Total Wound</Text>
          <TextInput 
              textAlign={'center'}
              style={styles.inputBox}
              value={totalWound}
              onChangeText={setTotalWound}
              keyboardType="numeric"
              placeholder="0">
         </TextInput>

        </View>

{/*view for dice image and text */}

    <View style={styles.diceImagePositioning}>

        <TouchableOpacity>
            <Image
            style={styles.diceImageStyling}
            source={require("../assets/d6.png")}></Image>
        </TouchableOpacity>

        <Text style={styles.textStyling}>Tap to roll</Text>

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
    flexDirection: "column",
    alignItems: "center",


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
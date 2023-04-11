import React from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'


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
              style={styles.inputBox}
              value={toHitValue}
              onChangeText={setToHitValue}
              keyboardType="numeric"
              placeholder="0">
          </TextInput>
          <Text style={[styles.textBox, styles.textStyling] }>To Wound</Text>
          <TextInput
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
              style={styles.inputBox}
              value={totalHit}
              onChangeText={setTotalHit}
              keyboardType="numeric"
              placeholder="0">
          </TextInput>
          <Text style={[styles.textBox, styles.textStyling] }>Total Wound</Text>
          <TextInput 
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
            source={require("../assets/d6.png")}></Image>
        </TouchableOpacity>

        <Text style={styles.textStyling}>Tap to roll</Text>

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
    marginTop: 10,
    
  },
  inputBox: {
    height: 40,
    width: 40,
    margin: 12,
    borderWidth: 1,
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
});

export default DiceRolling

{/* <Text>{toHitValue}</Text>
<Text>{toWoundValue}</Text>
<Text>{numberOfDice}</Text>
<Text>{totalHit}</Text>
<Text>{totalWound}</Text> */}
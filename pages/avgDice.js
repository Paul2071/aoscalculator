import React from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'


function AvgDice() {

const [ howManyDice, setHowManyDice ] = React.useState(0)

let averageOneNumber = howManyDice / 6

let onePlus = howManyDice 
let twoPlus = Math.round(howManyDice - averageOneNumber) 
let threePlus = Math.round(howManyDice - averageOneNumber - averageOneNumber) 
let fourPlus = Math.round( howManyDice - averageOneNumber - averageOneNumber - averageOneNumber)
let fivePlus = Math.round( howManyDice - averageOneNumber - averageOneNumber - averageOneNumber - averageOneNumber) 
let sixPlus = Math.round (howManyDice - averageOneNumber - averageOneNumber - averageOneNumber - averageOneNumber - averageOneNumber)

  return (
    <View style={styles.mainContainer}>
        <View style={styles.titlesAndInputContainer}>
            <Text style={[styles.textBox, styles.textStylingTitle] }>How many dice?</Text>
            <TextInput
            style={[styles.textInputBox, styles.textStylingText] }
            value={howManyDice}
            onChangeText={setHowManyDice}
            keyboardType='numeric'
            placeholder='0'>

            </TextInput>
          
            <Text style={styles.textStylingText} > {howManyDice} dice are rolled. The middle column is the expected amount of times to see a dice roll {"\n"}</Text>
            
            <Text style={styles.textStylingText} > The right column is how many of the dice rolls are equal to or above the dice value in the left column {"\n"} </Text>
            <Text style={styles.textStylingText} > For example, if {howManyDice} dice are rolled, on average {fourPlus} will be equal to or above a dice roll of 4 and {fivePlus} will be equal to or above a dice roll of 5 </Text>
        </View>

        <View>



        </View>

        <View style={styles.diceAndAveragesContainer}>
                    <View>
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

                      <View>
                        <Text style={styles.diceAveragesOutput}>{howManyDice / 6}</Text>
                        <Text style={styles.diceAveragesOutput}>{howManyDice / 6}</Text>
                        <Text style={styles.diceAveragesOutput}>{howManyDice / 6}</Text>
                        <Text style={styles.diceAveragesOutput}>{howManyDice / 6}</Text>
                        <Text style={styles.diceAveragesOutput}>{howManyDice / 6}</Text>
                        <Text style={styles.diceAveragesOutput}>{howManyDice / 6}</Text>
                        
                      </View>  

                      <View>
                        <Text style={styles.diceAveragesOutput}>{onePlus}</Text>
                        <Text style={styles.diceAveragesOutput}>{twoPlus}</Text>
                        <Text style={styles.diceAveragesOutput}>{threePlus}</Text>
                        <Text style={styles.diceAveragesOutput}>{fourPlus} </Text>
                        <Text style={styles.diceAveragesOutput}>{fivePlus} </Text>
                        <Text style={styles.diceAveragesOutput}>{sixPlus}</Text>
                       
                      </View>

        </View>

    </View>
  )
}


const styles = StyleSheet.create({
mainContainer: {
  flex: 1,
},
expandTextToFit: {
alignSelf: "flex-start"
},
textBox: {
  borderColor: 'black',
  borderWidth: 1,
  borderRadius: 5,
  padding: 10,
  height: 40,
  width: 160,
  margin: 10,
  
},
textInputBox: {
  borderColor: 'black',
  borderWidth: 1,
  borderRadius: 5,
  padding: 10,
  height: 20,
  width: 80,
  marginBottom: 10,
  
},
textStylingText: {
  fontWeight: "bold",
  fontSize: 15,
  textAlign: "center",
  
},
textStylingTitle: {
fontWeight: "bold",
textAlign: "center",


},
titlesAndInputContainer:{
flex: 1,
backgroundColor: "lightgreen",
alignItems: "center"
},
imageResizing: {
  height: 120,
  width: 120,
},
resizingSingleDiceImages: {
  height: 40,
  width:40,
  margin: 5,
},
diceAndAveragesContainer: {
  backgroundColor: "lightblue",
  flex: 1,
  flexDirection: "row",
  justifyContent: 'space-evenly'
},
diceAveragesOutput: {
  height: 40,
    width: 40,
    margin: 5,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    textAlign: "center"
},

})

export default AvgDice
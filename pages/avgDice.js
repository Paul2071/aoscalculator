import React from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'


import { globalStyles } from './../globalstyles/global';


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
            <Text style={[styles.textBox, styles.textStylingTitle] }>HOW MANY DICE?</Text>
            <TextInput
            style={[styles.textInputBox, styles.textStylingText] }
            value={String(howManyDice)}
            onChangeText={setHowManyDice}
             
            keyboardType='numeric'
            placeholder='0'>

            </TextInput>
          
            <Text style={[styles.textStylingText, globalStyles.customFontRubik]} > {howManyDice} dice are rolled. The middle column is the expected amount of times to see a dice value. {"\n"}</Text>
            
            <Text style={styles.textStylingText} > The right column is how many of the dice rolls are equal to or above the dice value in the left column {"\n"} </Text>
            <Text style={styles.textStylingText} > For example, if {howManyDice} dice are rolled, on average {fourPlus} of the {howManyDice} dice will have a value that is equal to or above a dice roll of 4.{"\n"}
             </Text>
        </View>

        <View>



        </View>

        <View style={styles.diceAndAveragesContainer}>
                    <View>
                      <Image 
                        style={styles.resizingSingleDiceImages}
                        source={require('../assets/images/d6red1.png')}
                      ></Image>
                      
                      <Image 
                        style={styles.resizingSingleDiceImages}
                        source={require('../assets/images/d6red2.png')}
                      ></Image>
                      <Image 
                        style={styles.resizingSingleDiceImages}
                        source={require('../assets/images/d6red3.png')}
                      ></Image>
                      <Image 
                        style={styles.resizingSingleDiceImages}
                        source={require('../assets/images/d6red4.png')}
                      ></Image>
                      <Image 
                        style={styles.resizingSingleDiceImages}
                        source={require('../assets/images/d6red5.png')}
                      ></Image>
                      <Image 
                        style={styles.resizingSingleDiceImages}
                        source={require('../assets/images/d6red6.png')}
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
                        <Text style={styles.diceAveragesOutput}>{fourPlus}</Text>
                        <Text style={styles.diceAveragesOutput}>{fivePlus}</Text>
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

//unsure what this does
expandTextToFit: {
alignSelf: "flex-start"
},
textBox: {
  borderColor: 'black',
  backgroundColor: "#c1121f" ,
  borderWidth: 3,
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
color: "#fff8dc"


},
titlesAndInputContainer:{
flex: 1,
backgroundColor: "#669bbc" ,
alignItems: "center",

},
imageResizing: {
  height: 120,
  width: 120,
},
resizingSingleDiceImages: {
  height: 40,
  width:40,
  margin: 5,
  borderRadius: 8,
    borderWidth: 2,
    borderColor: "black",
},
diceAndAveragesContainer: {
  backgroundColor: "#669bbc" ,
  flex: 1,
  flexDirection: "row",
  justifyContent: 'space-evenly'
},
diceAveragesOutput: {
  height: 40,
    width: 40,
    margin: 5,
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    textAlign: "center",
    fontWeight: "bold"
},

})

export default AvgDice
import React from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'

function AvgDice() {

const [ howManyDice, setHowManyDice ] = React.useState(0)

  return (
    <View style={styles.mainContainer}>
        <View style={styles.titlesAndInputContainer}>
            <Text style={[styles.textBox, styles.textStyling] }>How many dice?</Text>
            <TextInput
            style={[styles.textInputBox, styles.textStyling] }
            value={howManyDice}
            onChangeText={setHowManyDice}
            keyboardType='numeric'
            placeholder='0'>

            </TextInput>
            <TouchableOpacity
            onPress={() => console.log(howManyDice)}>
                <Image 
                style={styles.imageResizing}
                source={require('../assets/d6blackred.png')}>

                </Image>
            </TouchableOpacity>
            <Text style={[styles.textBox, styles.textStyling] }>Press dice</Text>
        </View>

        <View style={styles.diceAndAveragesContainer}>
                    <View>
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
                        <Text style={styles.diceAveragesOutput}>1</Text>
                        <Text style={styles.diceAveragesOutput}>1</Text>
                        <Text style={styles.diceAveragesOutput}>1</Text>
                        <Text style={styles.diceAveragesOutput}>1</Text>
                        <Text style={styles.diceAveragesOutput}>1</Text>
                        <Text style={styles.diceAveragesOutput}>1</Text>
                        
                      </View>  

                      <View>
                        <Text style={styles.diceAveragesOutput}>1</Text>
                        <Text style={styles.diceAveragesOutput}>1</Text>
                        <Text style={styles.diceAveragesOutput}>1</Text>
                        <Text style={styles.diceAveragesOutput}>1</Text>
                        <Text style={styles.diceAveragesOutput}>1</Text>
                        <Text style={styles.diceAveragesOutput}>1</Text>
                       
                      </View>

        </View>

    </View>
  )
}


const styles = StyleSheet.create({
mainContainer: {
  flex: 1,
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
textStyling: {
  fontWeight: "bold",
  fontSize: 15,
  textAlign: "center"
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
}

})

export default AvgDice
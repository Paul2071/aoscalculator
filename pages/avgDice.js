import React from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'

function AvgDice() {
  return (
    <View style={styles.mainContainer}>
        <View style={styles.titlesAndInputContainer}>
            <Text>How many dice?</Text>
            <TextInput
            keyboardType='numeric'
            placeholder='0'>

            </TextInput>
            <TouchableOpacity
            onPress={() => console.log("I am working")}>
                <Image 
                style={styles.imageResizing}
                source={require('../assets/d6blackred.png')}>

                </Image>
            </TouchableOpacity>
            <Text>Click to calculate averages</Text>


        </View>


    </View>
  )
}


const styles = StyleSheet.create({
mainContainer: {
  flex: 1,
},
titlesAndInputContainer:{
flex: 1,
},
imageResizing: {
  height: 140,
  width: 140,
}
})

export default AvgDice
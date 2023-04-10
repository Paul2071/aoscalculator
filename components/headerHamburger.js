import React from 'react'
import { Text, TouchableOpacity, Image, View  } from 'react-native'


function HeaderHamburger({navigation}) {
    
const [optionsStatus, setOptionsStatus] = React.useState("false")

function toggleMenuVisibility(){
    if (optionsStatus == "true") {
        setOptionsStatus("false")
    } else {
        setOptionsStatus("true")
    }
}

  return (
    <TouchableOpacity
    onPress={toggleMenuVisibility}>
        <Image
        style={{width: 30, height:30}}
        source={require("../assets/hamburger.png")}
        ></Image>
        <Text>{optionsStatus}</Text>
    </TouchableOpacity>
  )
}

export default HeaderHamburger
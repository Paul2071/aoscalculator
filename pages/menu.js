import React from 'react'
import { Text, Button, View  } from 'react-native'

import HeaderHamburger from '../components/headerHamburger'

function Menu({navigation}) {
  return (

    <View>
      <Text>menu</Text>
        <Button 
        title='AvgDamage'
        onPress={()=> navigation.navigate("AvgDamage")} ></Button>
        <Button 
        title='AvgDice'
        onPress={()=> navigation.navigate("AvgDice")} ></Button>
        <Button 
        title='DiceRolling'
        onPress={()=> navigation.navigate("DiceRolling")} ></Button>

               
     </View>

  )
}

export default Menu
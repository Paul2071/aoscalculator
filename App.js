import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//page imports
import Menu from "./pages/menu"
import AvgDamage from './pages/avgDamage';
import AvgDice from './pages/avgDice';
import DiceRolling from './pages/diceRolling';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen 
        name="menu" 
        component={Menu} 
        />
        <Stack.Screen 
        name="AvgDamage" 
        component={AvgDamage} 
        />
        <Stack.Screen 
        name="AvgDice" 
        component={AvgDice} 
        />
        <Stack.Screen 
        name="DiceRolling" 
        component={DiceRolling} 
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

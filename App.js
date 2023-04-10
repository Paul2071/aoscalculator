import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//page imports
import Menu from "./pages/menu"
import AvgDamage from './pages/avgDamage';
import AvgDice from './pages/avgDice';
import DiceRolling from './pages/diceRolling';

//component imports
import HeaderHamburger from './components/headerHamburger';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator 
      screenOptions={{
        headerStyle: { backgroundColor:  "#c1121f" }, headerTintColor: "#fff", headerTitleAlign: "center",
        headerRight: (props) => <HeaderHamburger {...props} />, 
        
        
        }}  >

        <Stack.Screen 
        name="menu" 
        component={Menu} 
        options={{title: "Welcome ",  }}
        
        />
        <Stack.Screen 
        name="AvgDamage" 
        component={AvgDamage} 
        options={{title: "Calculate the average damage of a unit "}}
        />
        <Stack.Screen 
        name="AvgDice" 
        component={AvgDice} 
        options={{title: "Calculate the average results of rolling a set number of dice "}}
        />
        <Stack.Screen 
        name="DiceRolling" 
        component={DiceRolling} 
        options={{title: "Roll the dice"}}
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

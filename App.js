
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//page imports
import Menu from "./pages/menu"
import AvgDamage from './pages/avgDamage';
import AvgDice from './pages/avgDice';
import DiceRolling from './pages/diceRolling';
import Loading from './pages/loading';



const Stack = createNativeStackNavigator();


export default function App() {
  
    return (
    <NavigationContainer>

      <Stack.Navigator 
      screenOptions={{
        headerStyle: { backgroundColor:  "#c1121f" }, headerTintColor: "#fff", headerTitleAlign: "center",
       
        
        
        }}  >

        <Stack.Screen 
        name="menu" 
        component={Menu} 
        options={{title: "Welcome "  }}
        
        />
        
        <Stack.Screen 
        name="AvgDamage" 
        component={AvgDamage} 
        options={{title: "Average Damage "}}
        />
        <Stack.Screen 
        name="AvgDice" 
        component={AvgDice} 
        options={{title: "Expected Averages "}}
        />
        <Stack.Screen 
        name="DiceRolling" 
        component={DiceRolling} 
        options={{title: "Roll the Dice "}}
        />

      </Stack.Navigator>

    </NavigationContainer>
   );
  }

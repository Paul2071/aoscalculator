import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


 function CheckBoxGroup() {
    const [isChecked, setChecked] = useState(false);
    const [isAlsoChecked, setisAlsoChecked] = useState(false);
  
    return (
      <View style={styles.container}>

        <View style={styles.section}>
          <Checkbox 
          style={styles.checkbox} 
          value={isChecked} 
          onValueChange={setChecked} />
          <Text style={styles.paragraph}>Reroll 1s</Text>
        </View>

        <View style={styles.section}>
          <Checkbox 
          style={styles.checkbox} 
          value={isAlsoChecked} 
          onValueChange={setisAlsoChecked} />
          <Text style={styles.paragraph}>Mortal on 6, sequence ends</Text>
        </View>

        <View style={styles.section}>
          <Checkbox 
          style={styles.checkbox} 
          value={isAlsoChecked} 
          onValueChange={setisAlsoChecked} />
          <Text style={styles.paragraph}>Mortal on 6, continue roll</Text>
        </View>

        <View style={styles.section}>
          <Checkbox 
          style={styles.checkbox} 
          value={isAlsoChecked} 
          onValueChange={setisAlsoChecked} />
          <Text style={styles.paragraph}>D3 Mortal on 6, sequence ends</Text>
        </View>

        <View style={styles.section}>
          <Checkbox 
          style={styles.checkbox} 
          value={isAlsoChecked} 
          onValueChange={setisAlsoChecked} />
          <Text style={styles.paragraph}>D3 Mortal on 6, continue roll</Text>
        </View>

        <View style={styles.section}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#4630EB' : undefined}
          />
          <Text style={styles.paragraph}>Plus </Text> 
          <TextInput
          placeholder='0'></TextInput>
          <Text> to hit</Text>
        </View>

        

      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 16,
      marginVertical: 32,
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    paragraph: {
      fontSize: 15,
    },
    checkbox: {
      margin: 8,
    },
  });

  export default CheckBoxGroup
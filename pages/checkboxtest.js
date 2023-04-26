import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


 function CheckBoxGroup() {
    const [isChecked, setChecked] = useState(false);
    const [isAlsoChecked, setisAlsoChecked] = useState(false);
  
    return (
      <View style={styles.container}>   

          <View>
                  <View style={styles.section}>
                    <Checkbox 
                    style={styles.checkbox} 
                    value={isChecked} 
                    onValueChange={setChecked} />
                    <Text style={styles.paragraph}>Reroll 1s</Text>
                    <Checkbox 
                    style={styles.checkbox} 
                    value={isChecked} 
                    onValueChange={setChecked} />
                  </View>

                  <View style={styles.section}>
                    <Checkbox 
                    style={styles.checkbox} 
                    value={isAlsoChecked} 
                    onValueChange={setisAlsoChecked} />
                    <Text style={styles.paragraph}>Mortal on 6, sequence ends</Text>
                    <Checkbox 
                    style={styles.checkbox} 
                    value={isChecked} 
                    onValueChange={setChecked} />
                  </View>

                  <View style={styles.section}>
                    <Checkbox 
                    style={styles.checkbox} 
                    value={isAlsoChecked} 
                    onValueChange={setisAlsoChecked} />
                    <Text style={styles.paragraph}>Mortal on 6, continue roll</Text>
                    <Checkbox 
                    style={styles.checkbox} 
                    value={isAlsoChecked} 
                    onValueChange={setisAlsoChecked} />
                  </View>

                  <View style={styles.section}>
                    <Checkbox 
                    style={styles.checkbox} 
                    value={isAlsoChecked} 
                    onValueChange={setisAlsoChecked} />
                    <Text style={styles.paragraph}>D3 Mortal on 6, sequence ends</Text>
                    <Checkbox 
                    style={styles.checkbox} 
                    value={isChecked} 
                    onValueChange={setChecked} />
                  </View>

                  <View style={styles.section}>
                    <Checkbox 
                    style={styles.checkbox} 
                    value={isAlsoChecked} 
                    onValueChange={setisAlsoChecked} />
                    <Text style={styles.paragraph}>D3 Mortal on 6, continue roll</Text>
                    <Checkbox 
                    style={styles.checkbox} 
                    value={isChecked} 
                    onValueChange={setChecked} />
                  </View>

                  <View style={styles.section}>
                    <Checkbox
                      style={styles.checkbox}
                      value={isChecked}
                      onValueChange={setChecked}
                      color={isChecked ? '#4630EB' : undefined}
                    />
                    <Text style={styles.paragraph}>Plus:</Text> 
                    <TextInput
                    style={styles.textInputStyling}
                    placeholder='0'></TextInput>
                    <Text>to hit,</Text>
                    <TextInput
                    style={styles.textInputStyling}
                    placeholder='0'></TextInput>
                    <Text> to wound</Text>
                    <Checkbox 
                    style={styles.checkbox} 
                    value={isChecked} 
                    onValueChange={setChecked} />
                  </View>


        </View>
        {/* <View style={styles.woundCheckboxContainer}>
                          <View style={styles.woundCheckboxPositioning}>
                                <View style={styles.woundCheckbox} >
                                    <Checkbox 
                                      //style={styles.woundCheckbox} 
                                      value={isChecked} 
                                      onValueChange={setChecked} />
                                </View>
                                <View>
                                    <Checkbox 
                                      style={styles.woundCheckbox} 
                                      value={isChecked} 
                                      onValueChange={setChecked} />
                                </View>
                                <View>
                                    <Checkbox 
                                      style={styles.woundCheckbox} 
                                      value={isChecked} 
                                      onValueChange={setChecked} />
                                </View>
                                <View>
                                    <Checkbox 
                                      style={styles.woundCheckbox} 
                                      value={isChecked} 
                                      onValueChange={setChecked} />
                                </View>
                                <View>
                                    <Checkbox 
                                      style={styles.woundCheckbox} 
                                      value={isChecked} 
                                      onValueChange={setChecked} />
                                </View>
                                <View>
                                    <Checkbox 
                                      style={styles.woundCheckbox} 
                                      value={isChecked} 
                                      onValueChange={setChecked} />
                                </View>
                          </View>   
         </View>
                           */}
                          

         
         
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
     
     
      
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: "space-between"
    },
    paragraph: {
      fontSize: 15,
     
    },
    checkbox: {
     margin: 10,    
     padding: 10,
    },
    textInputStyling: {
      textAlign: "center",
     
      
      
    },
   
  });

  export default CheckBoxGroup
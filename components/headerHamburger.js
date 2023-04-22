import React, {useState} from 'react'
import { Text, TouchableOpacity, Image, View, Modal, StyleSheet, Button, DrawerLayoutAndroid  } from 'react-native'


function HeaderHamburger({navigation}) {
    
const [optionsStatus, setOptionsStatus] = React.useState("false")

const [modalVisible, setModalVisible] = useState(false);

function toggleMenuVisibility(){
    if (optionsStatus == "true") {
        setOptionsStatus("false")
    } else {
        setOptionsStatus("true")
    }
}

// const navigationView = () => (
//   <View style={[styles.container, styles.navigationContainer]}>
//     <Text style={styles.paragraph}>I'm in the Drawer!</Text>
//     <Button
//       title="Close drawer"
//       onPress={() => drawer.current.closeDrawer()}
//     />
//   </View>
// )


  return (
     <View>
        <Modal 
        visible={optionsStatus}
        animationType="slide"
        backgroundColor="yellow"
        >
      <TouchableOpacity
      onPress={toggleMenuVisibility}>
          <Image
          style={{width: 30, height:30}}
          source={require("../assets/images/hamburger.png")}
          ></Image>
          <Text>{optionsStatus}</Text>
      </TouchableOpacity>
        </Modal>
  </View>
    
  );
};






const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
    },
    navigationContainer: {
      backgroundColor: '#ecf0f1',
    },
    paragraph: {
      padding: 16,
      fontSize: 15,
      textAlign: 'center',
    },
    centeredView: {
      flex: 1,      
      alignItems: 'flex-end',
      marginTop: 22,
    },
    modalView: {
     
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });



  export default HeaderHamburger
 


    // <View style={styles.centeredView}>
    //         <Modal
    //           animationType="slide"
    //           transparent={true}
    //           visible={modalVisible}
    //           onRequestClose={() => {
                
    //             setModalVisible(!modalVisible);
    //           }}>
    //           <View style={styles.centeredView}>
    //                 <View style={styles.modalView}>
    //                   <Text style={styles.modalText}>Hello World!</Text>


    //                   <Button 
    //     title='AvgDamage'
    //     onPress={()=> navigation.navigate("AvgDamage")} ></Button>

    //                   <TouchableOpacity
    //                     style={[styles.button, styles.buttonClose]}
    //                     onPress={() => setModalVisible(!modalVisible)}>
    //                     <Image
    //                 style={{width: 30, height:30}}
    //                 source={require("../assets/x-512.webp")}
    //                 ></Image>
    //                   </TouchableOpacity>

    //                   <TouchableOpacity
    //                     style={[styles.button, styles.buttonClose]}
    //                     onPress={() => setModalVisible(!modalVisible)}>
    //                     <Image
    //                 style={{width: 30, height:30}}
    //                 source={require("../assets/x-512.webp")}
    //                 ></Image>
    //                   </TouchableOpacity>

    //                   <TouchableOpacity
    //                     style={[styles.button, styles.buttonClose]}
    //                     onPress={() => setModalVisible(!modalVisible)}>
    //                     <Image
    //                 style={{width: 30, height:30}}
    //                 source={require("../assets/x-512.webp")}
    //                 ></Image>
    //                   </TouchableOpacity>


    //             </View>
    //           </View>
    //         </Modal>

    //             <TouchableOpacity
    //               style={[styles.button, styles.buttonOpen]}
    //               onPress={() => setModalVisible(true)}>
    //               <Image
    //                 style={{width: 30, height:30}}
    //                 source={require("../assets/hamburger.png")}
    //                 ></Image>
    //             </TouchableOpacity>
    // </View>
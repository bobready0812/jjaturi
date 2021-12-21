/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Button,
  TextInput,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Image
} from 'react-native'; 

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

 import profile from './assets/피카츄.jpg'; 
  





const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  

const data = {
  "1" : {
    title: "product1",
    categories:"paint",
    price:2000
  },
  "2" : {
    title: "product2",
    categories:"sofa",
    price:10000
  },
  "3" : {
    title: "product3",
    categories:"wallpaper",
    price:20000
  }, 
}



  return (
   Object.keys(data).map((key) => {return(
     <View key={key} style={styles.container}>
     <View style={styles.product}>
       <Text style={{color:"black"}}>{data[key].title}</Text>
       <Text style={{color:"black"}}>{data[key].categories}</Text>
       <Text style={{color:"black"}}>{data[key].price}</Text>
     </View>
     <View style={styles.stuck}>
      
     </View>
     </View>
   )} )
  
  );
};

const styles = StyleSheet.create({
container:{
  flex:1,
},
stuck:{
backgroundColor:"grey",
flex:0.01
},
 
 product: {
 flex:1,
 backgroundColor:"#FFF",
 alignItems:"center",
 justifyContent:"center"
 }

});

export default App;

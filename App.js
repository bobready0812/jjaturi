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
  Image,
  StatusBar
} from 'react-native'; 

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import SearchComponent from './SearchComponent';




 import profile from './assets/피카츄.jpg'; 
  

 const Stack = createNativeStackNavigator();


 const data = [
  { "1" : 
  {
    content:"airpods",
    name:"airpod",
    price:20000,

   }
   },
   { "2" : 
  {
    content:"sofa",
    name:"sofa",
    price:200002,

   }
   },
   { "3" : 
  {
    content:"wallpaper",
    name:"wallpapers",
    price:20000123,

   }
   },

   { "4" : 
  {
    content:"paint",
    name:"paint",
    price:2000012,

   }
   },
 ]


 

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  






  return (
   <>
    <StatusBar backgroundColor="#00876C" />
    <SearchComponent />
   </>
   
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

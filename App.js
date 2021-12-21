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
    prixe:2000
  },
  "2" : {
    title: "product2",
    categories:"sofa",
    prixe:10000
  },
  "3" : {
    title: "product3",
    categories:"wallpaper",
    prixe:20000
  }, 
}



  return (
   <View></View>
  
  );
};

const styles = StyleSheet.create({

});

export default App;

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
imp

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

 import profile from './assets/피카츄.jpg'; 
  





const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  
  const [name,setName] = useState("");
  
  const handlePress = () => {
    setName("김대현")
  }


  return (
    <>
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.text1}>
        안녕하세요
      </Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text>
        제이름은: {name};
      </Text>
    </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
 text1: {
   fontSize:20,
   color: "red",
   fontWeight:"500",
 }

});

export default App;

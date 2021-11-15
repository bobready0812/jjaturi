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
  Platform
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

  
  





const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  
  



  return (
  
  <KeyboardAwareScrollView style={styles.body}>

  </KeyboardAwareScrollView>
 
  );
};

const styles = StyleSheet.create({
topBar:{
  flex:1,
 
  flexDirection:"row",
  justifyContent:"space-between",
  alignItems:"center",
  paddingHorizontal:10,
},
body: {
  flex:1,
  backgroundColor:"#FFF"
 
},
main:{
  flex:1,
  borderWidth:1,
  borderColor:"lightgrey",
  marginTop:100,
  marginBottom:50,
  marginHorizontal:20,
  borderRadius:13,
 
},
title: {
 flex:0.8,
 backgroundColor:"#FFF",
 borderTopLeftRadius:13,
 borderTopRightRadius:13,
 justifyContent:"center",
 paddingLeft:10,
 
},
price: {
  flex:0.8,
  
  justifyContent:"center",
  paddingLeft:10,
  paddingLeft:10,
},
content : {
  flex:3,
 
  borderBottomLeftRadius:13,
  borderBottomRightRadius:13,
  paddingTop:10,
  paddingLeft:8,
  paddingRight:8,
},
categories: {
  flex:0.8,
  
  paddingLeft:12  ,
  justifyContent:"center",
},
stuck: {
  flex:0.01,
  backgroundColor:"lightgrey",
  marginHorizontal:10,
},
stuck2: {
  flex:0.001,
  backgroundColor:"lightgrey",
  paddingHorizontal:20,
}





});

export default App;

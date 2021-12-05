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
  
  



  return (
    <SafeAreaView style={styles.container}>
      <View style={{justifyContent: "flex-start", padding:20,}}>
       <Image source={profile} style={{
         width: 60,
         height: 60,
         borderRadius: 10,
         marginTop: 8
       }}></Image>
       <Text style={{
         fontSize:20,
         fontWeight: 'bold',
         color:'white',
         
       }}>
         피카츄 프로필
       </Text>
       <TouchableOpacity>
         <Text style={{
           marginTop: 6,
           color: 'white,'
         }}>프로필 보기</Text>
       
      </View>
    </SafeAreaView>
 
 
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#5359D1',
    alignItems: 'center',
    justifyContent: "center",
  }

});

export default App;

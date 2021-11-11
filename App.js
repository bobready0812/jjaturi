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
import React, { useEffect, useRef, useState } from 'react';
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
  Alert
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};









  
  





const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  
  



  return (

   <View style={{flex:1}}> 
    <View style={styles.topBar}>

    </View>
    <View style={styles.body}>
     <View style={styles.main}>
       <View style={styles.title}>
        
       </View>
       <View style={styles.categories}>

       </View>
       <View style={styles.price}>

       </View>
       <View style={styles.content}>

       </View>
     </View>
    </View>
    
  </View>
  );
};

const styles = StyleSheet.create({
topBar:{
  flex:0.06,
  backgroundColor:"#e8dff5"
},
body: {
  flex:1,
  backgroundColor:"#daeaf6"
},
main:{
  flex:1,
  backgroundColor:"#fcf4dd",
  marginTop:100,
  marginBottom:50,
  marginHorizontal:20,
  borderRadius:13,
 
},
title: {
 flex:0.8,
 backgroundColor:"#fcf4dd", 
 borderTopLeftRadius:13,
 borderTopRightRadius:13,
},
price: {
  flex:0.8,
  backgroundColor:"#fcf4dd",
},
content : {
  flex:3,
  backgroundColor:"#fff",
  borderBottomLeftRadius:13,
  borderBottomRightRadius:13,
},
categories: {
  flex:0.8,
  backgroundColor:"#fff",
}





});

export default App;

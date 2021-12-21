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




 import profile from './assets/피카츄.jpg'; 
  

 const Stack = createNativeStackNavigator();


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

 const HomeScreen = ({navigation}) => {
   return(
     <View>
    <TouchableOpacity onPress={() => navigation.navigate('Product1')}>
       <Text>상품1</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Product2')}>
    <Text>상품2</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Product3')}>
    <Text>상품3</Text>
    </TouchableOpacity>
    </View>
   )
 }

 const Product1 = ({navigation}) => {
   return(
     <View>
       <Text>안녕1</Text>
     </View>
   )
 }
 const Product2 = ({navigation}) => {
  return(
    <View>
      <Text>안녕2</Text>
    </View>
  )
}
const Product3 = ({navigation}) => {
  return(
    <View>
      <Text>안녕3</Text>
    </View>
  )
}



const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  





  return (
   <NavigationContainer>
     <Stack.Navigator>
       
       <Stack.Screen 
       name="home"
       component={HomeScreen}
       options={{headerShown: false}}
       />
        <Stack.Screen 
       name="Product1"
       component={Product1}
       options={{headerShown: false}}
       />
       
       <Stack.Screen 
       name="Product2"
       component={Product2}
       options={{headerShown: false}}
       />
        <Stack.Screen 
       name="Product3"
       component={Product3}
       options={{headerShown: false}}
       />
       
       
     </Stack.Navigator>
   </NavigationContainer>
  
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

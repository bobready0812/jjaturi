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


 const data = [
  {
    title: "product1",
    categories:"paint",
    price:2000
  },
  {
    title: "product10",
    categories:"paint",
    price:2000
  },
  

  {
    title: "product2",
    categories:"sofa",
    price:10000
  } ,
  {
    title: "product12",
    categories:"sofa",
    price:10000
  } ,
   {
    title: "product3",
    categories:"wallpaper",
    price:20000
  ,},
  {
    title: "product20",
    categories:"wallpaper",
    price:20000
  ,}]


 const HomeScreen = ({navigation}) => {
   return(
     <View>
    <TouchableOpacity onPress={() => navigation.navigate('Paint')}>
       <Text>페인트</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Sofa')}>
    <Text>소파</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('WallPaper')}>
    <Text>벽지</Text>
    </TouchableOpacity>
    </View>
   )
 }

 const  Paint = ({navigation}) => {

  const dataRe1  = data.filter(function(item) {
    return item.categories == "paint";
  });
  
  return(
    dataRe1.map( (obj) => {
      return <View key={obj.title}>
        <Text style={{color:"black"}}>{obj.title}</Text>
        <Text style={{color:"black"}}>{obj.categories}</Text>
        <Text style={{color:"black"}}>{obj.price}</Text>
      </View>
    } 
    )
  )


 }
 const Sofa = ({navigation}) => {
  const dataRe2  = data.filter(function(item) {
    return item.categories == "sofa";
  });
  
  return(
    dataRe2.map( (obj) => {
      return <View key={obj.title}>
        <Text style={{color:"black"}}>{obj.title}</Text>
        <Text style={{color:"black"}}>{obj.categories}</Text>
        <Text style={{color:"black"}}>{obj.price}</Text>
      </View>
    } 
    )
  )
}
const WallPaper = ({navigation}) => {
  const dataRe3  = data.filter(function(item) {
    return item.categories == "wallpaper";
  });
  
  return(
    dataRe3.map( (obj) => {
      return <View key={obj.title}>
        <Text style={{color:"black"}}>{obj.title}</Text>
        <Text style={{color:"black"}}>{obj.categories}</Text>
        <Text style={{color:"black"}}>{obj.price}</Text>
      </View>
    } 
    )
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
       name="Paint"
       component={Paint}
       options={{headerShown: false}}
       />
       
       <Stack.Screen 
       name="Sofa"
       component={Sofa}
       options={{headerShown: false}}
       />
        <Stack.Screen 
       name="WallPaper"
       component={WallPaper}
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

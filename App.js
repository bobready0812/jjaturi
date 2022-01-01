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
  Image,
  StatusBar
} from 'react-native'; 


const data = [
  {name: "sofa", 
   price:2000,
   id:1
  
  }, 
  {name: "wallpaper",
   price: 20000,
   id:2,
    
  }
]



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



const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  




  return (<>
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

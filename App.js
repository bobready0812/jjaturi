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
  StatusBar,
  FlatList
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
import axios from 'axios';


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
 const [filterdData, setfilterdData] = useState([]);
 const [masterData, setmasterData] = useState([]); 
 const [search, setSearch] = useState('');


 useEffect(() => {
   fetchPosts();  
   return () => {

   }
 }, [])
 const fetchPosts = () => {
   const apiURL = 'https://jsonplaceholder.typicode.com/posts';
   fetch(apiURL).then((response)=> response.json()).then((responseJson)=> {
     setfilterdData(responseJson);
     setmasterData(responseJson);
   }).catch((error) => {
     console.error(error);
   })
 }  

const ItemView = ({item}) => {
  return (
    <Text>
      {item.id}{'. '}{item.title.toUpperCase()}
    </Text>
  )
}

const ItemSeparatorView = () => {
  return(
    <View style={{height: 0.5, width: '100%', backgroundColor:'#c8c8c8'}}>
      
    </View>
  )
}

const searchFilter = (text) => {
  if(text) {
    const newData = masterData.filter((item) => {
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setfilterdData(newData);
    setSearch(text);
  } else {
    setfilterdData(masterData);
    setSearch(text);
  }
  }


  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <TextInput
        style={styles.textInputStyle}
        value={search}
        placeholder="search Here"
        underlineColorAndroid="transparent"
        onChangeText={(text) => searchFilter(text)}
        />
        <FlatList 
        data={filterdData}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
   
   
  );
  };

const styles = StyleSheet.create({
container:{
 backgroundColor:'white',
},
itemStyle: {
  padding: 15
},
textInputStyle : {
  height: 60,
  borderWidth: 1,
  paddingLeft: 20,
  margin:5,
  borderColor:'#009688',
  backgroundColor:'white'

}


});

export default App;

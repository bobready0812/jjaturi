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
 
  {
    content:"airpods",
    name:"airpod",
    price:20000,
    id:1,
    title:"airpod2세대"

   },
   
   
  {
    content:"sofa",
    name:"sofa",
    price:200002,
    id:2,
    title:"이케아 소파"

   },
   
 
  {
    content:"wallpaper",
    name:"wallpapers",
    price:20000123,
    id:3,
    title:"삐까뻔적벽지"

   },
   

  
  {
    content:"paint",
    name:"paint",
    price:2000012,
    id:4,
    title:"paint"

   }
   ,
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
  //  const apiURL = 'https://jsonplaceholder.typicode.com/posts';
  //  fetch(apiURL).then((response)=> response.json()).then((responseJson)=> {
     setfilterdData(data);
     setmasterData(data);
  //  }).catch((error) => {
  //    console.error(error);
  //  })
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

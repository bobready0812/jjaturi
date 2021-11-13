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
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



  
  





const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  
  



  return (
   
   <View style={{flex:1}}> 
  
    <View style={styles.topBar}>
       <TouchableOpacity>
         <Text style={{fontSize:17,}}>취소</Text>
       </TouchableOpacity>
       <Text style={{fontSize:17}}>상품 올리기</Text>
       <View style={{backgroundColor:"#489CCB", paddingHorizontal:8, paddingVertical:0.5, borderRadius:20}}>
       <TouchableOpacity>
         <Text style={{fontSize:18, color:"white" , padding:2}}>완료</Text>
       </TouchableOpacity>
       </View>
       
    </View>
    
    <View style={styles.stuck2}></View>
    
    <View style={styles.body}>
     <View style={styles.main}>
       <View style={styles.title}>
         <TextInput style={{fontSize:18,}} placeholder="제목"></TextInput>
       </View>
       <View style={styles.stuck}></View>
       <View style={styles.categories}>
          <Text style={{fontSize:20,}}>카테고리 설정</Text>
       </View>
       <View style={styles.stuck}></View>
       <View style={styles.price}>
          <TextInput style={{fontSize:18,}} placeholder="가격 입력  ₩"></TextInput>
       </View>
       <View style={styles.stuck}></View>
       <View style={styles.content}>
           <TextInput style={{fontSize:18,}} multiline placeholder="본문내용  입력"></TextInput>
       </View>
     </View>
    </View>
    
  </View>
  );
};

const styles = StyleSheet.create({
topBar:{
  flex:0.06,
 
  flexDirection:"row",
  justifyContent:"space-between",
  alignItems:"center",
  paddingHorizontal:10,
},
body: {
  flex:1,
  backgroundColor:"#fff"
 
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

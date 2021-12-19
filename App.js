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


import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

 import profile from './assets/피카츄.jpg'; 
  





const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
 
 const [views1, setViews1] = useState(0);
 const [views2, setViews2] = useState(0);
 const [views3, setViews3] = useState(0);
 const [isOver1,setIsOver1] = useState(false);
 const [isOver2,setIsOver2] = useState(false);
 const [isOver3,setIsOver3] = useState(false);
 const [good1, setGood1] = useState(0);
 const [good2, setGood2] = useState(0);
 const [good3, setGood3] = useState(0);
 

useEffect(() => {
  setGood1(good1)
  if(good1 > 1) {
    setIsOver1(true);
  } else {
    setIsOver1(false)
   }
  
}, [good1])

useEffect(() => {
  setGood2(good2)
  if(good2 > 1) {
    setIsOver2(true);
  } else {
    setIsOver2(false)
   }
}, [good2])

useEffect(() => {
  setGood3(good3)
  if(good3 > 1) {
    setIsOver3(true);
  } else {
    setIsOver3(false)
   }
}, [good3])

 const handlePress1 = () => {
   setGood1(good1 +1 )
   
 }
 
 
 
 const handlePress2 = () => {
  setGood2(good2 +1 )
  
}
 

const handlePress3 = () => {
  setGood3(good3 +1 )
  
}

const viewPress1 = () => {
  setViews1(views1 +1 )
}


const viewPress2 = () => {
 setViews2(views2 +1 )
}


const viewPress3 = () => {
 setViews3(views3 +1 )
}

  return (
   
  <View style={{flex:1}}>
    
    
    <View style={!isOver1? styles.view1a:styles.view1}>
      <TouchableOpacity onPress={viewPress1}>
        <Text style={{fontSize:20,color:"white", fontWeight:"400"}}>조회수:{views1} </Text>
      </TouchableOpacity>  
        <Text style={{fontSize:20,color:"white", fontWeight:"400"}}>좋아요:{good1} </Text>
        <TouchableOpacity onPress={handlePress1}>
          <Text>🧡</Text>
        </TouchableOpacity>
    </View>
    <View style={!isOver2? styles.view2a:styles.view2}>
    <TouchableOpacity onPress={viewPress2}>
        <Text style={{fontSize:20,color:"white", fontWeight:"400"}}>조회수:{views2} </Text>
    </TouchableOpacity> 
        <Text style={{fontSize:20,color:"white", fontWeight:"400"}}>좋아요:{good2} </Text>
        <TouchableOpacity onPress={handlePress2}>
          <Text>🧡</Text>
        </TouchableOpacity>
    </View>
    <View style={!isOver3? styles.view3a:styles.view3}>
    <TouchableOpacity onPress={viewPress3}>
        <Text style={{fontSize:20,color:"white", fontWeight:"400"}}>조회수:{views3} </Text>
    </TouchableOpacity> 
        <Text style={{fontSize:20,color:"white", fontWeight:"400"}}>좋아요:{good3} </Text>
        <TouchableOpacity onPress={handlePress3}>
          <Text>🧡</Text>
        </TouchableOpacity>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
 view1: {flex:1, backgroundColor:"#5DB3F0"},
 view1a: {flex:1, backgroundColor:"black"},
 view2:{flex:1, backgroundColor:"#61E2FA"},
 view2a:{flex:1, backgroundColor:"black"},
 view3:{flex:1, backgroundColor:"#64E3D4"},
 view3a:{flex:1, backgroundColor:"black"},
 text1: {
   fontSize:20,
   color: "red",
   fontWeight:"500",
 },
 text2: {

 },
 text3: {
   color:"green"
 }

});

export default App;

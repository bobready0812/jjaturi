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
import React, { useState } from 'react';
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




const Stack = createNativeStackNavigator();


const HomeScreen = ({navigation}) => {

const [doneItem, setDoneItem] = useState({});
const [isRefreshed, setIsRefreshed] = useState(false);

const getItmes = async() => {
  const gotItem =await AsyncStorage.getItem('@item');
  setDoneItem(JSON.parse(gotItem));
  setIsRefreshed(true);
}
  
  return(
    <View style={styles.container}>
    
    <View style={styles.nav}>
      <TouchableOpacity>
        <Text style={styles.title}>JJATURI</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.title2}>menu</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.title2}>tag</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        navigation.navigate('addItem')
      }}>
        <Text style={styles.title2}>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text onPress={getItmes} style={styles.title2}>Re</Text>
      </TouchableOpacity>
    </View>
    <ScrollView>
       {isRefreshed && <View style={styles.write}>
   <Text style={styles.write2}> {doneItem.name} </Text>
   <Text style={styles.write2}> {doneItem.price}</Text>
         </View>}
    
    </ScrollView>
    <View style={styles.menu}>
      <TouchableOpacity>
        <Text style={styles.btn}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.btn}>Chat</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.btn}>User</Text>
      </TouchableOpacity>
    </View>
  </View>
  )
}



const addItems = ({navigation}) => {
 const [name,setName] = useState("");
 const [price, setPrice] = useState("");
 const [content, setContent] = useState("");
 const [sum, setSum]= useState({});
 

function changeName (aName) {
  setName(aName);
}

function changePrice (aPrice) {
  setPrice(aPrice);
}
function changeContent (aContent) {
  setContent(aContent);
}

const setItems = async() => {
  setSum({name, price, content})
  console.log(sum)
  await AsyncStorage.setItem('@item', JSON.stringify(sum));
  
}

function back () {
  navigation.navigate('Home');
}

  return(
   <View>
     <View>
      <Text>상품 이름</Text>
      <TextInput onChangeText={changeName}></TextInput>
     </View>
     <View>
      <Text>가격</Text>
      <TextInput onChangeText={changePrice}></TextInput>
     </View>
     <View>
      <Text>상품 설명</Text>
      <TextInput multiline onChangeText={changeContent}></TextInput>
     </View>
     <View>
       <Button onPress={setItems} title="완료"></Button>
       <Button onPress={back} title="돌아가기"></Button>
     </View>
     
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
     <Stack.Navigator   screenOptions={{
    headerShown: false
  }}>  
  <Stack.Screen name="Home"
      component={HomeScreen}>     
  </Stack.Screen> 
  <Stack.Screen name="addItem" component={addItems}>

  </Stack.Screen>

  </Stack.Navigator>
 
  </NavigationContainer> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    fontFamily: "noto sans",
  },
  nav: {
    flexDirection: "row",
  },
  title: {
    marginTop: 40,
    marginBottom: 20,
    marginLeft: 20,
    fontSize: 25,
    textAlign: "left",
    alignItems: "center",
    justifyContent: "center",
  },
  title2: {
    marginTop: 40,
    marginBottom: 20,
    marginLeft: 20,
    fontSize: 25,
    color: "grey",
    textAlign: "left",
    alignItems: "center",
    justifyContent: "center",
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
    marginTop: 20,
  },
  btn: {
    fontSize: 23,
  },
  write: {
    
    alignItems: "center",
    flex: 1.1,
    color: "#787878",
    backgroundColor: "#333333",
    margin: 2,
  },
  write2: {
    fontSize: 40,
   color: "#787878",
   
   
  },
});

export default App;

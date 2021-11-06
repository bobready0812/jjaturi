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
  Button
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
  return(
   <View>
     <Text>안녕</Text>
     <Button onPress={() => navigation.navigate('addItem')}></Button>
   </View>
  )
}

const ProfileScreen = () => {
  return(
   <View>
     <Text>프로필</Text>
     
   </View>
  )
}

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  

  const [isSubmit, setIsSubmit] = useState(false);
  const [itemName, setItemName] = useState("");

  function addItem () {
    setIsSubmit(true);
    setItemName("add");
  }

  return (
   <NavigationContainer>
     <Stack.Navigator>  
  <Stack.Screen name="Home"
      component={HomeScreen}>     
  </Stack.Screen> 
  <Stack.Screen name="profile" component={ProfileScreen}>

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
    fontSize: 50,
    textAlign: "center",
    flex: 1.3,
    color: "#787878",
    backgroundColor: "#333333",
    margin: 2,
  },
});

export default App;

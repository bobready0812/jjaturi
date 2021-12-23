import React from "react";
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
    StatusBar
  } from 'react-native'; 


const SearchComponent = () => { 
    return(
        
        <View style={styles.searchWrapperStyle}>
            
            <TextInput 
            placeholder="Search"
             placeholderTextColor="white" 
             style={styles.searchInputStyle} 
            />
          
        </View>
    )
}



const styles = StyleSheet.create({
searchWrapperStyle: {
    backgroundColor:"#16AD85",
    flexDirection:"row",
    justifyContent:"flex-end",
   
},
searchInputStyle: {
    flex:1,
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 0,
    margin: 0,
    color:"white",
}
    
});

export default SearchComponent;
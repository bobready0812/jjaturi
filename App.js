/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import { StatusBar } from "expo-status-bar";
import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
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

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={styles.container}>
    <StatusBar style="auto" />
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
    </View>
    <ScrollView>
      <Text style={styles.write}>hello</Text>
      <Text style={styles.write}>bye</Text>
      <Text style={styles.write}>hello</Text>
      <Text style={styles.write}>bye</Text>
      <Text style={styles.write}>hello</Text>
      <Text style={styles.write}>bye</Text>
      <Text style={styles.write}>hello</Text>
      <Text style={styles.write}>bye</Text>
      <Text style={styles.write}>hello</Text>
      <Text style={styles.write}>bye</Text>
      <Text style={styles.write}>hello</Text>
      <Text style={styles.write}>bye</Text>
      <Text style={styles.write}>hello</Text>
      <Text style={styles.write}>bye</Text>
      <Text style={styles.write}>hello</Text>
      <Text style={styles.write}>bye</Text>
      <Text style={styles.write}>hello</Text>
      <Text style={styles.write}>bye</Text>
      <Text style={styles.write}>hello</Text>
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

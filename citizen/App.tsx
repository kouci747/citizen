import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Routes from './src/routes/routes';

function App() {
  return (
    //the first screen inside Routes is the first one to appear
    <Routes />
  );
}

export default App;

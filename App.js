import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Header from './components/Header';

const App = () => {
  return (
    <View style={style.container}>
      <Header></Header>
    </View>
  );
};

const style = StyleSheet.create({
  container:{
    flex: 1, 
    // paddingTop:60,
  }

})

export default App;

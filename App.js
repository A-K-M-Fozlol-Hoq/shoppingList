import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import Header from './components/Header';
import { v4 as uuid} from "uuid";
import ListItem from './components/ListItem';

const App = () => {
  const [items, setItems] = useState([
    { id: uuid(), text: 'Milk', },
    { id: uuid(), text: 'Egg', },
    { id: uuid(), text: 'Bread', },
    { id: uuid(), text: 'Juice', },
  ]);
  return (
    <View style={styles.container}>
      <Header title="Shopping List"></Header>
      <FlatList 
        data={items} 
        renderItem={({item})=> <ListItem item={item}></ListItem>}  
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    // paddingTop:60,
  }

})

export default App;

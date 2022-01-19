import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import Header from './components/Header';
import { v4 as uuid} from "uuid";
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    { id: uuid(), text: 'Milk', },
    { id: uuid(), text: 'Egg', },
    { id: uuid(), text: 'Bread', },
    { id: uuid(), text: 'Juice', },
  ]);

  const deleteItem= (id) =>{
    setItems(prevItem=>{
      return prevItem.filter(item=>item.id != id)
    })
  }

  const addItem = (text) =>{
    setItems(prevItem=>{
      return [{ id: uuid(), text: text  }, ...prevItem]
    })
  }

  return (
    <View style={styles.container}>
      <Header title="Shopping List"></Header>
      <AddItem addItem={addItem}></AddItem>
      <FlatList 
        data={items} 
        renderItem={({item})=> <ListItem item={item} deleteItem={deleteItem}></ListItem>}  
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

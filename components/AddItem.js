import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import Icon from "react-native-vector-icons/dist/FontAwesome";
const AddItem = (props) => {
    const { addItem } = props;
    const [ text, setText ] = useState('');
    return (
        <View>
            <TextInput 
                placeholder="Add item..." 
                style={styles.input}
                onChangeText={(value) =>setText(value)}
            />
            <TouchableOpacity 
                style={styles.btn}
                onPress={()=>{addItem(text)}}
                >
                <Text style={styles.btnText}>
                    <Icon name="plus" size={20} /> Add Item
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height:60,
        padding:8,
        fontSize:16
    },
    btn: {
        backgroundColor:"#c2bad8",
        padding:9,
        margin:5
    },
    btnText: {
        color:"darkslateblue",
        fontSize:20,
        textAlign:"center"
    }
})

export default AddItem;
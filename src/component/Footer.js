import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const Header = (props) => (
    <View style={style.container}>
        <Text style={style.title}>
        {props.title}
        </Text>
    </View>
);
 
const style = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: '#fff',
        fontSize: 50
    }
})
 
export default Header;
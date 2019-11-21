import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {toUpperFirst} from '../util'
 
const PesListItem = props => {
    const {pessoa, onPressItemDetails} = props
    const { title, first, last} = pessoa.name
    return (
        
        <TouchableOpacity onPress={() => {
                onPressItemDetails()
            }}>
            
            <View style={style.line}>
         
            <Image style={style.imageUrl} source={{uri: pessoa.picture.thumbnail}}/>
            <Text style={style.linetext} key={first}>
                    {`${
                        toUpperFirst(title)
                    } ${
                        toUpperFirst(first)
                    } ${
                        toUpperFirst(last)
                    }`}
                </Text>   
              
            </View>
            
            </TouchableOpacity>
           
    )
}
 
const style = StyleSheet.create({

    line: {
        height: 80,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        alignItems: 'center',
       flexDirection: 'row'
    },
    linetext:{
       fontSize:15,
       paddingLeft: 20,
        flex: 7
        
    },
    imageUrl:{
        aspectRatio: 1,
        flex: 1,
        marginLeft: 10,
        borderRadius: 50
    }
}
)
 
 
export default PesListItem
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PesListItem from './PesListItem';
import { ScrollView } from 'react-native-gesture-handler';


const PesList = props => {

    const {pessoas, onPressItem} = props
    const items = pessoas.map(pessoa => {
          return (
              <PesListItem 
              key={pessoa.name.first} 
              pessoa={pessoa}
                    onPressItemDetails={onPressItem}/>
          )
        }
      )

  
    return (
        
        <View style={style.container}>
       
          {items}                
        
        </View>
       
    )
}
 
const style = StyleSheet.create({
    container: {
        backgroundColor: '#607B8B',
        flexDirection: "column"
    },
    
    
}
)
 
export default PesList
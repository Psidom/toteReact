import React from 'react';
import { View } from 'react-native';
import Header from '../component/Header';
import Footer from '../component/Footer';
import axios from 'axios';
import PesList from '../component/PesList'

export default class PesPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      pessoas: []
  
    }
   
  }
 
  componentDidMount(){
    axios
    .get('https://lista-tote.herokuapp.com/results')
    .then(response => {
      //const {results} = response.data
      this.setState({
        pessoas: response.data
      })
    })
  }
 
  render(){

  
    
    return (
        <View>
            <PesList 
                pessoas={this.state.pessoas} 
                onPressItem={() => {
                    this.props.navigation.navigate('PesDetails')
                    }}/>
            <Footer title='teste'/>
        </View>
    );
  }
 
}
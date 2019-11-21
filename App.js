import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import PesPage from './src/pages/PesPage'
import PesPageDetails from './src/pages/CarPageDetails';
 
 
const StackNavigator = createStackNavigator({
  'Main': {
    screen: PesPage
  },
  'PesDetails': {
    screen: PesPageDetails
  }},
  {
    defaultNavigationOptions: {
      title: 'Pessoas',
      headerStyle: {
        backgroundColor: '#ff4040',
        borderBottomWidth: 1,
        borderBottomColor: '#c5c5c5'
      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 30,
        flexGrow:1,
        textAlign: 'center'
      }
    }
  })
 
const AppContainer = createAppContainer(StackNavigator)
 
export default AppContainer
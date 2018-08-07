import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import ItemList from '../components/ItemList.js';

import {Actions} from 'react-native-router-flux';


export default class Home extends Component<{}> {
  
    signUp(){
        Actions.signup()
      }
    Login(){
    Actions.login()
    }

    render() {
      return (
        <View style={styles.container}>
            <View style={styles.topBar}><Text style={styles.headerText1}>Gear|</Text><Text style={styles.headerText2}>Swap</Text></View>
            <View style={styles.tabMenu}><Text style={styles.tabMenuText}>Please Sign Up or Log In</Text></View>
            <View style={styles.main}><ItemList></ItemList></View>
            <View style={styles.bottomBar}>
            <TouchableOpacity onPress={this.signUp}><Text style={styles.signUpButton}>Sign Up</Text></TouchableOpacity>
            <TouchableOpacity onPress={this.Login}><Text style={styles.signUpButton}>Login</Text></TouchableOpacity>
            </View>  
        </View>
      );
    }
} 
  

  const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: 'stretch',
      justifyContent: 'center'
    },
    topBar:{
        flex: 1,
        backgroundColor: '#164DA4',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    tabMenu:{
        flex: 1,
        backgroundColor:'#B0B6BD',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabMenuText:{
        fontSize: 20,
        color: "#bb5555"
    },
    main:{
        flex: 12,
        backgroundColor: '#E0E7F3',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomBar:{
        flex: 1,
        backgroundColor: '#B0B6BD',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    headerText1:{
        fontFamily:"stoneburg",
        fontSize: 40,
        color: '#ddd'
    },
    headerText2:{
        fontFamily:"mandorlatoB",
        fontSize: 30,
        color: '#ddd'
    },
    signUpButton: {
        color: '#BC8600',
        fontSize:16,
        fontWeight: '500',
      },
    separator:{
        borderRightWidth:1,
        borderRightColor: 'black'
    },

  });

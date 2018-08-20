import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
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
            <View style={styles.topBar}><Image style = {styles.logoText} source={require('../../src/images/dark.png')}/></View>
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
    logoText:{
        height: '100%',
        resizeMode: 'contain'
    },
    tabMenu:{
        flex: 1,
        backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabMenuText:{
        fontSize: 20,
        color: "#bb5555"
    },
    main:{
        flex: 12,
        backgroundColor: '#BC8600',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomBar:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    signUpButton: {
        color: '#164da4',
        fontSize:16,
        fontWeight: '500',
      },
    separator:{
        borderRightWidth:1,
        borderRightColor: 'black'
    },

  });

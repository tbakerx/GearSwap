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
            <View style={styles.topBar}><Text style={styles.headerText}>GearSwap</Text></View>
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
        backgroundColor: '#0d47a1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    main:{
        flex: 12,
        backgroundColor: '#bc8600',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomBar:{
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    headerText:{
        fontSize: 30,
        fontWeight: '500',
        color: '#ddd'
    },
    signUpButton: {
        color: '#ccc',
        fontSize:16,
        fontWeight: '500'
      }
  });

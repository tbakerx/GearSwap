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
            <View elevation={10} style={styles.topBar}><Image style = {styles.logoText} source={require('../../src/images/dark.png')}/></View>
            <View elevation={5} style={styles.tabMenu}><Text style={styles.tabMenuText}>Please Sign Up or Log In</Text></View>
            <View style={styles.main}><ItemList></ItemList></View>
            <View elevation={10} style={styles.bottomBar}>
            <TouchableOpacity onPress={this.signUp}><Text style={styles.signUpButton}>Sign Up</Text></TouchableOpacity>
            <Text style={styles.separator}></Text>
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
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 10
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
        justifyContent: 'space-around',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 10
    },
    signUpButton: {
        color: '#164da4',
        fontSize:16,
        fontWeight: '500',
      },
    separator:{
    marginLeft: -15,    
    height: '100%',    
    borderLeftColor:'#bbb',
    borderLeftWidth: StyleSheet.hairlineWidth
    },  
  });

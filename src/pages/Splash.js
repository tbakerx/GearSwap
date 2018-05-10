import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  StatusBar,
  View,
  TouchableOpacity
} from 'react-native';

import LoginForm from '../components/LoginForm.js';
import Logo from '../components/Logo.js';

import {Actions} from 'react-native-router-flux';

export default class Splash extends Component<{}> {


  render() {
    return (
      <View style={styles.container}>
            <Logo/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#bc8600',
    alignItems: 'center',
    justifyContent: 'center'
  },

});

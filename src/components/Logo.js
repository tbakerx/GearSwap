import React, {Component} from 'react';
import{
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Logo extends Component<{}> {
  render(){
    return(
        <View style={styles.container}>
          <Image style={{width: 125, height: 125}}
                 source={require('../../src/images/logo.png')} />
          <Image style = {styles.logoText} source={require('../../src/images/colored.png')} />       
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoText:{
    width: 300,
    resizeMode: 'contain'
  }
});

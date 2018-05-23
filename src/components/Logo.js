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
          <Text style={styles.logoText}>Gear<Text style={styles.logoTextAlt}>Swap </Text></Text>
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
  logoText: {
    marginVertical: 15,
    fontSize: 42,
    fontWeight: '500',
    fontStyle: 'italic',
    color: '#ccc'
  },
  logoTextAlt:{
    color: '#0d47a1',
    textShadowOffset: {width: 1, height: 1},
    textShadowColor: '#ccc',
    textShadowRadius: 7,
  }
});

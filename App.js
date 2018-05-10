import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Route from './src/Route';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Route />
        <StatusBar backgroundColor='#4b4b4b' barStyle='light-content' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

{/*
  <color name="primaryYellow">#bc8600</color>
<color name="primaryBlue">#0d47a1</color>
<color name="primaryWhite">#cccccc</color>
  */}

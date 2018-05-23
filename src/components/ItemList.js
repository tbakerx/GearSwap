import React, {Component} from 'react';

import{
    StyleSheet,
    View
  } from 'react-native';

  export default class ItemList extends Component<{}> {
    render(){
      return(
          <View style={styles.list}>

          </View>
      );
    }
  }

  const styles = StyleSheet.create({
    list: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
  });
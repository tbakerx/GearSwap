import React, {Component} from 'react';
import{
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class Separator extends Component<{}> {
  render(){
    return(
        <View style={styles.separator}>
          <Text> | </Text>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    marginLeft: 2,
    marginRight: 2
  },
});

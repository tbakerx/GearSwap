import React, {Component} from 'react';
import{
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Item extends Component<{}> {

    constructor(props){
        super(props);
    }


    render(){
      return(
         <View style={styles.item} >
            <Text>{this.props.size}</Text>
         </View> 
      );
    }
  }

const styles = StyleSheet.create({
item: {
    backgroundColor: '#CCC',
    width: 50,
    height: 50
}
});  
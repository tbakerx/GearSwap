import React, {Component} from 'react';
import{
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const marginValue = 8;

export default class Item extends Component<{}> {

    constructor(props){
        super(props);
    }


    render(){
        let size = this.props.size;
      return(
         <View style={[{width:size, height:size}, styles.item]} >
         <Image style={{width:size}} source={require('../../src/images/test.jpg')} />
            <Text style={styles.text} >{size}</Text>
         </View> 
      );
    }
  }

const styles = StyleSheet.create({
item: {
    backgroundColor: '#CCC',
    justifyContent: 'space-around',
    margin: marginValue 
},
text: {
   padding: 4,
   height: 40,
   backgroundColor: '#aaa',
   alignSelf: 'stretch'
}
});  
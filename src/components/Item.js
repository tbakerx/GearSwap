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
            <Image style={[{width:size}, styles.image]} source={require('../../src/images/test.jpg')} />
            <View style={styles.itemInfo}><Text style={styles.text} >Test Item</Text></View>
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
image:{
    flex:9
},
itemInfo:{
    alignItems: 'center',
    flex: 1,
    padding: 4,
    backgroundColor: '#CCC'
},
text: {
}
});  
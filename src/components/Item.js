import React, {Component} from 'react';
import{
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Separator from '../components/Separator.js';

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
            <View style={styles.itemInfo}>
                <Image style={styles.profileImage} source={require('../../src/images/logo.png')}/>
                <Separator />
                <Text style={styles.text} >{this.props.title}</Text>
            </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    padding: 4,
    backgroundColor: '#CCC'
},
profileImage:{
    flex: 1,
    height: 25,
    width: 15,
    borderRadius: 25
},
text: {
    flex: 5,
    color: '#555'
}
});  
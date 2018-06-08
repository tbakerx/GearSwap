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
            <Image style={[{width:size}, styles.image]} source={this.props.mainImage} />
            <View style={styles.itemInfo}>
                <View style={styles.itemDistTitle}>
                    <Text style={styles.itemDistance}>10km</Text>
                    <Text style={styles.itemTitle}>{this.props.title}</Text>
                </View>
                <View style={styles.owner} >
                    <Image style={styles.profileImage} source={this.props.profileImage}/>
                    <Text style={styles.name} >{this.props.owner}</Text>
                </View>
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
    flex:7
},
itemInfo:{
    alignItems: 'center',
    flex: 2,
    backgroundColor: '#CCC'
},
itemDistTitle:{
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignSelf:'stretch'

},
itemDistance:{
    flex: 1,
    borderRightColor:'#bbb',
    borderRightWidth: StyleSheet.hairlineWidth
},
itemTitle:{
    flex: 3,
    marginLeft: 5
},
owner:{
    flex: 1,
    flexDirection: 'row',

},
profileImage:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
    borderRadius: 25,
},
name: {
    flex: 7,
    color: '#555',
    paddingLeft: 5,
    borderLeftColor:'#bbb',
    borderLeftWidth: StyleSheet.hairlineWidth
}
});  
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
                    <Separator />
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
    flexDirection: 'row',
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom:2,
    alignSelf:'stretch'

},
itemDistance:{
    flex: 1
},
itemTitle:{
    flex: 3
},
owner:{
    flexDirection: 'row',
    paddingBottom: 2

},
profileImage:{
    flex: 1,
    height: 25,
    width: 15,
    borderRadius: 25
},
name: {
    flex: 5,
    color: '#555'
}
});  
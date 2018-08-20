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
            <Image style={[{width:size}, styles.image]} source={this.props.mainImage} />
            <View style={styles.itemInfo}>
                <View style={styles.itemDistTitle}>
                    <Text style={styles.itemTitle}>{this.props.title}</Text>
                    <Text style={styles.itemDistance}>{this.props.distance}</Text>
                </View>
                <View style={styles.owner} >
                    <View style={styles.imageContainer}><Image style={styles.profileImage} source={this.props.profileImage}/></View>
                    <View style={styles.nameContainer}><Text style={styles.name} >{this.props.owner}</Text></View>
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
    flex: 3,
    backgroundColor: '#fff'
},
itemDistTitle:{
    flex: 3,
    flexDirection: 'row',
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignSelf:'stretch'

},
itemDistance:{
    flex: 1
},
itemTitle:{
    flex: 3,
    marginRight: 5,
    borderRightColor:'#bbb',
    borderRightWidth: StyleSheet.hairlineWidth
},
owner:{
    flex: 2,
    flexDirection: 'row',

},
imageContainer:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
},
profileImage:{
    height:'100%',
    resizeMode: 'contain'
},
nameContainer:{
    flex: 7,
},
name: {
    color: '#555',
    paddingLeft: 10,
}
});  
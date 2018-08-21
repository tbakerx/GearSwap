import React, {Component} from 'react';

import{
    StyleSheet,
    ScrollView,
    Dimensions,
    TouchableOpacity
  } from 'react-native';

  import Item from '../components/Item';

  import {Actions} from 'react-native-router-flux';

  const paddingValue = 8;

  export default class ItemList extends Component<{}> {

    constructor(){
        super();

        this.Item_List = [
            'First',
            'Second',
            'Third',
            'Forth',
            'Fifth',
            'Sixth',
            'SeventhSeventhSeventhSeventh',
            'Eighth',
            'Ninth',
            'First',
            'Second',
            'Third',
            'Forth',
            'Fifth',
            'Sixth',
            'Seventh',
            'Eighth',
            'Ninth',
            'Tenth'
        ];
    }

    _calculateItemSize() {
        let {height, width} = Dimensions.get('window');
        return (width - paddingValue * 6) / 2;
      }
     

    render(){

      let size = this._calculateItemSize();
      let owner = "John Doe"; 
      let distance = "281km"; 
      let profileImage = require('../../src/images/test.jpg');
      let mainImage = require('../../src/images/logo.png');

      
      let items = this.Item_List.map(function(item,key){
          return(
            <Item key={key} mainImage={mainImage} title={item.toString()} owner={owner} profileImage={profileImage} size={size} distance={distance}></Item>
          )
      });


      return(
          <ScrollView contentContainerStyle={styles.list} style={styles.container}>
            {items}
          </ScrollView>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
        padding: paddingValue
    },  
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
  });
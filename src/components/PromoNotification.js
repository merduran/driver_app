import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class PromoNotification extends Component {

    constructor(props){
        super(props);
    }
    render(){
        return (
          <View style={{marginLeft: 10, backgroundColor: '#5BCCF2', height: 16, width: 16, justifyContent: 'center', alignItems: 'center', borderRadius: 8}}>
            <Text style={{color: 'white', fontSize: 10, fontWeight: 'bold'}}>{this.props.numPromotions}</Text>
          </View>
        );
    }
}
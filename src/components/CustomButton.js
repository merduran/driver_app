import React, { Component } from 'react';
import { Text, StyleSheet, Dimensions, View, Image, TouchableOpacity } from 'react-native';
const { height, width } = Dimensions.get('window');
import Ionicons from 'react-native-vector-icons/Ionicons';
import PromoNotification from './PromoNotification';

export default class CustomButton extends Component {

    constructor(props){
        super(props);
    }
    // TODO: less detailed bar
    // <TouchableOpacity onPress={() => console.log("amcik")} style={{backgroundColor: 'white', padding: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, borderColor: '#BFBFBF', borderBottomWidth: this.props.borderBottomWidth, borderTopLeftRadius: this.props.borderTopRadius, borderTopRightRadius: this.props.borderTopRadius, borderBottomLeftRadius: this.props.borderBottomRadius, borderBottomRightRadius: this.props.borderBottomRadius}}>
            
    //         <Text style={{color: 'grey', fontSize: 13}}>{this.props.buttonText}</Text>
    //         <PromoNotification numPromotion={this.props.numPromotion}></PromoNotification>
    //         <Ionicons name="ios-arrow-forward" size={15} color={'#BFBFBF'}/>
    //       </TouchableOpacity>

    displayPromoNotfication(){
        if (this.props.numPromotions){
            return <PromoNotification numPromotions={this.props.numPromotions}></PromoNotification>;
        }
    }

    render(){
        return (
          <TouchableOpacity onPress={() => console.log("amcik")} style={{backgroundColor: 'white', padding: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, borderColor: '#BFBFBF', borderBottomWidth: this.props.borderBottomWidth, borderTopLeftRadius: this.props.borderTopRadius, borderTopRightRadius: this.props.borderTopRadius, borderBottomLeftRadius: this.props.borderBottomRadius, borderBottomRightRadius: this.props.borderBottomRadius}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color: 'grey', fontSize: 13}}>{this.props.buttonText}</Text>
                {this.displayPromoNotfication()}
            </View>
            <Ionicons name="ios-arrow-forward" size={15} color={'#BFBFBF'}/>
          </TouchableOpacity>
        );
    }
}
<ion-icon name="arrow-forward"></ion-icon>

// const styles = StyleSheet.create({});

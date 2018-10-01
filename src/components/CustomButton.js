import React, { Component } from 'react';
import { Text, StyleSheet, Dimensions, View, Image, TouchableOpacity } from 'react-native';
const { height, width } = Dimensions.get('window');
import Ionicons from 'react-native-vector-icons/Ionicons';
import PromoNotification from './PromoNotification';

export default class CustomButton extends Component {

    constructor(props){
        super(props);
    }

    displayPromoNotfication(){
        if (this.props.numPromotions){
            return <PromoNotification numPromotions={this.props.numPromotions}></PromoNotification>;
        }
    }



    render(){
        // var stylesS = StyleSheet.create({
        //     customButtonContainer: {
        //         backgroundColor: '#FBFBFB', 
        //         padding: 10, 
        //         flexDirection: 'row', 
        //         justifyContent: 'space-between', 
        //         alignItems: 'center', 
        //         borderWidth: 1,
        //         borderColor: '#E6E6E6'
        //     }
        // });   
        return (
          <TouchableOpacity onPress={console.log("ANNEN")} style={[styles.customButtonContainer, { borderBottomWidth: this.props.borderBottomWidth, borderTopLeftRadius: this.props.borderTopRadius, borderTopRightRadius: this.props.borderTopRadius, borderBottomLeftRadius: this.props.borderBottomRadius, borderBottomRightRadius: this.props.borderBottomRadius }]}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color: 'grey', fontSize: 13, color: '#939393'}}>{this.props.buttonText}</Text>
                {this.displayPromoNotfication()}
            </View>
            <Ionicons name="ios-arrow-forward" size={15} color="#C4C4C4"/>
          </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    customButtonContainer: {
        backgroundColor: '#FBFBFB', 
        padding: 10, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        borderWidth: 1,
        borderColor: '#E6E6E6'
    }
});    

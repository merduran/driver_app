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
        iconSize = 15;
        iconColor = "#C4C4C4";
        buttonTitle = "Show more";
        iconName = "ios-arrow-forward";
        return (
          <TouchableOpacity onPress={this.props.onPress} style={[styles.customButtonContainer, { borderBottomWidth: this.props.borderBottomWidth, borderTopLeftRadius: this.props.borderTopRadius, borderTopRightRadius: this.props.borderTopRadius, borderBottomLeftRadius: this.props.borderBottomRadius, borderBottomRightRadius: this.props.borderBottomRadius }]}>
            <View style={styles.customButtonTextContainer}>
                <Text style={styles.customButtonTitle}>{this.props.buttonText}</Text>
                {this.displayPromoNotfication()}
            </View>
            <Ionicons name={iconName} size={iconSize} color={iconColor}/>
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
    },
    customButtonTitle: {
        color: 'grey', 
        fontSize: 13, 
        color: '#939393'
    },
    customButtonTextContainer: {
        flexDirection: 'row', 
        alignItems: 'center'
    }
});    

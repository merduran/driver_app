import React, { Component } from 'react';
import { 
    View,
    Text, 
    StyleSheet, 
    Dimensions
} from 'react-native';
import EarningsInDollars from './EarningsInDollars';

const { height, width } = Dimensions.get('window');

export default class ReferalsAndTotalEarnings extends Component {

    render(){
        year = new Date().getFullYear();
        if (this.props.headerTitle === 'referals') {
            return (
                <View style={styles.referalsAndTotalEarningsHeaderContainer}>
                    <Text style={styles.referalsAndTotalEarningsHeaderTitle}>{this.props.headerTitle}</Text>
                    <Text style={styles.referalsAndTotalEarningsHeaderDate}>{year}</Text>
                    <Text style={styles.numReferals}>{this.props.quantity}</Text>
                </View>
            );
        }
        return (
            <View style={styles.referalsAndTotalEarningsHeaderContainer}>
                <Text style={styles.referalsAndTotalEarningsHeaderTitle}>{this.props.headerTitle}</Text>
                <Text style={styles.referalsAndTotalEarningsHeaderDate}>{year}</Text>
                <EarningsInDollars
                    quantity={this.props.quantity}
                    color={'#4F4F4F'}
                    dollarSignFontSize={25}
                    quantityFontSize={30}
                />
            </View>
        );
        
    }
}

const styles = StyleSheet.create({
    referalsAndTotalEarningsHeaderContainer: {
        alignItems: 'center',   
        justifyContent: 'center', 
        width: width / 3, 
        height: height / 9,
    },
    referalsAndTotalEarningsHeaderDate: {
        color: '#B4B4B4', 
        fontSize: 11, 
        textTransform: 'uppercase', 
    },
    referalsAndTotalEarningsHeaderTitle: {
        color: '#B4B4B4', 
        fontSize: 11, 
        textTransform: 'uppercase', 
        fontWeight: 'bold'
    },
    numReferals: {
        color: '#4F4F4F', 
        fontSize: 30
    }, 

});

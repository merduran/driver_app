import React, { Component } from 'react';

import { 
    Text, 
    StyleSheet, 
    TouchableOpacity 
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default class ReduceScreenButton extends Component {

    render(){
        iconSize = 11;
        iconColor = '#B4B4B4';
        buttonTitle = "Show more";
        iconName = "ios-arrow-up";
        return (
            <TouchableOpacity onPress={() => this.props.dislayDetailedHomePage()} style={styles.reduceScreenSizeButtonContainer}>
                <Ionicons name={iconName} color={iconColor} size={iconSize}/>
                <Text style={styles.reduceScreenSizeButtonText}>{buttonTitle}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    reduceScreenSizeButtonContainer: {
        position: 'absolute', 
        bottom: 20, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    reduceScreenSizeButtonText: {
        fontSize: 11,
        color: '#B4B4B4',
        fontWeight: 'bold'
    },
});
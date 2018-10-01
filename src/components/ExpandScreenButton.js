import React, { Component } from 'react';

import { 
    Text, 
    StyleSheet, 
    TouchableOpacity 
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default class ExpandScreenButton extends Component {

    render(){
        iconSize = 11;
        iconColor = '#B4B4B4';
        buttonTitle = "Show more";
        iconName = "ios-arrow-down"
        return (
            <TouchableOpacity onPress={this.props.dislayDetailedHomePage} style={styles.expandScreenSizeButtonContainer}>
                <Text style={styles.expandScreenSizeButtonText}>{buttonTitle}</Text>
                <Ionicons name={iconName} size={iconSize} color={iconColor}/>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    expandScreenSizeButtonContainer: {
        position: 'absolute', 
        bottom: 20, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    expandScreenSizeButtonText: {
        fontSize: 11,
        color: '#B4B4B4',
        fontWeight: 'bold'
    },
});

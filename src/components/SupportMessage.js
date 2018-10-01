import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

export default class SupportMessage extends Component {

    render(){ 
        buttonColor = this.props.shouldDisableSubmitButton ? '#E4E4E4': '#FD6E5B'
        shadowColor = this.props.shouldDisableSubmitButton ? "#F9F9F9" : '#FD6E5B'
        return (
            <TouchableOpacity disabled={this.props.shouldDisableSubmitButton} style={[styles.buttonContainer, { backgroundColor: buttonColor, shadowColor: shadowColor }]}>
                <Text style={styles.buttonText}>submit</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        bottom: 25,
        left: 0,
        right: 0,
        marginLeft: 20,
        marginRight: 20,
        padding: 12,
        backgroundColor: "#FD6E5B", 
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 5,
        shadowOpacity: 0.7,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
    },
    buttonText: {
        textTransform: 'uppercase',
        fontSize: 13,
        letterSpacing: 1,
        color: 'white'
    }
});    

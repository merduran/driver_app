import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export default class AccountCheckUp extends Component {
	
	static navigationOptions = {
        title: 'FIREFLY'
    };

    constructor(props){
        super(props);
    }

    render(){
        return (
            <Text>AccountCheckUp</Text>
        );
    }
}




const styles = StyleSheet.create({});

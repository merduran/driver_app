import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export default class Help extends Component {

    static navigationOptions = {
        title: 'FIREFLY'
    };

    constructor(props){
        super(props);
    }

    render(){
        return (
            <Text >Help</Text>
        );
    }
}




const styles = StyleSheet.create({});

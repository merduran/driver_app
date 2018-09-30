import React, { Component } from 'react';
import { Text, StyleSheet, Dimensions, View, Image, TouchableOpacity, Button } from 'react-native';
const { height, width } = Dimensions.get('window');
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class ExpandScreenButton extends Component {

    constructor(props){
        super(props);
    }
    // TODO: make EDITS clickable
    render(){
        return (
            <TouchableOpacity onPress={() => this.props.setScreenHeight()} style={{position: 'absolute', bottom: 20, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 11, color: '#B4B4B4'}}>Show more</Text>
                <Ionicons name={"ios-arrow-down"} size={11} color='#B4B4B4'/>
            </TouchableOpacity>
        );
    }
}

// const styles = StyleSheet.create({});

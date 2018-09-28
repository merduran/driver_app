import React, { Component } from 'react';
import { Text, StyleSheet, Dimensions, View, Image, TouchableOpacity, Button } from 'react-native';
const { height, width } = Dimensions.get('window');
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class ReduceScreenButton extends Component {

    constructor(props){
        super(props);
    }
    // TODO: make EDITS clickable
    render(){
    	// Only render til every state var is filled in.
        // return (
        //   <TouchableOpacity onPress={() => console.log("amcik")} style={{borderRadius: 6, padding: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, borderColor: '#BFBFBF'}}>
        //     <Text style={{color: 'grey'}}>Driver Profile</Text>
        //     <Ionicons name="ios-arrow-forward" size={15} color={'#BFBFBF'}/>
        //   </TouchableOpacity>
        // );
        return (
            <TouchableOpacity onPress={() => this.props.setScreenHeight()} style={{backgroundColor: 'grey', position: 'absolute', bottom: 20, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Ionicons name={"ios-arrow-up"} size={10}/>
                <Text style={{fontSize: 10}}>Show less</Text>
            </TouchableOpacity>
        );
    }
}
<ion-icon name="arrow-forward"></ion-icon>

// const styles = StyleSheet.create({});

import React, { Component } from 'react';
import { Text, StyleSheet, Dimensions, View, Image } from 'react-native';
const { height, width } = Dimensions.get('window');

export default class Account extends Component {

    static navigationOptions = {
        title: 'FIREFLY'
    };

    constructor(props){
        super(props);

        this.state = {
        	driver_name: 'Bonav'
        };

    }
    
    render(){
    	// Only render til every state var is filled in.
        return (
        	<View>
	            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#313131', height: height / 3.2}}>
	                <View style={{justifyContent: 'space-between', alignItems: 'center', height: height / 6.3, width: width / 2.5, borderRightColor: 'gray', borderRightWidth: 1}}>
	            		<Image source={require('../../images/driver_pic.jpg')} style={{width: width / 6, height: width / 6, borderRadius: width / 12}}/>
	            	 	<Text style={{color: 'white'}}>{this.state.driver_name}</Text>
	            	 	<Text style={{color: 'orange'}}>EDIT</Text>
	           		</View>
	           		<View style={{justifyContent: 'space-between', alignItems: 'center', height: height / 6.3, width: width / 2.5}}>
	            		<Image source={require('../../images/car_pic.jpg')} style={{width: width / 6, height: width / 6, borderRadius: width / 12}}/>
	            	 	<Text style={{color: 'white'}} >{this.state.driver_name}</Text>
	            	 	<Text style={{color: 'orange'}}>EDIT</Text>
	           		</View>
	            </View>
	            <View style={{backgroundColor: 'red', height: height / 3.2}}>
	                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#313131'}}>Account</Text>
	            </View>
            </View>
        );
    }
}




const styles = StyleSheet.create({});

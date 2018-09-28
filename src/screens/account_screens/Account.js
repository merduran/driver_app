import React, { Component } from 'react';
import { Text, StyleSheet, Dimensions, View, Image } from 'react-native';
import CustomButton from '../../components/CustomButton'
const { height, width } = Dimensions.get('window');

export default class Account extends Component {

    static navigationOptions = {
        title: 'FIREFLY'
    };

    constructor(props){
        super(props);

        this.state = {
        	driver_name: 'Bonav',
        	driver_car: 'DB5'
        };

    }
    // TODO: make EDITS clickable

    render(){
    	// Only render til every state var is filled in.
        return (
        	<View>
	            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#313131', height: height / 3.2}}>
	                <View style={{justifyContent: 'space-between', alignItems: 'center', height: height / 6.3, width: width / 2.5, borderRightColor: 'gray', borderRightWidth: 1}}>
	            		<Image source={require('../../images/driver_pic.jpg')} style={{width: width / 6, height: width / 6, borderRadius: width / 12, borderWidth: 1, borderColor: 'gray', marginBottom: 2}}/>
	            	 	<Text style={{color: 'white'}}>{this.state.driver_name}</Text>
	            	 	<Text style={{color: 'tomato'}}>EDIT</Text>
	           		</View>
	           		<View style={{justifyContent: 'space-between', alignItems: 'center', height: height / 6.3, width: width / 2.5}}>
	            		<Image source={require('../../images/car_pic.jpg')} style={{width: width / 6, height: width / 6, borderRadius: width / 12, borderWidth: 1, borderColor: 'gray', marginBottom: 2}}/>
	            	 	<Text style={{color: 'white'}} >{this.state.driver_car}</Text>
	            	 	<Text style={{color: 'tomato'}}>EDIT</Text>
	           		</View>
	            </View>
	            <View style={{padding: 20}}>
	                <Text style={{fontSize: 25, fontWeight: 'bold', color: '#313131', marginBottom: 10}}>Account</Text>
	                <CustomButton buttonText={"Driver Profile"} borderBottomWidth={0} borderTopRadius={4}/>
	                <CustomButton buttonText={"Payment & Banking"} borderBottomWidth={0}/>
	                <CustomButton buttonText={"Billing History"} borderBottomWidth={0}/>
	                <CustomButton buttonText={"Checkup"} borderBottomWidth={1} borderBottomRadius={4}/>
	            </View>
            </View>
        );
    }
}




const styles = StyleSheet.create({});

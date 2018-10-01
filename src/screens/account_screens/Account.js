import React, { Component } from 'react';
import { Text, StyleSheet, Dimensions, View, Image } from 'react-native';
import CustomButton from '../../components/CustomButton';
import EditableAccountInfo from '../../components/EditableAccountInfo';

const { height, width } = Dimensions.get('window');

export default class Account extends Component {

    static navigationOptions = {
        title: 'FIREFLY'
    };

    constructor(props){
        super(props);
        this.state = {
        	driverName: 'Bonav',
        	driverCar: 'DB5',
        	checkUpDate: new Date()
        };
    }

    render(){
        return (
        	<View style={{backgroundColor: '#F9F9F9', flex: 1}}>
	            <View style={styles.editableAccountInfoContainer}>
	                <EditableAccountInfo
	                	imageSource={require('../../images/driver_pic.jpg')}
	                	editableInfo={this.state.driverName}
	                	borderRightWidth={0.2}
	                />
	                <EditableAccountInfo
	                	imageSource={require('../../images/car_pic.jpg')}
	                	editableInfo={this.state.driverCar}
	                />
	            </View>
	            <View style={styles.accountFormContainer}>
	                <Text style={styles.accountHeader}>Account</Text>
	                <CustomButton buttonText={"Driver Profile"} borderBottomWidth={0} borderTopRadius={4}/>
	                <CustomButton buttonText={"Payment & Banking"} borderBottomWidth={0}/>
	                <CustomButton buttonText={"Billing History"} borderBottomWidth={0}/>
	                <CustomButton buttonText={"Checkup"} borderBottomWidth={1} borderBottomRadius={4}/>
	            </View>
            </View>
        );
    }
}




const styles = StyleSheet.create({
	editableAccountInfoContainer: {
		flexDirection: 'row', 
		justifyContent: 'center', 
		alignItems: 'center', 
		backgroundColor: '#313131', 
		height: height / 3.5
	},
	accountFormContainer: {
		padding: 20
	},
	accountHeader: {
		fontSize: 23, 
        fontWeight: 'bold', 
        color: '#5A5A5A', 
        marginBottom: 10
	}
});

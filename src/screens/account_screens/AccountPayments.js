import React, { Component } from 'react';
import { 
	Text, 
	StyleSheet, 
	View 
} from 'react-native';
import CustomButton from '../../components/CustomButton';

export default class AccountPayments extends Component {

	static navigationOptions = {
        title: 'FIREFLY'
    };

    constructor(props){
        super(props);

    }

    render(){
        return (
            <View style={styles.screen}>
                <View style={styles.checkupFormContainer}>
                    <Text style={styles.accountHeader}>Payment</Text>
                    <CustomButton buttonText={"Bank Account"} borderBottomWidth={1} borderTopRadius={4} borderBottomRadius={4}/>
                    <Text style={styles.checkupInstructions}>Your earnings will be deposited into this account</Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    screen: {
        backgroundColor: "#F9F9F9",
        flex: 1
    },
    checkupFormContainer: {
        padding: 20,
        marginTop: 25
    },
    accountHeader: {
        fontSize: 23, 
        fontWeight: 'bold', 
        color: '#5A5A5A', 
        marginBottom: 10
    },
    checkupInstructions: {
        marginTop: 13,
        fontSize: 11,
        color: '#939393', 
    },

});

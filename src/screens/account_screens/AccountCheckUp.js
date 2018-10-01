import React, { Component } from 'react';
import { Text, 
    StyleSheet, 
    View,
    TouchableOpacity     
} from 'react-native';
import CustomButton from '../../components/CustomButton';

export default class AccountCheckUp extends Component {
	
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
                    <Text style={styles.accountHeader}>Checkup</Text>
                    <View style={styles.accountSubHeaderContainer}>
                        <Text style={styles.accountSubHeader}>Complete monthly checkup by </Text>
                        <Text style={styles.checkupDate}>12/20/18</Text>
                    </View>
                    <Text style={styles.checkupInstructions}>
                        To complete checkup, simply click the button below
                        and take a picture of both sides of the display while
                        the display is on. Once both photos are taken, click
                        submit and you're all set!
                    </Text>
                    <CustomButton buttonText={"Take Pictures"} borderBottomWidth={1} borderTopRadius={4} borderBottomRadius={4}/>
                    <TouchableOpacity style={styles.linkContainer}>
                        <Text style={styles.link}>Can't take photos? Contact support</Text>
                    </TouchableOpacity>
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
    accountSubHeaderContainer: {
        flexDirection: 'row',
    },
    accountSubHeader: {
        color: '#5A5A5A',
    },
    checkupDate: {
        color: 'tomato'
    },
    checkupInstructions: {
        marginTop: 20,
        marginBottom: 20,
        fontSize: 11,
        color: '#5A5A5A', 
        lineHeight: 15
    },
    link: {
        marginTop: 20,
        fontSize: 12,
        fontStyle: 'italic',
        color: '#B4B4B4',
    },
    linkContainer: {
        alignSelf: 'flex-start',
        borderBottomWidth: 1,
        borderColor: '#B4B4B4',
    }

});

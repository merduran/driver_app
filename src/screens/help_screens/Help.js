import React, { Component } from 'react';
import { 
    Text, 
    StyleSheet, 
    View 
} from 'react-native';
import CustomButton from '../../components/CustomButton';

export default class Help extends Component {

    static navigationOptions = {
        title: 'FIREFLY'
    };

    constructor(props){
        super(props);

    }

    render(){
        return (
            <View style={styles.screen}>
                <View style={[styles.checkupFormContainer, { marginTop: 25 }]}>
                    <Text style={styles.accountHeader}>Quick help</Text>
                    <CustomButton buttonText={"Issue with the display"} borderBottomWidth={0} borderTopRadius={4}/>
                    <CustomButton onPress={() => this.props.navigation.navigate('HelpReportBug')} buttonText={"Report a bug"} borderBottomWidth={1} borderBottomRadius={4}/>
                </View>
                <View style={styles.checkupFormContainer}>
                    <Text style={styles.accountHeader}>Contact us</Text>
                    <CustomButton onPress={() => this.props.navigation.navigate('HelpSupportMessages')} buttonText={"Support Messages"} borderTopRadius={4} borderBottomRadius={4}/>
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
        padding: 20
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

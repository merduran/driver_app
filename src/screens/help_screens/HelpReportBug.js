import React, { Component } from 'react';
import { 
    Text, 
    StyleSheet, 
    View,
    TextInput 
} from 'react-native';
import CustomButton from '../../components/CustomButton';
import SubmitButton from '../../components/SubmitButton';

export default class HelpReportBug extends Component {

    static navigationOptions = {
        title: 'FIREFLY'
    };

    constructor(props){
        super(props);
        this.state = { subject: '', message: '' }

    }

    render(){
        return (
            <View style={styles.screen}>
                <View style={[styles.checkupFormContainer, { marginTop: 25 }]}>
                    <Text style={styles.header}>Report a bug</Text>
                    <Text style={styles.subHeader}>Please check the following if they apply</Text>
                    <CustomButton buttonText={"Issue with the display"} borderBottomWidth={0} borderTopRadius={4}/>
                    <CustomButton buttonText={"Issue with the display"} borderBottomWidth={1} borderBottomRadius={4}/>
                </View>
                    <Text style={styles.header}>Contact us</Text>
                    <TextInput
                        style={styles.contactSubjectInput}
                        placeholder={"Subject..."}
                        placeholderTextColor={'#B4B4B4'}
                        multiline={true}
                        onChangeText={(subject) => this.setState({subject: subject})}
                    />
                <SubmitButton shouldDisableSubmitButton={!this.state.text || !this.state.subject}/>
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
    header: {
        fontSize: 23, 
        fontWeight: 'bold', 
        color: '#5A5A5A', 
        marginBottom: 10
    },
    subHeader: {
        color: '#5A5A5A',
        marginBottom: 17
    },
    contactMessageInput: {
        borderWidth: 1,
        borderColor: '#E6E6E6',
        color: '#5A5A5A',
        padding: 10,
        paddingTop: 10,
        paddingBottom: 10,
        height: 140,
    },
    contactSubjectInput: {
    	borderWidth: 1,
        borderColor: '#E6E6E6',
        color: '#5A5A5A',
        padding: 10,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 10
    }

});

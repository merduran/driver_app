import React, { Component } from 'react';
import { 
    Text, 
    StyleSheet, 
    View,
    TextInput 
} from 'react-native';
import CustomButton from '../../components/CustomButton';
import SubmitButton from '../../components/SubmitButton';

export default class HelpSupportMessages extends Component {

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
                    <Text style={styles.accountHeader}>Support Messages</Text>
                    <CustomButton buttonText={"Issue with the display"} borderBottomWidth={0} borderTopRadius={4}/>
                    <CustomButton buttonText={"Report a bug"} borderBottomWidth={1} borderBottomRadius={4}/>
                </View>
                <View style={styles.checkupFormContainer}>
                    <Text style={styles.accountHeader}>Contact us</Text>
                    <TextInput
                        style={styles.contactSubjectInput}
                        placeholder={"Subject..."}
                        placeholderTextColor={'#B4B4B4'}
                        multiline={false}
                        onChangeText={(subject) => this.setState({subject: subject})}
                    />
                    <TextInput
                        style={styles.contactMessageInput}
                        placeholder={"Message..."}
                        placeholderTextColor={'#B4B4B4'}
                        multiline={true}
                        onChangeText={(text) => this.setState({text: text})}
                    />
                </View>
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
    accountHeader: {
        fontSize: 23, 
        fontWeight: 'bold', 
        color: '#5A5A5A', 
        marginBottom: 10
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

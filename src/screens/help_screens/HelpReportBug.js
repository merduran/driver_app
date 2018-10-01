import React, { Component } from 'react';
import { 
    Text, 
    StyleSheet, 
    View,
    TextInput 
} from 'react-native';
import CustomButton from '../../components/CustomButton';
import SubmitButton from '../../components/SubmitButton';
import CheckBox from 'react-native-check-box';

export default class HelpReportBug extends Component {

    static navigationOptions = {
        title: 'FIREFLY'
    };

    constructor(props){
        super(props);
        this.state = { text: '', isChecked: false }

    }

    render(){
    	_this = this
        return (
            <View style={styles.screen}>
                <View style={[styles.checkupFormContainer, { marginTop: 25 }]}>
                    <Text style={styles.header}>Report a bug</Text>
                    <Text style={styles.subHeader}>Please check the following if they apply</Text>
                    <CheckBox
					    style={{flex: 1, padding: 10, borderRadius: 5}}
					    onClick={() => {
					      _this.setState({
					          isChecked: !_this.state.isChecked
					      });
					    }}
					    isChecked={_this.state.isChecked}
					    leftText={"CheckBox"}
					/>
                </View>
                <View style={styles.checkupFormContainer}>
                    <TextInput
                        style={styles.commentsInput}
                        placeholder={"Let us know what's wrong..."}
                        placeholderTextColor={'#B4B4B4'}
                        multiline={true}
                        onChangeText={(text) => this.setState({text: text})}
                    />
                </View>
                <SubmitButton shouldDisableSubmitButton={!this.state.text}/>
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
    },
    commentsInput: {
        borderWidth: 1,
        borderColor: '#E6E6E6',
        color: '#5A5A5A',
        padding: 10,
        paddingTop: 10,
        paddingBottom: 10,
        height: 160,
    }

});

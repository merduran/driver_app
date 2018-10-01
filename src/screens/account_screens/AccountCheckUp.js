import React, { Component } from 'react';
import { 
    Text, 
    StyleSheet, 
    View,
    TouchableOpacity,
    TextInput,
    Dimensions     
} from 'react-native';
import CustomButton from '../../components/CustomButton';
import SubmitButton from '../../components/SubmitButton';

export default class AccountCheckUp extends Component {
	
	static navigationOptions = {
        title: 'FIREFLY'
    };

    constructor(props){
        super(props);
        this.state = { text: '' }
    }

    render(){
        return (
            <View style={styles.screen}>
                <View style={[styles.checkupFormContainer, { marginTop: 25 } ]}>
                    <Text style={styles.accountHeader}>Checkup</Text>
                    <View style={styles.accountSubHeaderContainer}>
                        <Text style={styles.accountSubHeader}>Complete monthly checkup by </Text>
                        <Text style={styles.checkupDate}>{'12/20/18'}</Text>
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
                <View style={styles.checkupFormContainer}>
                    <Text style={styles.commentsHeader}>Additional Comments</Text>
                    <Text style={styles.checkupInstructions}>
                        If there is anything you have questions about or something
                        seems wrong with the display, please let us know below
                    </Text>
                    <TextInput
                        style={styles.commentsInput}
                        placeholder={"Message..."}
                        placeholderTextColor={'#B4B4B4'}
                        multiline={true}
                        onChangeText={(text) => this.setState({text: text})}
                    />
                </View>
                <SubmitButton shouldDisableSubmitButton={!this.state.text.length}/>
            </View>
        );
    }
}

const { height, width } = Dimensions.get('window');

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
    accountSubHeaderContainer: {
        flexDirection: 'row',
    },
    accountSubHeader: {
        color: '#5A5A5A',
    },
    checkupDate: {
        color: 'tomato',
        fontWeight: 'bold'
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
    },
    commentsHeader: {
        fontSize: 20, 
        fontWeight: 'bold', 
        color: '#5A5A5A', 
    },
    commentsInput: {
        borderWidth: 1,
        borderColor: '#E6E6E6',
        color: '#5A5A5A',
        padding: 10,
        paddingTop: 10,
        paddingBottom: 10,
        height: 140,
    }

});

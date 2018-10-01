import React, { Component } from 'react';
import { 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    Dimensions,
    View 
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const { height, width } = Dimensions.get('window');

export default class SupportMessage extends Component {

    constructor(props){
        super(props);
    }

    render(){ 
        iconSize = 15;
        iconColor = "#C4C4C4";
        buttonTitle = "Show more";
        iconName = "ios-arrow-forward";
        return (
          <TouchableOpacity onPress={this.props.onPress} style={[styles.supportMessageContainer, { borderBottomWidth: this.props.borderBottomWidth, borderTopLeftRadius: this.props.borderTopRadius, borderTopRightRadius: this.props.borderTopRadius, borderBottomLeftRadius: this.props.borderBottomRadius, borderBottomRightRadius: this.props.borderBottomRadius }]}>
            <View style={styles.prevMessageTextContainer}>
                <Text style={styles.prevMessageDate}>{this.props.date}</Text>
                <View style={styles.textContainer}>
                    <Text style={styles.prevMessageTopic}>{this.props.subject}  -  </Text>
                    <Text numberOfLines={1} ellipsizeMode={'tail'} style={[styles.prevMessage, { width: ( width / 2.8 - this.props.message.length ) }]}>{this.props.message}</Text>
                </View>
            </View>
            <Ionicons name={iconName} size={iconSize} color={iconColor}/>
          </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    supportMessageContainer: {
        backgroundColor: '#FBFBFB', 
        padding: 10, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        borderWidth: 1,
        borderColor: '#E6E6E6'
    },
    prevMessageTopic: {
        fontWeight: 'bold',
        fontSize: 13, 
        color: '#939393'
    },
    prevMessageDate: {
        position: 'absolute',
        left: 0,
        fontSize: 13, 
        color: '#939393'
    },
    prevMessageTextContainer: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    prevMessage: {
        fontSize: 13, 
        color: '#939393'
    },
    textContainer: {
        position: 'absolute',
        left: 80,
        width: width / 1.8,
        flexDirection: 'row',
        alignItems: 'center',

    }
});    

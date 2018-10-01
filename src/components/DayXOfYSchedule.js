import React, { Component } from 'react';

import { 
    View,
    Text, 
    StyleSheet, 
} from 'react-native';

export default class DayXOfYSchedule extends Component {

    render(){        
        return (
            <View style={{marginTop: this.props.marginTop, paddingRight: this.props.paddingRight, paddingLeft: this.props.paddingLeft, borderLeftWidth: this.props.borderLeftWidth, borderColor: this.props.borderColor}}>
                <Text style={{fontSize: 11, color: '#B4B4B4', width: 100, textAlign: this.props.textAlign, textTransform: 'uppercase'}}>{this.props.text}</Text>
            </View>
        );
    }
}

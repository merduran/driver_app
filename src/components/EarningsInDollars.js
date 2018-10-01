import React, { Component } from 'react';

import { 
    View,
    Text, 
    StyleSheet, 
} from 'react-native';

export default class EarningsInDollars extends Component {

    render(){        
        return (
            <View style={{padding: this.props.padding, flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color: this.props.color, fontSize: this.props.dollarSignFontSize}}>$</Text>
                <Text style={{color: this.props.color, fontSize: this.props.quantityFontSize, fontWeight: this.props.quantityFontWeight}}>{this.props.quantity}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    dayXOfYScheduleContainer: {
        alignItems: 'center' 
    }
});

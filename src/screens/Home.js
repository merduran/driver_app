import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class Home extends Component {
    // TODO: Factor this out somehow for all screens
    static navigationOptions = {
        title: 'FIREFLY'
    };

    constructor(props){
        super(props);
        this.state = {
            earnings_curr: 0,
            earnings_total: 0,
            day_curr: 0,
            day_total: 0,
            time_curr: 0,
            tier_curr: 0,
            tier_total: 0,
            earning_until_next_tier: 0,
            time_until_next_tier: 0,
            code_promotion: '',
            num_promotions: '',
            num_referals: '',
        }
    }

    render(){
        // TODO: Only render after all state variables are loaded 
        return (
            <View style={{backgroundColor: 'yellow'}}><Text>Home</Text></View>
        );
    }
}




const styles = StyleSheet.create({});

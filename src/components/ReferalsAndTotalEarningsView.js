import React, { Component } from 'react';
import ReferalsAndTotalEarnings from './ReferalsAndTotalEarnings';
import { 
    View,
    Text, 
    StyleSheet, 
    Dimensions
} from 'react-native';

const { height, width } = Dimensions.get('window');


export default class ReferalsAndTotalEarningsView extends Component {

    render(){
        return (
            <View style={styles.referalsAndTotalEarningsMainContainer}>
                    <ReferalsAndTotalEarnings
                        headerTitle={"referals"} 
                        quantity={this.props.numReferals}
                    />
                    <ReferalsAndTotalEarnings 
                        headerTitle={"total earnings"} 
                        quantity={this.props.earningsTotal}
                    />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    referalsAndTotalEarningsMainContainer: {
        padding: 5, 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        width: width, 
        marginTop: 20
    },

});

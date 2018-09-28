import React, { Component } from 'react';
import { Text, StyleSheet, View, Button, Dimensions } from 'react-native';
import CustomButton from '../components/CustomButton';
import ExpandScreenButton from '../components/ExpandScreenButton';
import ReduceScreenButton from '../components/ReduceScreenButton';
const { height, width } = Dimensions.get('window');

export default class Home extends Component {
    // TODO: Factor this out somehow for all screens
    static navigationOptions = {
        title: 'FIREFLY'
    };

    constructor(props){
        super(props);

        this.state = {
            earningsCurr: 300,
            earningsTotal: 0,
            dayCurr: 0,
            dayTotal: 0,
            // timeCurr = time spent in current tier in milliseconds
            timeCurr: 62 * 60 * 60 * 1000 + 80 * 60 * 1000 + 5 * 1000,
            tierCurr: 1,
            tierTotal: 5,
            startDayCurrTier: 0,
            endDayCurrTier: 0,
            earningUntilNextTier: 0,
            // timeUntilNextTier = time until next tier in milliseconds
            timeUntilNextTier: 5 * 60 * 60 * 1000 + 80 * 60 * 1000 + 5 * 1000,
            codePromotion: "NIMA01",
            numPromotions: 2,
            numReferals: 0,
            expandScreen: true,
            expandableScreenHeight: height * 7/16,
            buttonTitle: 'Show more'
        }
    }

    setScreenHeight(){ 
        if (this.state.expandScreen){
            this.setState({ expandableScreenHeight: height * 3/5, buttonTitle: 'Show less' }); 
        } else {
            this.setState({ expandableScreenHeight: height * 7/16, buttonTitle: 'Show more' }); 
        }
        this.setState({ expandScreen: !this.state.expandScreen });
    }

    setButton(){
        if (this.state.expandScreen){
            return <ExpandScreenButton setScreenHeight={this.setScreenHeight.bind(this)}></ExpandScreenButton>
        }
        return <ReduceScreenButton setScreenHeight={this.setScreenHeight.bind(this)}></ReduceScreenButton>
    }

    formatToDetailedTime(timeMilli){
        hours = timeMilli / (60 * 60 * 1000);
        minutes = Math.ceil((timeMilli - Math.floor(hours) * 60 * 60 * 1000) / (60 * 1000));
        return(
            <View>
                <Text>{Math.floor(hours)}</Text>
                <Text>h </Text>
                <Text>{minutes}</Text>
                <Text>m</Text>
            </View>
        ) 
    }

    showDetails(){
        if (!this.state.expandScreen){
            return(
                <View style={{padding: 5, backgroundColor: 'black', flexDirection: 'row', justifyContent: 'space-around', width: width}}>
                    <View style={{backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center', width: width / 4}}>
                        <Text>Referals</Text>
                        <Text>{new Date().getFullYear()}</Text>
                        <Text>{this.state.numReferals}</Text>
                    </View>
                    <View style={{backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', width: width / 4}}>
                        <Text>Total Earnings</Text>
                        <Text>{new Date().getFullYear()}</Text>
                        <Text>${this.state.earningsTotal}</Text>
                    </View>
                </View>
            );
        }
    }

    render(){
        // TODO: Only render after all state variables are loaded 
        return (
            <View style={{backgroundColor: '#F9F9F9', height: height}}>
                <View style={{backgroundColor: 'yellow', height: this.state.expandableScreenHeight, flexDirection: 'column', alignItems: 'center'}}>
                    <View style={{marginTop: 25, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 22, fontWeight: 'bold'}}>Earnings</Text>
                        <View style={{marginTop: 5, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View style={{padding: 5, borderRightColor: 'tomato', borderRightWidth: 2, paddingRight: 10}}>
                                <Text style={{fontSize: 11, width: 100, textAlign: 'right', textTransform: 'uppercase'}}>Day {this.state.dayCurr} of {this.state.dayTotal}</Text>
                            </View>
                            <View style={{padding: 5, paddingLeft: 10}}>
                                <Text style={{fontSize: 11, width: 100, textAlign: 'left', textTransform: 'uppercase'}}>{this.state.startDayCurrTier}/18 - {this.state.endDayCurrTier}/18</Text>
                            </View>
                        </View>
                        <View style={{padding: 2, flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{fontSize: 35}}>$ </Text>
                            <Text style={{fontSize: 45, fontWeight: 'bold'}}>{this.state.earningsCurr}</Text>
                        </View>
                    </View>
                    <View style={{marginTop: 30, flexDirection: 'column', justifyContent: 'space-between', flex: 0.6}}>
                        <View style={{padding: 5, backgroundColor: 'black', flexDirection: 'row', justifyContent: 'space-around', width: width}}>
                            <View style={{backgroundColor: 'blue', alignItems: 'center', justifyContent: 'space-between', width: width / 4}}>
                                <Text style={{fontSize: 11, textTransform: 'uppercase'}}>Time Driven</Text>
                                {this.formatToDetailedTime(this.state.timeCurr)}
                                <View style={{flexDirection: 'row', alignItems: 'center', fontSize: 13}}>
                                    <Text>Tier </Text>
                                    <Text style={{fontWeight: 'bold'}}>{this.state.tierCurr} </Text>
                                    <Text>of </Text>
                                    <Text style={{fontWeight: 'bold'}}>{this.state.tierTotal}</Text>
                                </View>
                            </View>
                            <View style={{backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', width: width / 4}}>
                                <Text>Next Tier</Text>
                                <Text>${this.state.earningUntilNextTier}</Text>
                                <View>
                                    {this.formatToDetailedTime(this.state.timeUntilNextTier)}
                                     <Text>to go</Text>
                                </View>
                            </View>
                        </View>
                        {this.showDetails()}
                    </View>
                    {this.setButton()}
                </View>
                <View style={{padding: 20, marginTop: 10}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: '#313131', marginBottom: 10}}>Earn more</Text>
                    <View style={{flexDirection: 'row', marginBottom: 15}}>
                        <Text style={{fontSize: 14, color: '#313131'}}>Your promo code is: </Text>
                        <Text style={{color: '#5BCCF2', fontWeight: 'bold'}}>{this.state.codePromotion}</Text>
                    </View>
                    <CustomButton numPromotions={this.state.numPromotions} buttonText={"Promotions"} borderBottomWidth={0} borderTopRadius={4}/>
                    <CustomButton buttonText={"Invites"} borderBottomWidth={1} borderBottomRadius={4}/>
                </View>
            </View>
        );
    }
}




const styles = StyleSheet.create({});

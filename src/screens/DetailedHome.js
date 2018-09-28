import React, { Component } from 'react';
import { Text, StyleSheet, View, Button, Dimensions } from 'react-native';
import CustomButton from '../components/CustomButton';
import ExpandScreenButton from '../components/ExpandScreenButton';
import ReduceScreenButton from '../components/ReduceScreenButton';
const { height, width } = Dimensions.get('window');

export default class DetailedHome extends Component {
    // TODO: Factor this out somehow for all screens
    static navigationOptions = {
        title: 'FIREFLY'
    };

    constructor(props){
        super(props);

        this.state = {
            earningsCurr: 0,
            earningsTotal: 0,
            dayCurr: 0,
            dayTotal: 0,
            timeCurr: 0,
            tierCurr: 0,
            tierTotal: 0,
            startDayCurrTier: 0,
            endDayCurrTier: 0,
            earningUntilNextTier: 0,
            timeUntilNextTier: 0,
            codePromotion: '',
            numPromotions: '',
            numReferals: '',
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

    showDetails(){
        if (!this.state.expandScreen){
            return(
                <View style={{padding: 5, backgroundColor: 'black', flexDirection: 'row', justifyContent: 'space-around'}}>
                    <View style={{backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center'}}>
                        <Text>Time Driven</Text>
                        <Text>{this.state.timeCurr}h</Text>
                        <Text>Tier {this.state.tierCurr}</Text>
                    </View>
                    <View style={{backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
                        <Text>Earnings</Text>
                        <Text>Day {this.state.dayCurr} of {this.state.dayTotal}</Text>
                        <Text>${this.state.earningsCurr}</Text>
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
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Text>Earnings</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View style={{borderRightColor: 'tomato', borderRightWidth: 2, paddingRight: 10}}>
                                <Text style={{width: 100, textAlign: 'right'}}>Day {this.state.dayCurr} of {this.state.dayTotal}</Text>
                            </View>
                            <View style={{paddingLeft: 10}}>
                                <Text style={{width: 100, textAlign: 'left'}}>{this.state.startDayCurrTier}/18 - {this.state.endDayCurrTier}/18</Text>
                            </View>
                        </View>
                        <Text>${this.state.earningsCurr}</Text>
                    </View>
                    {this.showDetails()}
                    <View style={{padding: 5, backgroundColor: 'black', flexDirection: 'row', justifyContent: 'space-around'}}>
                        <View style={{backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center'}}>
                            <Text>Time Driven</Text>
                            <Text>{this.state.timeCurr}h</Text>
                            <Text>Tier {this.state.tierCurr}</Text>
                        </View>
                        <View style={{backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
                            <Text>Earnings</Text>
                            <Text>Day {this.state.dayCurr} of {this.state.dayTotal}</Text>
                            <Text>${this.state.earningsCurr}</Text>
                        </View>
                    </View>
                    {this.setButton()}
                </View>
                <View style={{padding: 20}}>
                    <Text style={{fontSize: 25, fontWeight: 'bold', color: '#313131', marginBottom: 10}}>Account</Text>
                    <CustomButton buttonText={"Driver Profile"} borderBottomWidth={0} borderTopRadius={4}/>
                    <CustomButton buttonText={"Checkup"} borderBottomWidth={1} borderBottomRadius={4}/>
                </View>
            </View>
        );
    }
}




const styles = StyleSheet.create({});

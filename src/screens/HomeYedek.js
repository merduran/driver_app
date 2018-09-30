import React, { Component } from 'react';
import { Easing, Animated, Text, StyleSheet, View, Button, Dimensions, LayoutAnimation } from 'react-native';
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
            expandableScreenHeight: new Animated.Value(height * 7/16),
            animatedOpacity: new Animated.Value(0),
            buttonTitle: 'Show more'
        }
    }

    setScreenHeight(){ 
        // Animation for 2nd Text:
        // Saga acilirken: 
        //  1) Border right 
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        if (this.state.expandScreen){
            this.setState({ buttonTitle: 'Show less' }); 
            Animated.parallel([
                Animated.timing(this.state.expandableScreenHeight, {
                    toValue: height * 58/100,
                    duration: 600,
                }),
                Animated.timing(this.state.animatedOpacity, {
                    toValue: 1,
                    delay: 100,
                    duration: 600,
                })
            ]).start();
            
        } else {
            this.setState({ buttonTitle: 'Show more' }); 
            Animated.parallel([
                Animated.timing(this.state.expandableScreenHeight, {
                    toValue: height * 7/16,
                    duration: 700,
                }),
                Animated.timing(this.state.animatedOpacity, {
                    toValue: 0,
                    duration: 400,
                })
            ]).start();
        }
        this.setState({ expandScreen: !this.state.expandScreen });

    }

    setButton(){
        if (this.state.expandScreen){
            return <ExpandScreenButton setScreenHeight={this.setScreenHeight.bind(this)}></ExpandScreenButton>
        }
        return <ReduceScreenButton setScreenHeight={this.setScreenHeight.bind(this)}></ReduceScreenButton>
    }

    formatToDetailedTime(timeMilli, fontSizeVals, fontSizeUnits, fontWeightVals, colorVals){
        hours = timeMilli / (60 * 60 * 1000);
        minutes = Math.ceil((timeMilli - Math.floor(hours) * 60 * 60 * 1000) / (60 * 1000));
        return(
            <View style={{flexDirection: 'row'}}>
                <Text style={{color: colorVals, fontWeight: fontWeightVals, lineHeight: fontSizeVals, fontSize: fontSizeVals}}>{Math.floor(hours)}</Text>
                <Text style={{lineHeight: fontSizeVals, fontSize: fontSizeUnits}}>h </Text>
                <Text style={{color: colorVals, fontWeight: fontWeightVals, lineHeight: fontSizeVals, fontSize: fontSizeVals}}>{minutes}</Text>
                <Text style={{lineHeight: fontSizeVals, fontSize: fontSizeUnits}}>m</Text>
            </View>
        ); 
    }

    showDetails(){
        // if (!this.state.expandScreen){
            return(
                <Animated.View style={{opacity: this.state.animatedOpacity, padding: 5, flexDirection: 'row', justifyContent: 'space-around', width: width, marginTop: 20}}>
                    <View style={{alignItems: 'center', justifyContent: 'center', width: width/3, height: height/9}}>
                        <Text style={{fontSize: 11, textTransform: 'uppercase', fontWeight: 'bold'}}>Referals</Text>
                        <Text style={{fontSize: 11, textTransform: 'uppercase'}}>{new Date().getFullYear()}</Text>
                        <Text style={{fontSize: 30}}>{this.state.numReferals}</Text>
                    </View>
                    <View style={{alignItems: 'center', justifyContent: 'center', width: width/3, height: height/9}}>
                        <Text style={{fontSize: 11, textTransform: 'uppercase', fontWeight: 'bold'}}>Total Earnings</Text>
                        <Text style={{fontSize: 11, textTransform: 'uppercase'}}>{new Date().getFullYear()}</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{fontSize: 25}}>$</Text>
                            <Text style={{fontSize: 30}}>{this.state.earningsTotal}</Text>
                        </View>
                    </View>
                </Animated.View>
            );
        // }
    }

    displaySchedule(){
        if (!this.state.expandScreen) {
            return( 
                <View style={{backgroundColor: 'red', marginTop: 5, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{padding: 5, paddingRight: 10}}>
                        <Text style={{fontSize: 11, width: 100, textAlign: 'right', textTransform: 'uppercase'}}>Day {this.state.dayCurr} of {this.state.dayTotal}</Text>
                    </View>
                    <View style={{padding: 5, paddingLeft: 10, borderLeftColor: 'tomato', borderLeftWidth: 2, }}>
                        <Text style={{fontSize: 11, width: 100, textAlign: 'left', textTransform: 'uppercase'}}>{this.state.startDayCurrTier}/18 - {this.state.endDayCurrTier}/18</Text>
                    </View>
                </View>
            );
        }
        return(
            <View style={{backgroundColor: 'red', marginTop: 5, padding: 5, paddingRight: 10}}>
                <Text style={{fontSize: 11, width: 100, textAlign: 'center', textTransform: 'uppercase'}}>Day {this.state.dayCurr} of {this.state.dayTotal}</Text>
            </View>
        );
    }

    render(){
        // TODO: Only render after all state variables are loaded 
        return (
            <View style={{backgroundColor: '#F9F9F9', height: height}}>
                <Animated.View style={{backgroundColor: '#FFFFFF', height: this.state.expandableScreenHeight, flexDirection: 'column', alignItems: 'center'}}>
                    <View style={{marginTop: 35, alignItems: 'center', justifyContent: 'center'}}>
                        <View>
                            <Text style={{fontSize: 22, fontWeight: 'bold'}}>Earnings</Text>
                        </View>        
                        {this.displaySchedule()}
                        <View style={{padding: 2, flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{fontSize: 30}}>$ </Text>
                            <Text style={{fontSize: 50, fontWeight: 'bold'}}>{this.state.earningsCurr}</Text>
                        </View>
                    </View>
                    <View style={{marginTop: 30, flexDirection: 'column', justifyContent: 'space-between', flex: 0.6}}>
                        <View style={{padding: 5, flexDirection: 'row', justifyContent: 'space-around', width: width}}>
                            <View style={{alignItems: 'center', justifyContent: 'space-around', width: width/3, height: height/9}}>
                                <Text style={{fontSize: 11, textTransform: 'uppercase', marginBottom: 5, fontWeight: 'bold'}}>Time Driven</Text>
                                {this.formatToDetailedTime(this.state.timeCurr, 30, 20)}
                                <View style={{flexDirection: 'row', alignItems: 'center', fontSize: 13}}>
                                    <Text>Tier </Text>
                                    <Text style={{fontWeight: 'bold'}}>{this.state.tierCurr} </Text>
                                    <Text>of </Text>
                                    <Text style={{fontWeight: 'bold'}}>{this.state.tierTotal}</Text>
                                </View>
                            </View>
                            <View style={{backgroundColor: 'white', alignItems: 'center', justifyContent: 'space-around', width: width/3, height: height/9}}>
                                <Text style={{fontSize: 11, textTransform: 'uppercase', fontWeight: 'bold'}}>Next Tier</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{fontSize: 25}}>$</Text>
                                    <Text style={{fontSize: 30}}>{this.state.earningUntilNextTier}</Text>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    {this.formatToDetailedTime(this.state.timeUntilNextTier, 13, 13, 'bold', 'tomato')}
                                    <Text style={{fontSize: 13, lineHeight: 13}}> to go</Text>
                                </View>
                            </View>
                        </View>
                        {this.showDetails()}
                    </View>
                    {this.setButton()}
                </Animated.View>
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

import React, { Component } from 'react';
import { Easing, Animated, Text, StyleSheet, View, Button, Dimensions, LayoutAnimation } from 'react-native';
import CustomButton from '../components/CustomButton';
import ExpandScreenButton from '../components/ExpandScreenButton';
import ReduceScreenButton from '../components/ReduceScreenButton';
import ReferalsAndTotalEarningsView from '../components/ReferalsAndTotalEarningsView';
import DayXOfYSchedule from '../components/DayXOfYSchedule';
import EarningsInDollars from '../components/EarningsInDollars';

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
            earningUntilNextTier: 100,
            // timeUntilNextTier = time until next tier in milliseconds
            timeUntilNextTier: 5 * 60 * 60 * 1000 + 80 * 60 * 1000 + 5 * 1000,
            codePromotion: "NIMA01",
            numPromotions: 2,
            numReferals: 0,
            expandScreen: true,
            expandableScreenHeight: new Animated.Value(height * 7/16),
            buttonTitle: ''
        }
    }

    dislayDetailedHomePage(){ 
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        if (this.state.expandScreen) { buttonTitle  = 'Show less'; expandableScreenHeight = height * 0.58 }
        else { buttonTitle = 'Show more'; expandableScreenHeight = height * 7/16 }         
        this.setState({ 
            expandScreen: !this.state.expandScreen,
            expandableScreenHeight: expandableScreenHeight,
            buttonTitle: buttonTitle
        });
    }

    displayExpandOrReduceScreenButton(){
        if (this.state.expandScreen){ 
            return (
                <ExpandScreenButton 
                    dislayDetailedHomePage={this.dislayDetailedHomePage.bind(this)}>
                </ExpandScreenButton>
            ); 
        }
        return (
            <ReduceScreenButton 
                dislayDetailedHomePage={this.dislayDetailedHomePage.bind(this)}>
            </ReduceScreenButton>
        ); 
    }

    displayDrivingTime(
        time, 
        fontSizeVals, 
        fontSizeUnits, 
        fontWeightVals, 
        colorVals, 
        colorUnits
    ){
        hoursInMilliSecs = 60 * 60 * 1000;
        minutesInMilliSecs = hoursInMilliSecs / 60;
        hours = time / hoursInMilliSecs;
        flooredHours = Math.floor(hours);
        const stylesTime = StyleSheet.create({
            valsText: {
                color: colorVals, 
                fontSize: fontSizeVals,
                fontWeight: fontWeightVals, 
                lineHeight: fontSizeVals, 
            }, 
            unitsText: {
                color: colorUnits, 
                fontSize: fontSizeUnits,
                lineHeight: fontSizeVals, 
            }
        });
        if (this.state.expandScreen){
            hours = flooredHours < hours ? flooredHours + 1 : flooredHours;
            return (
                <View style={styles.drivingTimeContainer}>
                    <Text style={stylesTime.valsText}>{hours}</Text>
                    <Text style={stylesTime.unitsText}>h</Text>
                </View>
            );
        } 
        minutes = Math.ceil((time - flooredHours * hoursInMilliSecs) / hoursInMilliSecs);
        return (
            <View style={styles.drivingTimeContainer}>
                <Text style={stylesTime.valsText}>{flooredHours}</Text>
                <Text style={stylesTime.unitsText}>h </Text>
                <Text style={stylesTime.valsText}>{minutes}</Text>
                <Text style={stylesTime.unitsText}>m</Text>
            </View>
        ); 
    }

    displayReferalsAndTotalEarnings(){
        if (!this.state.expandScreen){
            return (
                <ReferalsAndTotalEarningsView 
                    numReferals={this.state.numReferals} 
                    earningsTotal={this.state.earningsTotal}
                />
            );
        }
    }

    displayDaySchedule(){
        year = new Date().getFullYear().toString().slice(-2);
        dayXofYText = 'day ' + this.state.dayCurr + ' of ' + this.state.dayTotal;
        dayXofYNumber = this.state.startDayCurrTier + "/" + year + " - " + this.state.endDayCurrTier + "/" + year;
        if (!this.state.expandScreen) {
            year = new Date().getFullYear().toString().slice(-2);
            return ( 
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <DayXOfYSchedule 
                        marginTop={10} 
                        textAlign={'right'}
                        text={dayXofYText}
                        paddingRight={10}
                    />
                    <DayXOfYSchedule 
                        marginTop={10} 
                        textAlign={'left'}
                        text={dayXofYNumber}
                        paddingLeft={10}
                        borderLeftWidth={1}
                        borderColor={'tomato'}
                    />
                </View>
            );
        }
        return (
            <DayXOfYSchedule 
                marginTop={10} 
                textAlign={'center'}
                text={dayXofYText}
            />
        );
    }

    displayTierSchedule(){
        if (this.state.expandScreen){
            return (
                <View style={styles.tierScheduleContainer}>
                    <Text style={styles.tierText}>Tier </Text>
                    <Text style={{color: '#9A9A9A', fontWeight: 'bold'}}>{this.state.tierCurr}</Text>
                </View>
            );
        }
        return (
            <View style={{flexDirection: 'row', alignItems: 'center', fontSize: 13}}>
                <Text style={styles.tierText}>Tier </Text>
                <Text style={{color: '#9A9A9A', fontWeight: 'bold'}}>{this.state.tierCurr} </Text>
                <Text style={styles.tierText}>of </Text>
                <Text style={{color: '#9A9A9A', fontWeight: 'bold'}}>{this.state.tierTotal}</Text>
            </View>
        );
    }

    render(){
        // TODO: Only render after all state variables are loaded 
        return (
            <View style={styles.screen}>
                <View style={[styles.expandableScreen, { height: this.state.expandableScreenHeight }]}>
                    <View style={styles.currEarningsContainer}>
                        <View><Text style={styles.currEarningsHeader}>Earnings</Text></View>
                        {this.displayDaySchedule()}
                        <EarningsInDollars
                            quantity={this.state.earningsCurr}
                            padding={4}
                            color={'#4F4F4F'}
                            dollarSignFontSize={30}
                            quantityFontSize={50}
                            quantityFontWeight={'bold'}
                        />
                    </View>
                    <View style={{marginTop: 30, justifyContent: 'space-between', flex: 0.6}}>
                        <View style={{padding: 5, flexDirection: 'row', justifyContent: 'space-around', width: width}}>
                            <View style={styles.infoContainer}>
                                <Text style={styles.timeDrivenAndNextTierSubHeaders}>Time Driven</Text>
                                {
                                    this.displayDrivingTime(
                                        this.state.timeCurr, 
                                        30, 
                                        20, 
                                        'normal', 
                                        '#535353', 
                                        '#4F4F4F'
                                    )
                                }
                                {this.displayTierSchedule()}
                            </View>
                            <View style={styles.infoContainer}>
                                <Text style={styles.timeDrivenAndNextTierSubHeaders}>Next Tier</Text>
                                <EarningsInDollars
                                    quantity={this.state.earningUntilNextTier}
                                    color={'#535353'}
                                    dollarSignFontSize={25}
                                    quantityFontSize={30}
                                />
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    {
                                        this.displayDrivingTime(
                                            this.state.timeUntilNextTier, 
                                            15, 
                                            13, 
                                            'bold', 
                                            'tomato', 
                                            '#B4B4B4'
                                        )
                                    }
                                    <Text style={styles.tierText}> to go</Text>
                                </View>
                            </View>
                        </View>
                        {this.displayReferalsAndTotalEarnings()}
                    </View>
                    {this.displayExpandOrReduceScreenButton()}
                </View>
                <View style={styles.promoFormContainer}>
                    <Text style={styles.promoFormHeader}>Earn more</Text>
                    <View style={{flexDirection: 'row', marginBottom: 15}}>
                        <Text style={styles.promoFormSubHeader}>Your promo code is: </Text>
                        <Text style={styles.promoCode}>{this.state.codePromotion}</Text>
                    </View>
                    <CustomButton numPromotions={this.state.numPromotions} buttonText={"Promotions"} borderBottomWidth={0} borderTopRadius={4}/>
                    <CustomButton buttonText={"Invites"} borderBottomWidth={1} borderBottomRadius={4}/>
                </View>
            </View>
        );
    }
}




const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#F9F9F9', 
        height: height
    },
    expandableScreen: {
        backgroundColor: '#FFFFFF', 
        alignItems: 'center'
    },
    currEarningsContainer: {
        marginTop: 35, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    currEarningsHeader: {
        color: "#4F4F4F", 
        fontSize: 22, 
        fontWeight: 'bold'
    },
    drivingTimeContainer: {
        flexDirection: 'row'
    },
    timeDrivenAndNextTierSubHeaders: {
        fontSize: 11, 
        textTransform: 'uppercase', 
        fontWeight: 'bold', 
        color: '#B4B4B4'
    },
    infoContainer: {
        alignItems: 'center', 
        justifyContent: 'space-around', 
        width: width/3, 
        height: height/9
    },
    promoFormContainer: {
        padding: 20, 
        marginTop: 10        
    },
    promoFormHeader: {
        fontSize: 20, 
        fontWeight: 'bold', 
        color: '#5A5A5A', 
        marginBottom: 10
    },
    promoFormSubHeader: {
        fontSize: 14, 
        color: '#959595'
    },
    promoCode: {
        color: '#5BCCF2', 
        fontWeight: 'bold'
    },
    tierScheduleContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
    }, 
    tierText: {
        fontSize: 13, 
        lineHeight: 15, 
        color: '#B4B4B4'
    }
});

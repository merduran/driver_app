import React from 'react';
import { Dimensions } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './screens/Home';
import Account from './screens/account_screens/Account';
import AccountCheckUp from './screens/account_screens/AccountCheckUp';
import AccountPayments from './screens/account_screens/AccountPayments';
import Help from './screens/help_screens/Help';
import HelpReportBug from './screens/help_screens/HelpReportBug';
import HelpSupportMessages from './screens/help_screens/HelpSupportMessages';
//  TODO:
//  1) Write this page more neatly.
const RootStack = createStackNavigator(
  {
    Home: Home,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const AccountStack = createStackNavigator(
  {
    Account: Account,
    AccountCheckUp: AccountCheckUp,
    AccountPayments: AccountPayments, 
  },
  {
    initialRouteName: 'Account',
    navigationOptions: {
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const HelpStack = createStackNavigator(
  {
    Help: Help,
    HelpReportBug: HelpReportBug,
    HelpSupportMessages: HelpSupportMessages
  },
  {
    initialRouteName: 'Help',
    navigationOptions: {
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const { height, width } = Dimensions.get('window');

export default createBottomTabNavigator(
  {
    Account: AccountStack,
    Home: RootStack,
    Help: HelpStack
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = "ios-home";
        } else if (routeName === 'Account') {
          iconName = "ios-contact";
        } else if (routeName === 'Help') {
          iconName = "ios-help-circle-outline";
        }
        return <Ionicons name={iconName} size={25} color={tintColor}/>;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);


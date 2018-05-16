//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native';

//Native Base Libs
import { Container, Content, Icon, Header, Left, Body, Right, Footer, Form, Item } from 'native-base';

//Tab Navigator
import { TabNavigator } from 'react-navigation';


//Import Screen
import HomeTab from '../views/HomeTab';
import SearchTab from '../views/SearchTab';
import AddMediaTab from '../views/AddMediaTab';
import NotificationTab from '../views/NotificationTab';
import ProfileTab from '../views/ProfileTab';
import { DIVEDER_COLOR } from '../utils/Color';

// console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
console.disableYellowBox = true;

// create a component   
class MainScreen extends Component {

    static navigationOptions = {
        drawerIcon: <Icon name='home' />,
    }
    render() {
        return (
            <CommonTabNavigation />
        );
    }
}

const CommonTabNavigation =
    TabNavigator(
        {
            HomeTab: {
                screen: HomeTab,
            },
            SearchTab: {
                screen: SearchTab
            },
            AddMediaTab: {
                screen: AddMediaTab
            },
            NotificationTab: {
                screen: NotificationTab
            },
            ProfileTab: {
                screen: ProfileTab
            }
        },
        {
            tabBarOptions: {
                upperCaseLabel: false,
                showIcon: true,
                showLabel: false,
                activeTintColor: '#000000',
                inactiveTintColor: '#C7C7C7',
                pressColor: '#FF4444',
                style: {
                    backgroundColor: '#FAFBFB',
                    borderTopColor: DIVEDER_COLOR,
                    borderTopWidth: 5,
                },
                indicatorStyle:
                    {
                        backgroundColor: 'transparent'
                    },
                // labelStyle: {
                //     fontSize: 14,
                //     color: "white",
                //     fontFamily: "kohinoor"
                // },
            },

            tabBarPosition: 'bottom',
            swipeEnabled: false,
            animationEnabled: false,
            lazy: true
        }
    )


// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//make this component available to the app
export default MainScreen;




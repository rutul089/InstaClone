//import liraries
import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import SplashScreen from '../views/SplashScreen';
import MainScreen from '../views/MainScreen';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { Container, Header, Body, Icon, Content } from 'native-base';
import { Image } from 'react-native'

class Route extends Component {
    render() {
        return (
            <CommonDrawerNavigation />
        );
    }
}

const CommonStackNavigator = StackNavigator({
    MainScreen: {
        screen: MainScreen
    },
    // SplashScreen: {
    //     screen: SplashScreen
    // }
});

const ComponentNavigationHeader = (props) => (
    <Container>
        <Header style={{ height: 200, backgroundColor: '#FFFFFF', alignContent: 'center', justifyContent: 'center', elevation: 0 }}>
            <Body>
                <Image source={require('../assets/images/android-image/icon_header_menu.png')} style={{ height: '80%', resizeMode: 'contain', backgroundColor: '#FFF' }} />
            </Body>
        </Header>
        <Content>
            <DrawerItems {...props} />
        </Content>
    </Container>
);

const CommonTabNavigator = TabNavigator({
    MainScreen: {
        screen: MainScreen
    },
    SplashScreen: {
        screen: SplashScreen
    }
});

const CommonDrawerNavigation = DrawerNavigator({
    MainScreen: {
        screen: MainScreen
    },
    SplashScreen: {
        screen: SplashScreen
    }
}, {
        initialRouteName: 'MainScreen',
        contentComponent: ComponentNavigationHeader,
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle'
    });


//make this component available to the app
// export default CommonDrawerNavigation;
// export default Route;
export default CommonStackNavigator;
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';


class SplashView extends Component {
    static navigationOptions = {
        drawerIcon: (
            <Icon name='home' />
        )
    }

    render() {
        return (
            <View>
                <Text onPress={() => console.log('====================================')}> Tab Navigator </Text>
            </View>
        );
    }
}


export default SplashView;
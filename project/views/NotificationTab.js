//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

// create a component
class NotificationTab extends Component {

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => {
            return <Icon name="heart" type='FontAwesome' style={{ color: tintColor }} />;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>NotificationTab</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FCFCFC',
    },
});

//make this component available to the app
export default NotificationTab;

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ImageBackground, LinearGradient } from 'react-native';
import { Icon, Content, Header, Left, Body, Right, Item, Container } from 'native-base';
import axios from 'axios';
import StoryItemView from './StoryItemView';

// create a component
class HomeTab extends Component {


    state = { results: [] };


    componentDidMount() {

        //AXIOS with UserData, Header
        //---Start
        //UserData
        const params = new URLSearchParams();
        params.append('grant_type', 'client_credentials');
        //Header
        let axiosConfig = {
            headers: {
                'Accept': 'application/json',
                'Accept-Language': 'en_US',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic QVpQNDlZNWk1ZmEteW5nZUgtQWM4WVZwZ1dkXzM3SnZ1UnhkN2lxOUdiYkVkcXBSZGE4Rk9hNC1OZWs3NzdmRzdWMFNDOExDMjg3SjZpZVc6RUJyaHRRVkpNMFd5YWxjbHVSZFJRVHRQaVVzNDlpMy1SYU9OcVJuZnE4OW1OV0hlaFU2Z211dTV0TlJsc0tPcEJxdDhQX3FHR3NMRTdxZnA='
            }
        };
        //Passing Userdata and Header using AXIOS
        axios.post('https://api.sandbox.paypal.com/v1/oauth2/token', params, axiosConfig)
            .then(response => {
                console.log("Data:\n\n--------------------Start\n\n" + JSON.stringify(response.data) + "\n\n----------------------End")
            });
        //---End

        axios.get('https://randomuser.me/api/?results=10')
            .then(response =>
                this.setState({
                    results: response.data.results
                })
            );
    }


    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => {
            return <Icon name="home" style={{ color: tintColor }} />;
        },
    }

    renderUserList() {
        return this.state.results.map(results => (<StoryItemView key={results.login.md5} results={results} />));
    }


    // render() {
    //     return (<Content>
    //         {this.renderUserList()}
    //     </Content>);
    // }

    render() {
        const mytextvar = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
        return (
            <Container>
                <Header style={styles.header}>
                    <Left>
                        <Icon name='camera' type='FontAwesome' style={{ fontSize: 23, }} />
                    </Left>
                    <Body style={styles.header_body} >
                        <Image
                            source={require('../assets/images/android-image/img-instagram-header-new.png')}
                            style={styles.header_body_title} />
                    </Body>
                    <Right>
                        <Icon name='send' type='FontAwesome' style={{ fontSize: 23, }} />
                    </Right>
                </Header>
                <Content>
                    <View style={{ paddingTop: 10, }}>
                        <View style={styles.container_stories}>
                            <Text style={styles.container_stories_tag}>Stories</Text>
                            <View style={styles.container_stories_watchall}>
                                <Icon name='play' style={{ fontSize: 20 }} />
                                <Text style={styles.container_stories_watchall_title}>Watch All</Text>
                            </View>
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', paddingTop: 15 }}>
                            {this.renderUserList()}
                        </ScrollView>
                    </View>
                </Content >
            </Container >
        );
    }


}

// define your styles
const styles = StyleSheet.create({
    header: {
        height: 48,
        backgroundColor: '#FBFBFB'
    },
    header_left: {},
    header_body: {
        paddingTop: 5,
        paddingBottom: 5,
        alignItems: 'flex-end',
    },
    header_body_title: {
        height: '100%',
        width: 100,
        resizeMode: 'contain',
    },
    header_right: {

    },
    container_stories: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    container_stories_tag: {
        fontWeight: 'bold',
        fontSize: 13,
        marginLeft: 13,
        color: '#000000',
    },
    container_stories_watchall: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
    },
    container_stories_watchall_title: {
        fontWeight: 'bold',
        fontSize: 13,
        color: '#000000',
        marginLeft: 2,
    },
    user_story: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 5,
        paddingRight: 5,
    },
    user_story_thumb: {
        borderRadius: 75,
        height: 70,
        width: 70,
        marginLeft: 10,
    },
    user_story_username: {
        flex: 1,
        color: '#000000',
        fontSize: 15,
        fontWeight: '400',
    }
});

//make this component available to the app
export default HomeTab;


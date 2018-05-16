//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducer';
import { Container, Header, Body, Content } from 'native-base';
import LibraryList from './components/LibraryList';

const App = () => {
    return (
        <Provider store={createStore(reducers)}>
            <Container>
                <Header>
                    <Body>
                        <Text>Redux Demo</Text>
                    </Body>
                </Header>
                <Content>
                    <LibraryList />
                </Content>
            </Container>
        </Provider>
    );
}

//make this component available to the app
export default App;

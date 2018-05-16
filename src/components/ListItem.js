import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import { Card, CardItem } from 'native-base';
import { connect } from 'react-redux';
import * as actions from "../actions";


class ListItem extends Component {

    componentDidUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        // if (this.props.library.id === this.props.selectedLibraryId) {
        if (this.props.expand) {
            console.log(this.props.library);
            return (
                <CardItem>
                <Text>{this.props.library.description}</Text>
                </CardItem>
            )
        }
    }

    render() {
        const { titleStyle } = style;
        const { id, title } = this.props.library;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardItem>
                        <Text
                            style={titleStyle}>
                            {title}
                        </Text>
                    </CardItem>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>

        );
    }
}

const style = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
    }
}

const mapStateToProps = (state, ownP) => {
    console.log("clicked...");
    const expand = state.selectedLibraryId === ownP.library.id;
    console.log(state);
    return { expand };
    // return { selectedLibraryId: state.selectedLibraryId }
}

export default connect(mapStateToProps, actions)(ListItem);
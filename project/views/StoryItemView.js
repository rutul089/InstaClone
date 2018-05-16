//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
const StoryItemView = (results) => {
    console.log("-----------------");
    console.log(results);
    const { picture, name } = results.results;
    const {large,medium,thumbnail} = picture;
    const {title,firstname,lastname} = name;
    const username = name.first + name.last;
    console.log(picture);
    
    return (
        <View style={styles.user_story}>
            <Image
                source={{ uri: large }}
                style={styles.user_story_thumb} />
            <Text style={styles.user_story_username}>{((username).length > 15) ?
                (((username).substring(0, 15 - 3)) + '...') :
                username}</Text>
        </View>
        /*<View style={styles.user_story}>
            <ImageBackground
                source={require('../assets/images/android-image/user1.jpg')}
                imageStyle={{ borderRadius: 75 }}
                style={{ height: 70, width: 70, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                <Icon name='add-circle' style={{ color: '#3897F0' }} />
            </ImageBackground>
            <Text style={styles.user_story_username}>SteveJobs</Text>
            </View>*/
    );
}

// define your styles
const styles = StyleSheet.create({
    user_story: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 5,
        paddingRight: 5
    },
    user_story_thumb: {
        borderRadius: 75,
        height: 70,
        width: 70,
        marginLeft: 10
    },
    user_story_username: {
        flex: 1,
        color: '#000000',
        fontSize: 15,
        fontWeight: '400'
    }
});

//make this component available to the app
export default StoryItemView;

import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Button} from 'react-native-elements'
import { Card, ListItem } from 'react-native-elements'

export default class Story extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
            Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
            To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
            Double tap R on your keyboard to reload,{'\n'}
            Shake or press menu button for dev menu
        </Text>
        <Button raised icon={{
            name: 'cached'
        }} title='RAISED WITH ICON' />
      <ScrollView horizontal={true}>
        <Card title='Option 1' containerStyle={styles.card}>
          <Text>
            Hello! This is a line. It will get longer and longer hehe.
            The idea is that I will put a container for this card view as a scrollable list!
          </Text>
        </Card>
        <Card title='Option 1' containerStyle={styles.card}>
          <Text>
            Hello! This is a line. It will get longer and longer hehe.
            The idea is that I will put a container for this card view as a scrollable list!
          </Text>
        </Card>
      </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    },
    card: {
      flex: 1,
      maxWidth: 450
    }
});

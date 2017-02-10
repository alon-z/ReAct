import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Button} from 'react-native-elements'
import { Card, ListItem } from 'react-native-elements'

export default class Story extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
            This is the screen where im going to show you options.
        </Text>
        <Text style={styles.instructions}>
            Options....
        </Text>
        <Text style={styles.instructions}>
            Just select one and will go for it!!
        </Text>
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

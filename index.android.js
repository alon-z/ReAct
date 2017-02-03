/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import {Tabs, Tab, Icon} from 'react-native-elements'
import Main from './app/Main'

export default class ReAct extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Main />
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9BBBC8'
    }
});

AppRegistry.registerComponent('ReAct', () => ReAct);

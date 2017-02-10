/* @flow */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Alert, ActivityIndicator, ListView, ScrollView} from 'react-native';
import {Card, Button} from 'react-native-elements'

export default class Store extends Component {
  constructor() {
      super();
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {};
      fetchStories(global.server).then((responseJson) => {
        this.setState({stories: ds.cloneWithRows(responseJson)});
      });
  }

  render() {
    return (
      <View>
        {
          (this.state.stories) ?
          <ScrollView>
            <ListView
          dataSource={this.state.stories}
          renderRow={(rowData) =>
            <Card
              title={rowData.name}>
              <Text style={{marginBottom: 10}}>
                {rowData.description}
              </Text>
              <Button
                icon={{name: 'code'}}
                backgroundColor='#03A9F4'
                fontFamily='Lato'
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='LOAD NOW!'
                disabled={(rowData.location == "") ? true : false} />
            </Card>
      }
        />
          </ScrollView>
          : <ActivityIndicator/>
        }
      </View>
    )
  }
}

/* Logic */
function fetchStories(server) {
  return fetch('http://'+server+'/stories/list').then((response) => {
    return response.json()
  });
}

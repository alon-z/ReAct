import React, {
    Component
} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import {Tabs, Tab, Icon} from 'react-native-elements'
import Store from './Store'
import Story from './Story'

export default class Main extends Component {
  constructor() {
      super();
      this.state = {
          selectedTab: 'story'
      }
      global.server = "10.0.0.10:8080";
  }

  changeTab(selectedTab) {
      this.setState({selectedTab})
  }

  render() {
    var { selectedTab } = this.state;
    return (
      <View style={styles.container}>
        <Tabs>
          <Tab
            titleStyle={{fontWeight: 'bold', fontSize: 10}}
            selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
            selected={selectedTab === 'story'}
            title={selectedTab === 'story' ? 'STORY' : null}
            renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='book' size={33} />}
            renderSelectedIcon={() => <Icon color={'#6296f9'} name='book' size={30} />}
            onPress={() => this.changeTab('story')}>
            <Story />
          </Tab>
          <Tab
            titleStyle={{fontWeight: 'bold', fontSize: 10}}
            selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
            selected={selectedTab === 'store'}
            title={selectedTab === 'store' ? 'STORE' : null}
            renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='whatshot' size={33} />}
            renderSelectedIcon={() => <Icon color={'#6296f9'} name='whatshot' size={30} />}
            onPress={() => this.changeTab('store')}>
            <Store />
          </Tab>
        </Tabs>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

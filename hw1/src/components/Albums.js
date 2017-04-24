import React, { Component } from 'react';
import { ScrollView ,View ,Text} from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';

import albums from '../json/albums.json';

// Make a component
class Albums extends Component {
  state = { albums: [] };

  componentWillMount() {
    this.setState({ albums });
  }

  goToPageTwo = (album) => {
    this.props.navigation.navigate('Details', { ...album });
  };

  render() {
    const{Tabs_All, Tabs_Icon,Tabs_IconOn, Tabs_Text,Tabs_TextOn} = style
    return (
      <View>

        <View>
          <View style = {[Tabs_All]}>
            <View style = {[Tabs_Icon,Tabs_IconOn]}>
              <Text style = {[Tabs_Text, Tabs_TextOn]}>全校公告</Text>
            </View>
            <View style = {[Tabs_Icon]}>
              <Text style = {[Tabs_Text]}>系上快報</Text>
            </View>
            <View style = {[Tabs_Icon]}>
              <Text style = {[Tabs_Text]}>實習快訊</Text>
            </View>
            <View style = {[Tabs_Icon]}>
              <Text style = {[Tabs_Text]}>比賽消息</Text>
            </View>
          </View>
        </View>

      <ScrollView>
        <List>
          {this.state.albums.map((album) => (
            <ListItem
              key={album.title}
              //roundAvatar
              avatar={{ uri: album.image }}
              title={album.title}
              subtitle={album.artist}
              onPress={() => this.goToPageTwo(album)}
              hideChevron
              rightTitle='更多...'
            />
          ))}
        </List>
      </ScrollView>
      </View>
    );
  }
}

const style ={
  Tabs_All:{
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  Tabs_Icon:{
    flex: 1,
    justifyContent: 'center',
  },

  Tabs_IconOn:{
    backgroundColor: 'dodgerblue',
  },

  Tabs_Text:{
    alignSelf: 'center',
    color: 'rgb(187,187,187)',
    fontSize: 16,
  },

  Tabs_TextOn:{
    fontWeight: 'bold',
    color: 'black',
  },
};


export default Albums;

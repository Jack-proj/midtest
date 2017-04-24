import React from 'react';
import { ScrollView, Linking, View } from 'react-native';
import { Button, Card, Text, PricingCard, Tile,Icon } from 'react-native-elements';

// Make a component
const Details = (props) => {
  const { title, 
          artist,
          category,
          times,
          reads,
          price,
          url,
          image,
          mainView,
          descriptions_1,
          descriptions_2
  } = props.navigation.state.params;

  const { boldFont,Main_Title,Article,line,info_All,info_Line,info_count,icon_size
          ,otherlink_all,otherlink_Title,otherlink_Hot,otherlink_info,otherlink_gray,otherlink_white} = styles;

  return (
    <ScrollView>

      <Tile
        imageSrc={{ uri: mainView }}
        featured
        //title={title.toUpperCase()}
        //caption={artist.toUpperCase()}
      />

      <Text style={Main_Title}>{title}</Text>
      <View style = {[info_All]}>
        <View style = {[info_Line]}>
          <Icon name='local-offer' size={20} color={'dimgray'}/>
          <Text style = {[info_count]}>{category}</Text>
        </View>
        <View style = {[info_Line]}>
          <Icon name='access-time' size={20} color={'dimgray'}/>
          <Text style = {[info_count]}>{times}</Text>
        </View>
        <View style = {[info_Line]}>
          <Icon name='remove-red-eye' size={20} color={'dimgray'}/>
          <Text style = {[info_count]}>{reads}</Text>
        </View>
      </View>

      <View style = {[line]}></View>
      <Text style={Article}>{descriptions_1}</Text>
      <Text style={Article}>{descriptions_2}</Text>

      <View style = {[line]}></View>
        <View style = {[otherlink_Title]}>
          <Text style = {[otherlink_Hot]}>其他熱門消息連結：</Text>
        </View>
        <View style = {[otherlink_gray]}>
          <Text style = {[otherlink_info]}>學生二宿終於有熱水了！</Text>
        </View>
        <View style = {[otherlink_white]}>
          <Text style = {[otherlink_info]}>專案終於開起來了！</Text>
        </View>
        <View style = {[otherlink_gray]}>
          <Text style = {[otherlink_info]}>在建工程進度表</Text>
        </View>
        <View style = {[otherlink_white]}>
          <Text style = {[otherlink_info]}>2017第四屆校園創業競賽開跑囉～～</Text>
        </View>
        <View style = {[otherlink_gray]}>
          <Text style = {[otherlink_info]}>自己的APP自己做！APP設計工作坊來囉！</Text>
        </View>



    </ScrollView>
  );
};

const styles = {
  boldFont: {
    fontWeight: 'bold'
  },

  Main_Title:{
    fontWeight: 'bold',
    fontSize: 26,
    textAlign: 'left',
    marginTop: 10,
  },

  Article:{
    fontSize:16,
    marginTop: 15,
    textAlign: 'left',
    marginBottom: 5,
  },

  line:{
    width: 375,
    height: 1,
    marginTop: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },

  info_All:{
    width: 375,
    height: 25,
    marginTop: 5,
    flexDirection: 'row',
    
  },

  info_Line:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  info_count:{
    flex: 1,
    flexDirection: 'row',
    paddingTop: 5,
    textAlign: 'left',
    fontSize: 10,
    color: 'dimgray',
  },

  otherlink_all:{
    flex:1,
    flexDirection: 'row',
    width:375,

  },

  otherlink_Title:{
    width: 375,
    height: 40,
    marginTop: 15,
  },

  otherlink_Hot:{
    fontSize: 26,
    fontWeight: 'bold',
  },

  otherlink_info:{
    fontSize:16,
    textAlign: 'left',
    paddingTop: 5,
  },

  otherlink_white:{
    backgroundColor: 'white',
    width:375,
    height:30,
    flex: 1,
  },

  otherlink_gray:{
    backgroundColor: 'silver',
    width:375,
    height:30,
    flex: 1,
  },
};


export default Details;

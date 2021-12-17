import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from "react-native-vector-icons/Ionicons";
let customFonts = {
  'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
};

export default class StoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.cardcontainer}>
            <Image
              source={require('../assets/story_image_1.png')}
              style={styles.image}
            />

            <View style={styles.titlecontainer}>
              <Text style={styles.title}>{this.props.story.title}</Text>
              <Text style={styles.author}>{this.props.story.author}</Text>
              <Text style={styles.description}>
                {this.props.story.description}
              </Text>
            </View>

          <View style={styles.actioncontainer}>
          <View style={styles.likebutton}>
          <Ionicons name = {"heart"} size= {RFValue(30)} color = {'white'}/>
          <Text style={styles.liketext}>10k</Text>
          </View>
          </View>   
           


          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  cardcontainer: {
    backgroundColor: '#2f345d',
    borderRadius: RFValue(20),
    margin: RFValue(10),
  },

  image: {
    resizeMode: 'contain',
    width: '95%',
    height: RFValue(250),
    alignSelf: 'center',
  },

  titlecontainer: {
    paddingLeft: RFValue(20),
    justifyContent: 'center',
  },

  title: {
    color: 'white',
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(25),
  },

author: {
    color: 'white',
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(18),
  },

  description: {
    color: 'white',
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(15),
  },

liketext: {
    color: 'white',
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(25),
    marginLeft: RFValue(5)
  },


  actioncontainer:{
    justifyContent:"center",
    alignItems : "center",
    padding : RFValue(10)
  },
likebutton:{
  backgroundColor : "#eb3948",
  flexDirection : "row",
  width:RFValue(150),
  height : RFValue(40),
  justifyContent:"center",
    alignItems : "center",
    borderRadius:RFValue(30)
}


});

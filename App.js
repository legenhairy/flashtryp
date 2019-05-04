import React, { Component } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import FeedHeader from './components/FeedHeader';
import SearchField from './components/SearchField';
import ScrollFeed from './components/ScrollFeed';
import PageBar from './components/PageBar';
import { sites } from './sites';
import {createStackNavigator, createAppContainer } from 'react-navigation';

export default class App extends Component {
  /*include the array of posts here, so we can pass them down as props when user sets tags, etc.*/
  constructor(){
    super();
    
    this.state = {
      sites: sites,
      searchText: '',
      clipboardText: null
    }
  }  

  /*the search text will be passed to the ScrollFeed component and then rendered based on that*/
  handleSearchText = (typedText) => {
    this.setState({searchText: typedText});
  }

/*planned to use the ClipBoard api to grab the website string when share button is clicked*/  
/*readWebsiteFromClipBoard = async () => {
    const clipboardText = await Clipboard.getString();
    this.setState({ clipboardText });
}*/



/*if we have a typed keyword, we want to filter the array data(sites) into only the ones that contain that word*/
/*then we return a new array which will be rendered in our ScrollFeed component*/  
  render() {
    const filteredSites = this.state.sites.filter(sites => {
      return sites.title.toLowerCase().includes(this.state.searchText.toLowerCase())
    })

    return (
      <View style={{ flex: 1}}>
        <FeedHeader/>
        <SearchField handleSearchText={this.handleSearchText}/>
        <ScrollFeed sites={filteredSites}/> 
        <PageBar/>
      </View>
    );
  }
}






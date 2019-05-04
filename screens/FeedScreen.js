import React, { Component } from 'react';
import { Button, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import FeedHeader from './components/FeedHeader';
import SearchField from './components/SearchField';
import ScrollFeed from './components/ScrollFeed';
import PageBar from './components/PageBar';
import { sites } from './sites';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Go to MoreInfo"
        onPress={() => navigate('MoreInfo')}
      />
      
    );
  }
}
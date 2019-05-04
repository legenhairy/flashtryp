import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

/*the footer which contains the 4 icons at bottom of screen*/
class PageBar extends Component {
	render() {
	  return (
	  	<View style={styles.BarContainer}>
	  		<TouchableOpacity>
	  			<Image source={require('../img/microphone.png')}/>
	  		</TouchableOpacity>
	  		
	  		<TouchableOpacity>
	  			<Image source={require('../img/lightning-bolt.png')}/>
	  		</TouchableOpacity>
	  		
	  		<TouchableOpacity>
	  			<Image source={require('../img/heart-like.png')}/>
	  		</TouchableOpacity>
	  		
	  		<TouchableOpacity>
	  			<Image source={require('../img/calendar.png')}/>
	  		</TouchableOpacity>
	  	</View>
	  );	
	}
}

const styles = StyleSheet.create({
	BarContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	}
})

export default PageBar;
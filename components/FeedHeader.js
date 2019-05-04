import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class FeedHeader extends Component {

	render() {
		return (
			<View style={styles.container}>
				<Image style={styles.NavImage} source={require('../img/menu-button.png')} />
				<Text style={styles.Title}>FlashTryp</Text>
				<Image style={styles.Globe} source={require('../img/globe.png')} />
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: 50,
		height: 100,
		backgroundColor: '#1EAAF1',
	},
	Title: {
		alignSelf: 'center',
		fontSize: 20
	},
	NavImage: {
		alignSelf: 'flex-start'
	},
	Globe: {
		alignSelf: 'flex-end'
	}

});

export default FeedHeader;
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


class LikeBar extends Component {

	render() {
		return (
		  <View style={styles.likeBar}>
			<Text>{this.props.likes} Likes</Text>
			<TouchableOpacity>
				<Image style={styles.icon} source={require('../img/heart-like.png')}/>
			</TouchableOpacity>
			<TouchableOpacity>	
				<Image style={styles.icon} source={require('../img/share-icon.png')}/>
	 	  	</TouchableOpacity>
	 	  </View>
		);
	}

}

const styles = StyleSheet.create({
	likeBar: {
		width: 100 + "%",
		flexDirection: "row",
		alignItems: "center", 
		backgroundColor: 'red',
		paddingTop: 5,
		paddingBottom: 15
	},
	icon: {
		paddingHorizontal: 10,
		paddingBottom: 10,
		width: 60,
		height: 60
	}

});

export default LikeBar;
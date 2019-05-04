import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

class PostHeader extends Component {
	/*this component takes care of the free/paid icon, the site title as well as the tags*/
	render() {
		/*pass in the array of tags and list them out*/
		var tagsList = this.props.tags;
		return (
		  <View style={styles.SiteHeader}>
		    <View style={styles.SiteIcon}>
		      
		    </View>
		  	<View style={styles.SiteInfo}>  
		      <TouchableOpacity>
		      	<Text style={styles.PostTitle}>{this.props.title}</Text>
		      </TouchableOpacity>
		      { tagsList.map((item, key)=>(
         		  <Text key={key} style={styles.TextStyle}> { item } </Text>)
         	  )}
		    </View>
		  </View>
		);
	}
}

const styles = StyleSheet.create({
	SiteHeader: {
		flexDirection: 'row',
		paddingLeft: 8,
		paddingRight: 8,
		paddingTop: 5
	},
	SiteIcon: {
		width: 100,
		height: 100,
		borderRadius: 50,
		backgroundColor: 'black'
	},
	SiteInfo: {
		justifyContent: 'center'
	},
	PostTitle: {
		paddingBottom: 5,
		fontSize: 15
	},
	TextStyle: {
		flexDirection: 'row'
	}
});

export default PostHeader;
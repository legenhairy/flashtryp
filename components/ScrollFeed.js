import React, { Component } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import PostHeader from '../components/PostHeader';
import LikeBar from '../components/LikeBar';

class ScrollFeed extends Component {
	
	/*for each object in the array of sites, render a set of components including title, description, image and share box*/
	/*when site title is touched, we redirect to a "more info" page*/
	render() {
		const {sites} = this.props;
		return (
			<View style={{flex: 1}}>
				<FlatList 
				data={sites}
				renderItem = {({item}) => (
					<View>
						<PostHeader title={item.title} tags={item.tags}/>
						<TouchableOpacity style={styles.ImageContainer}>
          					<Image style={styles.ImageContent} source={item.imageUrl} />
         				</TouchableOpacity>
						<LikeBar likes={item.likes}/>
					</View>
				)}
				keyExtractor={(item, index) => index.toString()}
				/>	
			</View>
		);
	}

}

const styles = StyleSheet.create({
	ImageContainer: {
		justifyContent: 'center', 
		alignItems: 'center',

	},
	ImageContent: {
		width: 410,
		height: 290
	}
	
});

export default ScrollFeed;
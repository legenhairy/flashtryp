import React, { Component } from 'react';
import { View, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

class SearchField extends Component {

	/*we should be able to tap the filter icon and then*/
	render() {
		return(
			<View style={styles.searchbox}>
				<TextInput style={styles.textinput} 
				placeholder="Search" onChangeText={this.props.handleSearchText}/>
				<TouchableOpacity style={styles.FilterArea}>
					<Image source={require('../img/filter.png')}/>
				</TouchableOpacity>
			</View>
		);
	}


}

const styles = StyleSheet.create({
	searchbox: {
		flexDirection: 'row',
		height: '7%',
		paddingTop: 5,
		paddingLeft: 5,
		paddingBottom: 5
	},
	textinput: {
		borderTopColor: '#000000',
		borderBottomColor: '#000000',
		borderTopWidth: 1,
		borderLeftWidth: 1,
		borderRightWidth: 1,
		borderBottomWidth: 1,
		width: '80%',
	},
	FilterArea: {
		paddingLeft: 20,
		paddingBottom: 10
	},
	
});

export default SearchField;
import React, { Component } from 'react';
import { 
	View, 
	Text, 
	AsyncStorage,
	StyleSheet 
} from 'react-native';

export default class List extends Component {

	constructor() {
		super();
		this.state = {
			list: ''
		}
		try {
			AsyncStorage.getItem('database_form').then((value) => {
				this.setState({
					list: value
				})
			})
		} catch (err) {
			console.log(err)
		}
	}

	render() {
		const data = JSON.stringify(this.state.list)
		return(
			<View style={styles.container}>
				<Text>{data}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 80
	}
})
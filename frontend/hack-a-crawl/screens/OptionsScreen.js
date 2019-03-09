import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Button } from 'react-native';

export default class OptionsScreen extends Component {
	static navigationOptions = {
		header: null,
  };
	
  render() {
    const {navigate} = this.props.navigation;
    return (
			<View style={styles.container}>
				<View style={styles.buttonsContainer}>
					<View style={styles.buttonContainer}>
						<Button
						 onPress={() => navigate('ViewCrawls', {})}
						 title="VIEW CRAWLS"
						 />
					</View>
					<View style={styles.buttonContainer}>
						<Button
						 onPress={() => navigate('NewCrawl', {})}
						 title="NEW CRAWL"
						 />
					</View>
				</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		alignItems: 'center',
    justifyContent: 'center',
  },
	buttonContainer: {
		padding: 10
	},
	buttonsContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

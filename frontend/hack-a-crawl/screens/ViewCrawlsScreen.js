import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';

export default class ViewCrawlsScreen extends Component {
	static navigationOptions = {
    title: 'Your Crawls',
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
			<View>
				<FlatList
					data={[
						{key: 'Devin'},
						{key: 'Jackson'},
						{key: 'James'},
						{key: 'Joel'},
						{key: 'John'},
						{key: 'Jillian'},
						{key: 'Jimmy'},
						{key: 'Julie'},
					]}
					renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
				/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

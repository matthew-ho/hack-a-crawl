import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, Button, Alert } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Facebook } from 'expo';
import LoginScreen from './screens/LoginScreen.js';
import OptionsScreen from './screens/OptionsScreen.js';
import NewCrawlScreen from './screens/NewCrawlScreen.js';
import ViewCrawlsScreen from './screens/ViewCrawlsScreen.js';

const MainNavigator = createStackNavigator({
  Home: {screen: LoginScreen},
	Options: {screen: OptionsScreen},
	ViewCrawls: {screen: ViewCrawlsScreen},
	NewCrawl: {screen: NewCrawlScreen},
});


const App = createAppContainer(MainNavigator);

export default App;

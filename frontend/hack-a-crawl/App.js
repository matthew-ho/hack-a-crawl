import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, Button, Alert } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Facebook } from 'expo';
import LoginScreen from './screens/LoginScreen.js';

const MainNavigator = createStackNavigator({
  Home: {screen: LoginScreen},
});


const App = createAppContainer(MainNavigator);

export default App;

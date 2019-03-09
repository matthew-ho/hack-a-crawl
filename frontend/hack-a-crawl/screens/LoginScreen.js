import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, ImageBackground, Image, Button, Alert } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Facebook } from 'expo';
import logo from '../assets/logo2.png'


const APP_ID = '2263438543927964';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

	login = async () => {
	  try {
	    const {
	      type,
	      token,
	    } = await Facebook.logInWithReadPermissionsAsync(APP_ID, {
	      permissions: ['public_profile', 'user_friends'],
	    });
	    if (type === 'success') {
	      // Get the user's name using Facebook's Graph API
	      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);

				const responseJson = await response.json();
				const uri = `https://graph.facebook.com/v3.2/${responseJson.id}/friends?access_token=${token}`;
				console.log(uri);
				const friendsResponse = await fetch(uri);
				for (let friend of (await friendsResponse.json()).data) {
					console.log(friend);
				}

	      Alert.alert('Logged in!', `Hi ${responseJson.name}!`);
	    } else {
	      // type === 'cancel'
	    }
	  } catch ({ message }) {
	    alert(`Facebook Login Error: ${message}`);
	  }
	}

	renderButton = () => (
    <TouchableOpacity onPress={() => this.login()}>
      <View
        style={{
          width: '50%',
          alignSelf: 'center',
          borderRadius: 4,
          padding: 24,
          backgroundColor: '#3B5998',
				  top: '100%',
        }}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          Login with Facebook
        </Text>
      </View>
    </TouchableOpacity>
  );

  render() {
      const {navigate} = this.props.navigation;
      return (
          <View style={styles.container}>
              <Image source={logo} style={{width: '100%', height: '10%'}}>

              </Image>
							{this.renderButton()}
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
});

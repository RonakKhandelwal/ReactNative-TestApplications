/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var store = require('react-native-simple-store');

class Async extends Component {

  componentDidMount(){
    console.log("Happened");

    store
    .save('coffee', {
      isAwesome: true
    })
    .then(() => store.get('coffee'))
    .then(coffee => {
      if(coffee.isAwesome == true) console.log("true");;
    })
    .then(() => store.update('coffee', {
      isNotEssential: false
    }))
    .then(() => store.get('coffee'))
    .then(coffee => {
      if(coffee.isNotEssential == false) console.log("Not essential");;
      return store.delete('coffee');
    })
    .then(() => store.get('coffee'))
    .then(coffee => {
      if(coffee == null) console.log("Not present coffee");;
    })
    .catch(error => {
      console.error(error.message);
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Async', () => Async);

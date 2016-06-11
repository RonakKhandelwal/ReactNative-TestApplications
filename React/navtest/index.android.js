/**
* Sample React Native App
* https://github.com/facebook/react-native
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

var test1 = require('./test1.js')

class navtest extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{id: '', name: 'Index', token: 'something'}}
        renderScene={this.renderScene.bind(this)}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight;
        }} />
      );
    }


    renderScene(route, navigator) {
      var routeId = route.routeId;
      if (routeId === 'test') {
        return (
          <test1 />
        );
      }
      else{
        return (
          <View style={styles.container}>
            <Text style={styles.welcome}>
              Welcome to React Native!
            </Text>
            <Text style={styles.instructions}>
              Initial stuff
            </Text>
            <Text style={styles.instructions}>
              Shake or press menu button for dev menu
            </Text>
          </View>
        );
      }
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

  AppRegistry.registerComponent('navtest', () => navtest);

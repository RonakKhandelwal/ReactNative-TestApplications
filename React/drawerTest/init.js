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
  DrawerLayoutAndroid,
  Navigator,
  TouchableOpacity,
  TextInput,
  ToolbarAndroid
} from 'react-native';


class drawerTest extends Component {
  onClick(){
    console.log("Clicked");
    this.refs.drawer.openDrawer();
  }
  render() {
    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Im in the Drawer!</Text>
      </View>);
      return (
        <DrawerLayoutAndroid
          ref={'drawer'}
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => navigationView}>
          <View style={styles.container}>
            <ToolbarAndroid
              title="Hello!"
              style={styles.toolbar}
              navIcon={require('./navicon.png')}
              onIconClicked={this.onClick.bind(this)} />
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
            <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
          </View>
        </DrawerLayoutAndroid>



      );
    }
  }

  var styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'stretch',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 28,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      fontSize: 19,
      marginBottom: 5,
    },
    toolbar: {
      height: 56,
      backgroundColor: '#e9eaed',
    }
  });
  AppRegistry.registerComponent('drawerTest', () => drawerTest);

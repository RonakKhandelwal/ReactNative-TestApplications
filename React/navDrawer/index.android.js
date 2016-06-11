/**
* Sample React Native App
* https://github.com/facebook/react-native
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var SlideMenu = require('react-native-navigation-drawer');
var Menu = require('./menu.js');

var Pages = require('./pages.js');
var FirstPage = Pages.FirstPage;
var SecondPage = Pages.SecondPage;

var navDrawer = React.createClass({
  getInitialState(fragmentId) {
    return ({ route: 'firstpage' });
  },

  updateFrontView() {
    //routing your pages here, don't forget to add a section in the menu ;)
    switch (this.state.route) {
      case 'firstpage':
      return <FirstPage />;
      case 'secondpage':
      return <SecondPage />;
    }
  },

  routeFrontView(fragmentId) {
    this.setState({ route: fragmentId });
  },

  render() {
    var fragment = this.updateFrontView();
    return (
      <View style={styles.container}>
        <SlideMenu frontView={fragment} routeFrontView={this.routeFrontView}
          menu={<Menu />} slideWay='left' moveFrontView={false} width={200}/>
      </View>
    );
  }
});

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

AppRegistry.registerComponent('navDrawer', () => navDrawer);

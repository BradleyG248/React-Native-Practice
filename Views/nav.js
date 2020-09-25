import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View, Button, Image, Dimensions } from 'react-native';

export default class Nav extends React.Component {
  constructor() {
    super();
    this.state
  }

  render() {
    return (
      <View nativeId="nav-view" style={styles.container}>
        <Image style={styles.portrait} source={require('../assets/default-user-image.png')} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '6%',
    height: '6%',
    width: '100%',
    flexDirection: 'row'
  },
  image: {
    alignSelf: 'center',
    marginRight: 10,
  },
  portrait: {
    height: (Dimensions.get('window').height * 0.04),
    width: (Dimensions.get('window').height * 0.04),
    alignSelf: 'center',
    marginLeft: 10,
    borderRadius: 100,
    backgroundColor: 'green',
  }
});
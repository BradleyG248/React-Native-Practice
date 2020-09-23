import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View, Button, Image } from 'react-native';

export default class Nav extends React.Component {
  constructor() {
    super();
    this.state
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/favicon.png")} />

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    height: '10%',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: '5%',
    width: '100%'
  },
  image: {
    alignSelf: 'flex-end',
    marginRight: 10,
  }
});
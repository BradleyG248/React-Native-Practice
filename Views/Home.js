import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View, Button, Image } from 'react-native';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      cheese: 0
    }
    setInterval(this.autoMine, 1000)
  }
  handlePress = () => {
    let newVal = this.state.cheese + 1;
    this.setState({ cheese: newVal })
  }
  autoMine = () => {
    let newVal = this.state.cheese + 1;
    this.setState({ cheese: newVal });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>{this.state.cheese} cheese</Text>
        <Button title="Click me." onPress={this.handlePress}>click</Button>
        <Image style={styles.image} source={require("../assets/favicon.png")} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    alignSelf: 'flex-end'
  }
});
import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View, Button, Image, TouchableWithoutFeedback, Dimensions } from 'react-native';

let autoMiners = {
  mouse: {
    cPM: 1,
    cost: 10
  }
}

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      cheese: 0,
      mineVal: 1,
      autoMineVal: 0
    }

    setInterval(this.autoMine, 1000);
  }
  manMine = () => {
    let newVal = this.state.cheese + this.state.mineVal;
    this.setState({ cheese: newVal })
  }
  autoMine = () => {
    let newVal = this.state.cheese + this.state.autoMineVal;
    this.setState({ cheese: newVal });
  }
  buyAuto = (type) => {
    if (this.state.cheese >= autoMiners[type].cost) {
      let newVal = this.state.cheese - autoMiners[type].cost;
      this.setState({ cheese: newVal });
      return;
    }
    else {
      Alert.alert("Not enough cheese!");
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.moonView}>
          <Text style={styles.homeText}>{this.state.cheese} cheese</Text>
          <TouchableWithoutFeedback onPress={this.manMine} >
            <Image style={styles.moon} source={require("../assets/moon.png")} />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.autoUpView}>
          <TouchableWithoutFeedback onPress={() => { this.buyAuto("mouse") }}>
            <Text>Buy Something</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

let windowVars = {
  moonWidth: 0.6 * Dimensions.get('window').width,
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  moonView: {
    alignItems: 'center',
    fontSize: 15,
    flex: 3,
    justifyContent: 'center'
  },
  autoUpView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
    width: '100%',
    alignItems: 'center',
    marginBottom: '20%'
  },
  homeText: {
    fontSize: 40
  },
  moon: {
    marginTop: 20,
    width: windowVars.moonWidth,
    height: windowVars.moonWidth
  },
  navImage: {
    alignSelf: 'flex-end'
  }
});
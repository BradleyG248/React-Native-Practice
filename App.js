import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';
import Home from './Views/Home';
import Nav from './Views/nav';

export default function App() {
  return (
    <View style={styles.container}>
      <Nav />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


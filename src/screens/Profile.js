import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    marginVertical: 20,
  },
});

export default class Profile extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#FFF',
    }
  };

  render() {
    const { navigate, state: { params } } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          this is {params.user} profile
        </Text>
        <Button onPress={() => navigate('Modal')} title="Open Modal"/>
      </View>
    );
  }
}

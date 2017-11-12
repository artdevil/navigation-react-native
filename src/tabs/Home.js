import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import HeaderButton from '../components/HeaderButton';

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

export default class Home extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return(
      <View style={styles.container}>
        <HeaderButton onPress={() => navigate('DrawerOpen')} />
        <Text style={styles.header}>
         what up everybody
        </Text>
        <Button
          onPress={() => navigate('Settings')}
          title="Open Settings tab"
        />
        <Button
          onPress={() => navigate('Modal')}
          title="Open Modal"
        />
      </View>
    )
  }
}

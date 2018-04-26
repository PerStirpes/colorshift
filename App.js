import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { randomHex, randomUnit } from './helpers/utils';

export default class App extends Component {
  state = { backgroundColor: '#ffffff' };

  onTouchableHighlightPress = () => {
    this.setState({ backgroundColor: randomHex() });
  };

  render() {
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: this.state.backgroundColor },
        ]}
      >
        <TouchableHighlight
          style={styles.touchableHighlight}
          onPress={this.onTouchableHighlightPress}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Tap Me</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  touchableHighlight: {
    padding: 1,
    borderRadius: 50,
    borderColor: '#ffffff',
    borderWidth: 1,
  },

  button: {
    height: 42,
    width: 200,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },

  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 24,
  },
});

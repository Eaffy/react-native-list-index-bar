import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class IndexBarItem extends Component {

  static defaultProps = {
    onClickIndex: () => {}
  };

  _checkIfItIsALetter = (string) => {
    const Regx = /^[A-Za-z]*$/;
    if (Regx.test(string)) {
      return true;
    } else {
      return false;
    }
  }

  render () {
    const {data, onClickIndex} = this.props;
    let firstCharacterOfName = data.upperFirstName.substring(0, 1);
    const isLetter = this._checkIfItIsALetter(firstCharacterOfName);

    if (!isLetter) {
      firstCharacterOfName = '#';
    }
    return (
      <TouchableOpacity style={styles.container} activeOpacity={1}
        onPress={() => onClickIndex()}>
        <Text>{firstCharacterOfName}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 5
  }
});

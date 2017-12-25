import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import IndexBarItem from './index-bar-item';

export default class RNListIndexBar extends Component {

  static defaultProps = {
    style: {},
    data: ['a', 'b'],
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

  _caculateIndexItemsArray = (data) => {
    // 按文件名的首字母分组，返回首字母数组，点击可以回溯分区的第一个元素，
    // 用来点击跳转，还需要判断页面是否可以滚动到指定的位置
    let indexItemsArray = [];
    let compareLetter = '';
    for (var i = 0; i < data.length; i++) {
      const item = data[i];
      let firstCharacterOfName = item.upperFirstName.substring(0, 1);
      const isLetter = this._checkIfItIsALetter(firstCharacterOfName);
      if (!isLetter) {
        firstCharacterOfName = '#';
      }
      if (firstCharacterOfName !== compareLetter) {
        item.index = i;
        indexItemsArray.push(item);
        compareLetter = firstCharacterOfName;
      }
    }
    return indexItemsArray;
  }

  _renderIndexItems = (data) => {
    if (!data) {
      return null;
    }
    const {onClickIndex} = this.props;
    return data.map((item, index) => {
      return <IndexBarItem data={item} key={index}
              onClickIndex={() => onClickIndex(item.index)}/>
    })
  }

  render () {
    const {style, data} = this.props;
    if (!data) {
      return null;
    }
    const indexItems = this._caculateIndexItemsArray(data);
    return (
      <View style={styles.container} pointerEvents='box-none'>
        {this._renderIndexItems(indexItems)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    zIndex: 2,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

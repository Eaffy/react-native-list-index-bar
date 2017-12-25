# react-native-list-index-bar
### ListView 的右侧索引栏 —— An indexbar of ListView
#### Installing
`npm install react-native-list-index-bar --save`
#### Usage
`import RNListIndexBar from 'react-native-list-index-bar';`
```
_scrollToSelectedIndex = (selectedIndex) => {
  if (this._listView) {
    this._listView.scrollToIndex({index: selectedIndex, animated: true});
  }
}

<RNListIndexBar data={data} onClickIndex={this._scrollToSelectedIndex}/>
```

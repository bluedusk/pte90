import { Dimensions } from 'react-native';

const React = require('react-native');

const { StyleSheet } = React;

const itemsPerRow = 2;
const horizontalMargin = 10;
const windowWidth = Dimensions.get('window').width;

const singleItemWidth = (windowWidth - 20 - (itemsPerRow + 2) * horizontalMargin) / itemsPerRow;

export default {
  container: {
    backgroundColor: '#FFF',
  },
  text: {
    alignSelf: 'center',
    marginBottom: 7,
  },
  mb: {
    marginBottom: 15,
  },
  listView: {
    flex: 1,
    padding: horizontalMargin
  },
  itemContainer: {
    height:150,
    width: singleItemWidth,
    borderWidth: 1,
    borderColor: 'grey',
    alignItems: 'center',
    margin: horizontalMargin


  },
  image: {
    width: singleItemWidth,
    height: 150
  },
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: '#00000033',//#rrggbbaa
    justifyContent: 'space-between'//space-between两边无间隔 space-around两边有间隔
  },
  rowText: {
    fontSize: 12,
    color: 'white'
  },
  contentText: {
    marginVertical: 5,
    textAlign: 'left'
  },
  separatorLine: {
    height: 10
  }
};

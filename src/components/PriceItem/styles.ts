import {StyleSheet} from 'react-native';
import {Colors, px} from '../../../constants';

export default StyleSheet.create({
  container: {
    paddingVertical: px(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  buySize: {
    color: Colors.green500
  },
  sellSize: {
    color: Colors.red500
  },
  price: {
    color: Colors.white900
  },
  lightBg: {
    backgroundColor: Colors.dark600
  },
  darkBg: {
    backgroundColor: Colors.dark700
  }
});

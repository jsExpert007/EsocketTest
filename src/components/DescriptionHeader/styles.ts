import {StyleSheet} from 'react-native';
import {Colors, px} from '../../../constants';

export default StyleSheet.create({
  container: {
    paddingVertical: px(8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  label: {
    color: Colors.white900
  }
});

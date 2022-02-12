import {StyleSheet} from 'react-native';
import {Colors, px} from '../../../constants';

export default StyleSheet.create({
  container: {
    marginBottom: px(15),
    paddingVertical: px(5),
    borderBottomWidth: px(1),
    borderColor: Colors.white900,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
      color: Colors.white900
  }
});

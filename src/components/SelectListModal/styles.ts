import {StyleSheet} from 'react-native';
import {px} from '../../../constants';

export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    paddingVertical: px(15),
    paddingHorizontal: px(20),
    borderRadius: px(5),
  },
  header: {
    paddingVertical: px(15),
    marginBottom: px(20),
    textAlign: 'center'
  },
  closeIcon: {
    position: 'absolute',
    top: px(10),
    right: px(10)
  },
  title: {
    fontSize: px(20),
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: px(10)
  },
  description: {
    fontSize: px(17),
    paddingVertical: px(2),
  },
});

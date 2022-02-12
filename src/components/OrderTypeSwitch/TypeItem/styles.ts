import {StyleSheet} from 'react-native';
import {Colors, px} from '../../../../constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: px(10)
    },
    activeBg: {
        backgroundColor: Colors.dark600
    },
    inActiveBg: {
        backgroundColor: Colors.dark700,
    },
    label: {
        marginLeft: px(10)
    },
    activeLable: {
        color: Colors.white900,
    },
    inActiveLabel: {
        color: Colors.white500,
    },
    row: {
        flexDirection: 'row'
    }
});

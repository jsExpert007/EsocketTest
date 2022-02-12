import React from 'react';
import {View} from 'react-native';
import {Images} from '../../../constants';
import {TORDERBOOK} from '../../types';
import TypeItem from './TypeItem';
import styles from './styles';

interface TOrderTypeSwitch {
  activeType: TORDERBOOK;
  onSwitch: (value: TORDERBOOK) => void;
};

export default function OrderTypeSwitch(
  {activeType, onSwitch}: TOrderTypeSwitch
) {

  return (
    <React.Fragment>
      <View style={styles.container}>
        <TypeItem
          icon={Images.buy_icon}
          activeType={activeType}
          label={TORDERBOOK.BUY}
          onPress={onSwitch}
        />
        <TypeItem
          icon={Images.sell_icon}
          activeType={activeType}
          label={TORDERBOOK.SELL}
          onPress={onSwitch}
        />
        <TypeItem
          icon={Images.buy_sell_icon}
          activeType={activeType}
          label={TORDERBOOK.BOTH}
          onPress={onSwitch}
        />
      </View>
    </React.Fragment>
  );
};

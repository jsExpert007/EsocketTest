import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {TORDERBOOK} from '../../../types';
import styles from './styles';

interface TOrderTypeSwitch {
  icon: any;
  label: TORDERBOOK;
  activeType: TORDERBOOK;
  onPress: (value: TORDERBOOK) => void;
};

export default function TypeItem({
  icon,
  label,
  activeType,
  onPress,
}: TOrderTypeSwitch) {
  return (
    <React.Fragment>
      <TouchableOpacity
        style={[
          styles.container,
          activeType === label ? styles.activeBg : styles.inActiveBg
        ]}
        onPress={()=>onPress(label)}>
        <View style={styles.row}>
          <Image source={icon} />
          <Text
            style={[
              styles.label,
              activeType === label ? styles.activeLable : styles.inActiveLabel,
            ]}>
            {label}
          </Text>
        </View>
      </TouchableOpacity>
    </React.Fragment>
  );
}

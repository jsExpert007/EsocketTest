import React from 'react';
import {View, Text} from 'react-native';
import {Strings} from '../../../constants';
import styles from './styles';

export default function DescriptionHeader() {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <Text style={styles.label}>{Strings.SIZE}</Text>
        <Text style={styles.label}>{Strings.LIMIT_PRICE}</Text>
      </View>
    </React.Fragment>
  );
};
import React from 'react';
import {StatusBar, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Colors, px} from '../../../constants';
import styles from './styles';

interface IMainContainer {
  children: React.ReactNode;
};

export default function MainContainer ({children}: IMainContainer) {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        {paddingTop: insets.top + px(15), paddingBottom: insets.bottom},
      ]}
    >
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.dark800} />
      {children}
    </View>
  );
};

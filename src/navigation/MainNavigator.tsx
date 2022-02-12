import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import HomeStack from './HomeStack';
import {Colors} from '../../constants';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.dark800,
  },
};

export default () => {
  return (
    <NavigationContainer theme={theme}>
      <HomeStack />
    </NavigationContainer>
  );
};

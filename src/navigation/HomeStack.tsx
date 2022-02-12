import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens';

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{gestureEnabled: false}}
    />
  </Stack.Navigator>
);

export default HomeStack;

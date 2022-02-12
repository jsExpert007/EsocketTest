import React from 'react';
import OrderContextManager from './src/contexts/OrderContextManager';
import MainNavigator from './src/navigation/MainNavigator';

export default () => (
  <OrderContextManager>
    <MainNavigator />
  </OrderContextManager>
);

import React, {useState, useCallback} from 'react';
import {FlatList, View} from 'react-native';
import {MainContainer, DropDownSelect, DescriptionHeader, OrderTypeSwitch, PriceItem} from '../../components';

import {TORDERBOOK} from '../../types';
import {useOrderBookSchema} from '../../hooks/useOrderBookSchema';
import {Channel} from '../../../constants';
import styles from './styles';

export default function HomeScreen() {
  const [activeType, setActiveType] = useState<TORDERBOOK>(TORDERBOOK.BUY);

  const {buy, sell, symbol, setSymbol} = useOrderBookSchema();

  const onOrderTypeSwitch = (type: TORDERBOOK) => {
    setActiveType(type);
  };

  const buyRenderItem = useCallback(
    ({item, index}) => (
      <PriceItem item={item} index={index} isBuySide/>
    ),
    [], // eslint-disable-line react-hooks/exhaustive-deps
  );

  const sellRenderItem = useCallback(
    ({item, index}) => (
      <PriceItem item={item} index={index} isBuySide={false} />
    ),
    [], // eslint-disable-line react-hooks/exhaustive-deps
  );

  return (
    <MainContainer>
      <DropDownSelect
        options={Channel}
        value={symbol}
        onSelect={setSymbol}
      />
      <OrderTypeSwitch
        activeType={activeType}
        onSwitch={onOrderTypeSwitch} 
      />
      <DescriptionHeader/>
      {activeType !== TORDERBOOK.SELL && (
        <FlatList
          data={buy}
          renderItem={buyRenderItem}
        />
      )}
      {activeType === TORDERBOOK.BOTH && <View style={styles.split} />}
      {activeType !== TORDERBOOK.BUY && (
        <FlatList
          data={sell}
          renderItem={sellRenderItem}
        />
      )}
    </MainContainer>
  );
};

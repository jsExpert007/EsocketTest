import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {TBuyItem} from '../../types';
import {usePresize} from '../../hooks';
import {Colors} from '../../../constants';
import styles from './styles';

interface TPriceItem {
  item: TBuyItem;
  index: number;
  isBuySide: boolean;
};

export default function PriceItem({
  item,
  index,
  isBuySide
}: TPriceItem) {

  const [bgColor, setBgColor] = useState<string>('');
  const prevSize = usePresize(item.size);

  useEffect(() => {
    let isMounted = true;
    const changeBgColor = () => {
      if (isMounted && prevSize) {
        if (parseFloat(item.size) > parseFloat(prevSize)) {
          setBgColor(index % 2 === 0 ? Colors.green400 : Colors.green300);
        } else {
          setBgColor(index % 2 === 0 ? Colors.red400 : Colors.red300);
        }
        setTimeout(() => {
          isMounted && setBgColor('');
        }, 100);
      }
    };
    changeBgColor();
    return () => {
      isMounted = false;
    };
  }, [item.size, prevSize, index, setBgColor]);

  const getBgStyle = (bgColor: string, index: number) => {
    if(bgColor) {
      return (
        {backgroundColor: bgColor}
      )
    };
    return (
      index % 2 === 0 ? styles.lightBg : styles.darkBg
    );
  };

  return (
    <React.Fragment>
      <View style={[
        styles.container,
        getBgStyle(bgColor, index)  
      ]}>
        <Text 
          style={
            isBuySide? styles.buySize: styles.sellSize
          }>{item.size}
        </Text>
        <Text style={styles.price}>{item.limit_price}</Text>
      </View>
    </React.Fragment>
  );
}

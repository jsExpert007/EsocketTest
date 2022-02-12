import {useEffect, useState} from 'react';
import {TBuyItem, TSellItem, } from '../types';
import {subscriptionPayload} from '../utils';
import {WebSocketUrl, Channel} from '../../constants';

export const useOrderBookSchema = () => {
  const [buy, setBuy] = useState<TBuyItem[]>([]);
  const [sell, setSell] = useState<TSellItem[]>([]);
  const [symbol, setSymbol] = useState<string>(Channel[0].value);

  useEffect(() => {
    let isMounted = true;
    let connected = false;
    const W_Socket = new WebSocket(WebSocketUrl);
    const subscription = () => {
      if (isMounted && !connected) {
        W_Socket.onopen = () => {
          connected = true;
          setBuy([]);
          setSell([]);
          W_Socket.send(JSON.stringify(subscriptionPayload(symbol)));
        };
        W_Socket.onmessage = event => {
          const data = JSON.parse(event.data);
          if (data.symbol === symbol) {
            setBuy(data.buy);
            setSell(data.sell);
          };
        };
        W_Socket.onerror = () => {};
        W_Socket.onclose = () => {
          connected = false;
        };
      };
    };
    subscription();
    return () => {
      isMounted = false;
      connected && W_Socket.close();
    };
  }, [symbol]);

  return {
    buy,
    sell,
    symbol,
    setSymbol,
  };
};

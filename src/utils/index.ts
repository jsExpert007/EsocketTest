export const subscriptionPayload = (symbol: string) => ({
    type: 'subscribe',
    payload: {
      channels: [
        {
          name: 'l2_orderbook',
          symbols: [symbol],
        },
      ],
    },
  });
  
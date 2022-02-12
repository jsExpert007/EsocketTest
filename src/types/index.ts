export interface TBuyItem {
  limit_price: string;
  size: string;
  depth: string;
}
export interface TSellItem {
  limit_price: string;
  size: string;
  depth: string;
}

export enum TORDERBOOK {
  BUY = 'BUY',
  SELL = 'SELL',
  BOTH = 'BOTH',
}

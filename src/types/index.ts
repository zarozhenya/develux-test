enum StockItemType {
  Offchain = 'OFFCHAIN',
  Private = 'PRIVATE',
  Onchain = 'ONCHAIN',
}

interface StockItemPrice {
  high: number;
  low: number;
  lastTradedPrevious: number;
  lastTraded: number;
}

interface StockItemInfo {
  type: StockItemType;
  price: StockItemPrice;
  lotSize: string;
  currency: string;
  name: string;
}

export interface StockItem {
  id: number;
  i: StockItemInfo;
  market: string;
}

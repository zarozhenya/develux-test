import {StockItem} from '../types';

export const processSearchItems = (
  items: StockItem[],
  query: string,
): StockItem[] => {
  const filteredItems = items.filter(({i: {name, type}}) =>
    `${name.toLowerCase()}(${type.toLowerCase()})`.includes(query),
  );
  return filteredItems.sort(
    (
      {
        market: marketA,
        i: {
          price: {lastTradedPrevious: lastTradedPreviousA, high: highA},
        },
      },
      {
        market: marketB,
        i: {
          price: {lastTradedPrevious: lastTradedPreviousB, high: highB},
        },
      },
    ) =>
      marketA.localeCompare(marketB) ||
      Math.abs(lastTradedPreviousA - highA) -
        Math.abs(lastTradedPreviousB - highB),
  );
};

import React, {FC} from 'react';
import {StockItem} from '../../types';
import {Text} from 'react-native';

interface StockListItemProps {
  item: StockItem;
}

export const StockListItem: FC<StockListItemProps> = ({item}) => {
  return <Text>{item.market}</Text>;
};

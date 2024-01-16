import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {StockItem} from '../../types';
import {styles} from './styles';

interface StockListItemProps {
  item: StockItem;
}

export const StockListItem: FC<StockListItemProps> = ({item: {i, market}}) => {
  const price = i.price.lastTradedPrevious * Number(i.lotSize);
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>
        {i.name}({i.type}) - {market}
      </Text>
      <View style={styles.itemPriceContainer}>
        <Text style={styles.itemPriceText}>
          {Number((price / 100).toFixed(2))}
        </Text>
      </View>
    </View>
  );
};

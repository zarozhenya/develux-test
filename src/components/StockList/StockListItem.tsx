import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {StockItem} from '../../types';
import {styles} from './styles';
import {PriceTag} from '../PriceTag';

interface StockListItemProps {
  item: StockItem;
}

export const StockListItem: FC<StockListItemProps> = ({item: {i, market}}) => {
  const {colors} = useTheme();
  // TODO: Implement navigation to details on click
  return (
    <TouchableOpacity
      style={[styles.itemContainer, {backgroundColor: colors.card}]}>
      <Text style={[styles.itemText, {color: colors.text}]}>
        {i.name}({i.type}) - {market}
      </Text>
      <PriceTag
        lastTradedPrevious={i.price.lastTradedPrevious}
        lotSize={i.lotSize}
      />
    </TouchableOpacity>
  );
};

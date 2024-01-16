import React, {FC, useMemo} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {formatPrice} from '../../utils';

interface PriceTagProps {
  lastTradedPrevious: number;
  lotSize: string;
}

export const PriceTag: FC<PriceTagProps> = ({lastTradedPrevious, lotSize}) => {
  const price = lastTradedPrevious * Number(lotSize);

  const tagBackgroundStyles = useMemo(() => {
    if (price < lastTradedPrevious) {
      return {backgroundColor: '#EF3030'};
    }
    if (price === lastTradedPrevious) {
      return {backgroundColor: '#777'};
    }
    return {backgroundColor: '#5DD25A'};
  }, [price, lastTradedPrevious]);

  return (
    <View style={[styles.itemPriceContainer, tagBackgroundStyles]}>
      <Text style={styles.itemPriceText}>{formatPrice(price)}</Text>
    </View>
  );
};

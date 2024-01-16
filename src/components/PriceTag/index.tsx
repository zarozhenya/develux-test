import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

interface PriceTagProps {
  price: number;
}

export const PriceTag: FC<PriceTagProps> = ({price}) => {
  return (
    <View style={styles.itemPriceContainer}>
      <Text style={styles.itemPriceText}>
        {Number((price / 100).toFixed(2))}
      </Text>
    </View>
  );
};

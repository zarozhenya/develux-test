import React, {FC} from 'react';
import {View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {styles} from './styles';

export const StockListItemSeparator: FC = () => {
  const {colors} = useTheme();
  return (
    <View style={[styles.itemSeparator, {backgroundColor: colors.border}]} />
  );
};

import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {useTheme} from '@react-navigation/native';

export const StockListEmptyComponent: FC = () => {
  const {colors} = useTheme();

  return (
    <View style={styles.emptyList}>
      <Text style={{color: colors.text}}>No stock items found</Text>
    </View>
  );
};

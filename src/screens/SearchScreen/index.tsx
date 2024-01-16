import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './styles';
import {StockList} from '../../components';
import {DATA_SOURCE} from '../../constants';

export const SearchScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StockList data={DATA_SOURCE} />
    </SafeAreaView>
  );
};

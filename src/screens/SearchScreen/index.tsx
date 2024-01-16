import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './styles';
import {SearchInput, StockList} from '../../components';
import {DATA_SOURCE} from '../../constants';

export const SearchScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SearchInput />
      <StockList data={DATA_SOURCE} />
    </SafeAreaView>
  );
};

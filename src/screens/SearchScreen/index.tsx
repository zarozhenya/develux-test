import React, {useMemo, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './styles';
import {SearchInput, StockList} from '../../components';
import {DATA_SOURCE} from '../../constants';

export const SearchScreen: React.FC = () => {
  const [text, setText] = useState('');

  const filteredItems = useMemo(() => {
    const lowerCaseText = text.toLowerCase();
    return DATA_SOURCE.filter(
      ({i: {name, type}}) =>
        name.toLowerCase().includes(lowerCaseText) ||
        type.toLowerCase().includes(lowerCaseText),
    );
  }, [text]);

  return (
    <SafeAreaView style={styles.container}>
      <SearchInput value={text} onChangeText={setText} />
      <StockList data={filteredItems} />
    </SafeAreaView>
  );
};

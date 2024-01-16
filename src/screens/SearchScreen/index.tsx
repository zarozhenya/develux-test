import React, {useMemo, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {useDebounce} from 'use-debounce';
import {styles} from './styles';
import {SearchInput, StockList} from '../../components';
import {DATA_SOURCE} from '../../constants';

export const SearchScreen: React.FC = () => {
  const [text, setText] = useState('');
  const [debouncedText] = useDebounce(text, 200);

  const filteredItems = useMemo(() => {
    const lowerCaseText = debouncedText.toLowerCase().trim();

    if (lowerCaseText.length < 2) {
      return [];
    }

    return DATA_SOURCE.filter(
      ({i: {name, type}}) =>
        name.toLowerCase().includes(lowerCaseText) ||
        type.toLowerCase().includes(lowerCaseText),
    ).sort((firstItem, secondItem) =>
      firstItem.market.localeCompare(secondItem.market),
    );
  }, [debouncedText]);

  return (
    <SafeAreaView style={styles.container}>
      <SearchInput value={text} onChangeText={setText} />
      <StockList data={filteredItems} />
    </SafeAreaView>
  );
};

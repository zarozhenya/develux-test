import React, {useMemo, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {useDebounce} from 'use-debounce';
import {styles} from './styles';
import {SearchInput, StockList} from '../../components';
import {DATA_SOURCE} from '../../constants';
import {processSearchItems} from '../../utils';

export const SearchScreen: React.FC = () => {
  const [text, setText] = useState('');
  const [debouncedText] = useDebounce(text, 200);

  const filteredItems = useMemo(() => {
    const lowerCaseText = debouncedText.toLowerCase().trim();

    if (lowerCaseText.length < 2) {
      return [];
    }

    return processSearchItems(DATA_SOURCE, lowerCaseText);
  }, [debouncedText]);

  return (
    <SafeAreaView style={styles.container}>
      <SearchInput value={text} onChangeText={setText} />
      <StockList data={filteredItems} />
    </SafeAreaView>
  );
};

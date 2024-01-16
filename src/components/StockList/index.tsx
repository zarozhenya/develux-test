import React, {FC, useCallback} from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {StockListItem} from './StockListItem';
import {StockItem} from '../../types';

interface StockListProps {
  data: StockItem[];
}

export const StockList: FC<StockListProps> = ({data}) => {
  const renderItem = useCallback<ListRenderItem<StockItem>>(({item}) => {
    return <StockListItem item={item} />;
  }, []);

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  );
};

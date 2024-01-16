import React, {FC, useCallback} from 'react';
import {FlashList, ListRenderItem} from '@shopify/flash-list';
import {StockListItem} from './StockListItem';
import {StockListItemSeparator} from './StockListItemSeparator';
import {StockItem} from '../../types';

interface StockListProps {
  data: StockItem[];
}

export const StockList: FC<StockListProps> = ({data}) => {
  const renderItem = useCallback<ListRenderItem<StockItem>>(({item}) => {
    return <StockListItem item={item} />;
  }, []);

  return (
    <FlashList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      ItemSeparatorComponent={StockListItemSeparator}
      estimatedItemSize={46}
    />
  );
};

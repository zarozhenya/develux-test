import React, {FC, useCallback} from 'react';
import {FlashList, ListRenderItem} from '@shopify/flash-list';
import {StockListItem} from './StockListItem';
import {StockListItemSeparator} from './StockListItemSeparator';
import {StockListEmptyComponent} from './StockListEmptyComponent';
import {StockItem} from '../../types';

interface StockListProps {
  data: StockItem[];
}

const List: FC<StockListProps> = ({data}) => {
  const renderItem = useCallback<ListRenderItem<StockItem>>(({item}) => {
    return <StockListItem item={item} />;
  }, []);

  return (
    <FlashList
      data={data}
      renderItem={renderItem}
      estimatedItemSize={44}
      keyExtractor={item => item.id.toString()}
      ItemSeparatorComponent={StockListItemSeparator}
      ListEmptyComponent={StockListEmptyComponent}
    />
  );
};

export const StockList = React.memo(List);

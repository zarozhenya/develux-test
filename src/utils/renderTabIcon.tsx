import React from 'react';
import {TabEnum} from '../types';
import StocksIcon from '../assets/stock-icon.svg';
import SearchIcon from '../assets/search-icon.svg';

export const renderTabIcon =
  (tab: TabEnum) =>
  ({color}: {color: string}) => {
    if (tab === TabEnum.Stocks) {
      return <StocksIcon stroke={color} />;
    }

    if (tab === TabEnum.Search) {
      return <SearchIcon stroke={color} />;
    }

    return null;
  };

import React, {FC, useCallback} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SearchScreen, StocksScreen} from '../screens';
import StocksIcon from '../assets/stock-icon.svg';
import SearchIcon from '../assets/search-icon.svg';

type MainStackParamList = {
  Stocks: undefined;
  Search: undefined;
};

const Tab = createBottomTabNavigator<MainStackParamList>();

export const TabNavigator: FC = () => {
  const renderStocksTabIcon = useCallback(({color}: {color: string}) => {
    return <StocksIcon stroke={color} />;
  }, []);

  const renderSearchTabIcon = useCallback(({color}: {color: string}) => {
    return <SearchIcon stroke={color} />;
  }, []);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Stocks"
        component={StocksScreen}
        options={{
          tabBarIcon: renderStocksTabIcon,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: renderSearchTabIcon,
        }}
      />
    </Tab.Navigator>
  );
};

import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SearchScreen, StocksScreen} from '../screens';
import {renderTabIcon} from '../utils';
import {TabEnum} from '../types';

type MainStackParamList = {
  Stocks: undefined;
  Search: undefined;
};

const Tab = createBottomTabNavigator<MainStackParamList>();

export const TabNavigator: FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Stocks"
        component={StocksScreen}
        options={{
          tabBarIcon: renderTabIcon(TabEnum.Stocks),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: renderTabIcon(TabEnum.Search),
        }}
      />
    </Tab.Navigator>
  );
};

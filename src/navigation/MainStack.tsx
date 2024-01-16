import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SearchScreen, StocksScreen} from '../screens';

const Tab = createBottomTabNavigator();

export const MainStack: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Stocks" component={StocksScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
};

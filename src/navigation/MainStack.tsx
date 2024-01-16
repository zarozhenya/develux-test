import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SearchScreen, StocksScreen} from '../screens';
import StocksIcon from '../assets/stock-icon.svg';
import SearchIcon from '../assets/search-icon.svg';

const Tab = createBottomTabNavigator();

export const MainStack: FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Stocks"
        component={StocksScreen}
        options={{
          tabBarIcon: ({color}) => <StocksIcon stroke={color} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color}) => <SearchIcon stroke={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

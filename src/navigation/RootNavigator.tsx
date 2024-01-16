import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabNavigator} from './TabNavigator';

type RootNavigatorParamList = {
  Tabs: undefined;
};

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

export const RootNavigator: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      {/* TODO: Implement Stock Item details Stacks */}
    </Stack.Navigator>
  );
};

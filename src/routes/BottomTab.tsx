import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import React from 'react';
import { useTheme } from 'styled-components';
import Icon from '../components/Icon';
import Favorite from '../screens/Favorite';
import MainStacks from './MainStack';

const Tab = createBottomTabNavigator();

const BottomTab: React.FC = () => {
  const theme = useTheme();

  const renderIcon = (
    route: RouteProp<ParamListBase, keyof ParamListBase>,
    focused: boolean,
  ) => {
    let icon;
    switch (route.name) {
      case 'Favorite':
        icon = (
          <Icon
            name={focused ? 'heart' : 'hearto'}
            size={24}
            color={focused ? theme.white : theme.silver}
          />
        );
        break;
      case 'Home':
        icon = (
          <Icon
            name="home"
            size={24}
            color={focused ? theme.white : theme.silver}
          />
        );
        break;
    }
    return icon;
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: theme.primary,
          shadowOpacity: 0,
        },
        headerTintColor: theme.white,
        tabBarStyle: {
          backgroundColor: theme.primary,
        },
        tabBarActiveTintColor: theme.white,
        tabBarIcon: ({ focused }) => renderIcon(route, focused),
      })}>
      <Tab.Screen
        name="Home"
        component={MainStacks}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="Favorite" component={Favorite} />
    </Tab.Navigator>
  );
};

export default BottomTab;

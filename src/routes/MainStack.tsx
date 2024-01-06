import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useTheme } from 'styled-components';
import Details from '../screens/Details';
import Home from '../screens/Home';

type MainStackParamList = {
  Home: undefined;
  Details: undefined;
};

const Stack = createStackNavigator<MainStackParamList>();

const MainStacks: React.FC = () => {
  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.primary,
          shadowOpacity: 0,
        },
        headerTintColor: theme.white,
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default MainStacks;

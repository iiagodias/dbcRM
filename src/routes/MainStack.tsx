import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Details from '../screens/Details';
import Home from '../screens/Home';

const Stack = createStackNavigator();

const MainStacks: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default MainStacks;

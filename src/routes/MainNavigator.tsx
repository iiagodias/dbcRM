import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import MainStacks from './MainStack';

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <MainStacks />
    </NavigationContainer>
  );
}

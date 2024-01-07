import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import BottomTab from './BottomTab';

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
}

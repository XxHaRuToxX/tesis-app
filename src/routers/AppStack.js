import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import CowFormScreen from '../screens/CowForm';
import CowDetailsScreen from '../pages/CowDetailsPage';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ header: () => null }} name='Home' component={HomeScreen} />
      <Stack.Screen options={{ header: () => null }} name='CowForm' component={CowFormScreen} />
      <Stack.Screen options={{ header: () => null }} name='CowDetails' component={CowDetailsScreen} />
    </Stack.Navigator>
  );
}

export default AppStack;
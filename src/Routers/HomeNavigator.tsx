import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// Screens
import Home from '../Screens/Home/Home';
import TopNavigator from './TopNavigator';
import Profile from '../Screens/Profile/Profile';

const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, gestureEnabled: true}}>
      <Stack.Screen name="TopNavigator" component={TopNavigator} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;

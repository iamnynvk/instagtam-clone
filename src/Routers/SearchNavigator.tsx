import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screen
import Search from '../Screens/Search/Search';

const Stack = createNativeStackNavigator();

const SearchNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};

export default SearchNavigator;

import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const topTab = createMaterialTopTabNavigator();

// Screens
import Home from '../Screens/Home/Home';
import Story from '../Screens/Story/Story';
import DirectMessage from '../Screens/DirectMessage/DirectMessage';

const HomeNavigator = () => {
  return (
    <topTab.Navigator
      initialRouteName="Home"
      backBehavior="initialRoute"
      focusable={true}
      screenOptions={{
        tabBarStyle: {
          display: 'none',
        },
      }}>
      <topTab.Screen name="Story" component={Story} />
      <topTab.Screen name="Home" component={Home} />
      <topTab.Screen name="DirectMessage" component={DirectMessage} />
    </topTab.Navigator>
  );
};

export default HomeNavigator;

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Ionicons';

// Screens
import Reels from '../Screens/Reels/Reels';
import HomeNavigator from './HomeNavigator';
import SearchNavigator from './SearchNavigator';
import ActivityNavigator from './ActivityNavigator';
import ProfileNavigator from './ProfileNavigator';
import {COLORS} from '../Constants';
import {StyleSheet} from 'react-native';

const bottomTab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <bottomTab.Navigator
      screenOptions={({route}: any) => ({
        tabBarIcon: ({focused, color, size}): any => {
          let iconName: string | undefined;
          if (route?.name === 'HomeNavigator') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route?.name === 'SearchNavigator') {
            iconName = focused ? 'ios-search' : 'ios-search-outline';
          } else if (route?.name === 'Reels') {
            iconName = focused ? 'ios-videocam' : 'ios-videocam-outline';
          } else if (route?.name === 'ActivityNavigator') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route?.name === 'ProfileNavigator') {
            iconName = focused
              ? 'ios-person-circle'
              : 'ios-person-circle-outline';
          }

          return (
            <Icons
              name={iconName}
              size={size}
              color={color}
              style={styles.bottomTabIcons}
            />
          );
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.black,
        tabBarInactiveTintColor: COLORS.black,
      })}>
      <bottomTab.Screen name="HomeNavigator" component={HomeNavigator} />
      <bottomTab.Screen name="SearchNavigator" component={SearchNavigator} />
      <bottomTab.Screen name="Reels" component={Reels} />
      <bottomTab.Screen
        name="ActivityNavigator"
        component={ActivityNavigator}
      />
      <bottomTab.Screen name="ProfileNavigator" component={ProfileNavigator} />
    </bottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomTabIcons: {},
});

export default TabNavigator;

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

// Screens
import Activity from "../Screens/Activity/Activity";

const ActivityNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: true }}
    >
      <Stack.Screen name="Activity" component={Activity} />
    </Stack.Navigator>
  );
};

export default ActivityNavigator;

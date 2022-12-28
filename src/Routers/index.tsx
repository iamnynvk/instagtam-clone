import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {COLORS} from '../Constants/theme';
import {StatusBar} from 'react-native';
import TabNavigator from './TabNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Landing from '../Screens/Welcome/Landing';
import SignIn from '../Screens/SingIn/SignIn';
import SignUpStepOne from '../Screens/SignUp/SignUpStepOne';
import SignUpStepTwo, {WelcomeToInsta} from '../Screens/SignUp/SignUpStepTwo';
import CompleteSignUp from '../Screens/SignUp/CompleteProfile/CompleteSignUp';
import SplashScreen from 'react-native-splash-screen';
import {useDispatch, useSelector} from 'react-redux';
import {setUserDetail} from '../Slices/UserSlice';

const Stack = createNativeStackNavigator();

const index = () => {
  const [initializing, setInitializing] = useState<boolean>(true);
  const dispatch = useDispatch();
  // const {userData} = useSelector((state: any) => state.users);
  const [user, setUser] = useState();

  useEffect(() => {
    setTimeout(
      () => {
        SplashScreen.hide();
      },
      user ? 50 : 100,
    );
  }, []);

  const onAuthStateChange = async (user: any) => {
    setUser(user);
    dispatch(setUserDetail(user));
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChange);
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={COLORS.white}
        barStyle={'dark-content'}
        translucent={false}
      />
      {user ? (
        <Stack.Navigator
          screenOptions={{headerShown: false, gestureEnabled: true}}>
          <Stack.Screen name="Dashboard" component={TabNavigator} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={user ? 'Dashboard' : 'Landing'}>
          <Stack.Screen name="Landing" component={Landing} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUpStepOne" component={SignUpStepOne} />
          <Stack.Screen name="SignUpStepTwo" component={SignUpStepTwo} />
          <Stack.Screen name="CompleteSignUp" component={CompleteSignUp} />
          <Stack.Screen name="WelcomeToInsta" component={WelcomeToInsta} />
          <Stack.Screen name="Dashboard" component={TabNavigator} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default index;

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Loginpage from '../components/Loginpage';
import Registerpage from '../components/Registerpage';
import Onboardingpage from '../components/Onboardingpage';
import LandingPage from '../components/LandingPage';
import SplashScreen from '../components/Splashscreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={Onboardingpage} />
      <Stack.Screen name="Login" component={Loginpage} />
      <Stack.Screen name="Register" component={Registerpage} />
      <Stack.Screen name="Landing" component={LandingPage} />
    </Stack.Navigator>
  );
};

export default AuthStack;
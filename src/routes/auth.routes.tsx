import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: true,
      headerStyle: { backgroundColor: '#F71963' },
      headerTitleStyle: { color: '#EEEEEE' },
      cardStyle: { backgroundColor: '#eeeeee' },
    }}
  >
    <Auth.Screen name="Sign In" component={SignIn} />
    <Auth.Screen name="Sign Up" component={SignUp} />
  </Auth.Navigator>
);

export default AuthRoutes;

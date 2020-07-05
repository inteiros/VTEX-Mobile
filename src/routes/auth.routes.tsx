import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Feather'

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Store from '../pages/Store'
import Products from '../pages/Products'
import Product from '../pages/Product'
import ShoppingCar from '../pages/Shopping Car'

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: true,
      headerStyle: { backgroundColor: '#F71963' },
      headerTitleStyle: { color: '#EEEEEE' },
      cardStyle: { backgroundColor: '#eeeeee' },
      headerBackImage: () => (
        <Icon name="arrow-left" size={24} color="#eeeeee" />
      ),
    }}

    
  >

    <Auth.Screen name="ShoppingCar" component={ShoppingCar} />
    <Auth.Screen name="Product" component={Product} />
    <Auth.Screen name="Products" component={Products} />
    <Auth.Screen name="Store" component={Store} />
    
    <Auth.Screen name="Sign In" component={SignIn} />
    <Auth.Screen name="Sign Up" component={SignUp} />
  </Auth.Navigator>
);

export default AuthRoutes;

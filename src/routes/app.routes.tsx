import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Feather';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import CreateAppointment from '../pages/CreateAppointment';
import AppointmentCreated from '../pages/AppointmentCreated';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: true,
      headerStyle: { backgroundColor: '#F71963' },
      headerTitleStyle: { color: '#EEEEEE' },
      headerBackImage: () => (
        <Icon name="arrow-left" size={10} color="#eeeeee" />
      ),
      cardStyle: { backgroundColor: '#eeeeee' },
    }}
  >
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="Create Appointment" component={CreateAppointment} />
    <App.Screen name="Appointment Created" component={AppointmentCreated} />

    <App.Screen name="Profile" component={Profile} />
  </App.Navigator>
);

export default AppRoutes;

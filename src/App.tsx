import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppProvider from './hooks';

import Routes from './routes';

import Store from './pages/Store'

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#F71963" translucent />
    <AppProvider>
      <View style={{ flex: 1, backgroundColor: '#EEEEEE' }}>
        <Routes />
      </View>
    </AppProvider>
  </NavigationContainer>
);

export default App;

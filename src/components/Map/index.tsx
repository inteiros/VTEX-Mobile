import React from 'react';
import Constants from 'expo-constants';
import {
  // View,
  Text,
  Alert,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
// import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import Mapview, { Marker } from 'react-native-maps';
import { SvgUri } from 'react-native-svg';
import * as Location from 'expo-location';
import { useState, useEffect } from 'react';
import api from '../../services/api';
import Routes from './routes';
import { Store } from './pages/Store';
import AppProvider from './hooks';

import { Icon } from './styles';

const Map: React.FC = () => {
  /** ************************
   *
   */
  /* const navigation = useNavigation();
  function handleNavigateBack() {
    navigation.goBack();
  } */
  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0,
    0,
  ]); // Armazena latitude/longitude do ponto inicial do usuário
  useEffect(() => {
    async function loadPosition() {
      const { status } = await Location.requestPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert(
          'Localização...',
          'É necessário conceder permissão para obter a localização.',
        );
        return;
      }

      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = location.coords;

      setInitialPosition([latitude, longitude]);
    }

    loadPosition();
  }, []);

  return (
    <>
      <View>
        <TouchableOpacity>
          <Icon name="arrow-left" size={20} color="#34cb79" />
        </TouchableOpacity>

        <Text>Bem vindo.</Text>
        <Text>Encontre no mapa uma loja próxima a você.</Text>

        <View>
          {initialPosition[0] !== 0 && (
            <Mapview
              style={styles.map}
              loadingEnabled={initialPosition[0] === 0}
              initialRegion={{
                latitude: initialPosition[0],
                longitude: initialPosition[1],
                latitudeDelta: 0.014,
                longitudeDelta: 0.014,
              }}
            />
          )}
        </View>
      </View>
    </>
  );

  const styles = StyleSheet.create({
    map: {
      width: '100%',
      height: '100%',
      position: 'absolute',
    },
  });
  /** ************************
   *
   */
};

export default Map;

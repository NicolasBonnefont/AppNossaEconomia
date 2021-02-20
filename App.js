import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { View, SafeAreaView, StatusBar, Alert, Modal } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import * as Updates from 'expo-updates';

import Routes from './src/routes/index'

export default function App() {

  useEffect(() => {
    async function updateApp() {
      const { isAvailable } = await Updates.checkForUpdateAsync();
      if (isAvailable) {
        Alert.alert('Atualizando APP NossaEconomia',
        'Aguarde, o app ira reiniciar automaticamente 😎')
        setTimeout(async () => {
          await Updates.fetchUpdateAsync();
          Updates.reloadAsync(); // depende da estratégia
        },5000);

      }
    }

    updateApp();
  }, []);


  return (
    <SafeAreaView style={{ flex: 1 }} >
      <StatusBar />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </SafeAreaView>

  );
}
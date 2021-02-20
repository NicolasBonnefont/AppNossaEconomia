import React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Principal from '../pages/Principal'
import ContasPagar from '../pages/ContasPagar'
import Receitas from '../pages/Receitas'
import { Feather, MaterialIcons } from '@expo/vector-icons';

import Menu from '../Componentes/Menu'

// import { Container } from './styles';

const routes = () => {

  const App = createDrawerNavigator();
  return (

    <App.Navigator drawerContent={props => <Menu {...props} />}
      drawerContentOptions={{
        labelStyle: {
          fontWeight: 'bold',
        },
        activeTintColor: '#000000',
        activeBackgroundColor: '#D9D9D9',
        inactiveBackgroundColor: '#eee',
        inactiveTintColor: '#000000',
        itemStyle: {
          marginVertical: 5,
        },

      }}
    >
      <App.Screen
        options={{
          drawerIcon: () => (
            <MaterialIcons name="account-balance" size={24} color="#76156b" />
          )
        }}
        name="Principal" component={Principal} />
      <App.Screen
        options={{
          drawerIcon: () => (
            <MaterialIcons name="local-offer" size={24} color="#76156b" />
          )
        }}
        name="Contas a Pagar" component={ContasPagar} />
      <App.Screen 
              options={{
                drawerIcon: () => (
                  <MaterialIcons name="monetization-on" size={24} color="#76156b" />
                )
              }}
      
      name="Receitas" component={Receitas} />
    </App.Navigator>

  );
}

export default routes;
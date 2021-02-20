import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { createDrawerNavigator } from '@react-navigation/drawer';
import foto from '../../assets/foto.png'

import { Container, ContainerFoto, Txt } from './styles';

function Menu({ ...props }) {

  const App = createDrawerNavigator();

  return (
    <Container>
      <ContainerFoto>
        <Image source={foto}
          style={styles.Img}
        />
        <Txt>Nossa Economia ❤</Txt>

      </ContainerFoto>


      <DrawerContentScrollView {...props} >
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </Container>
  );
}

export default Menu;


const styles = StyleSheet.create({
  Img: {
    width: 164,
    height: 139,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  }
})
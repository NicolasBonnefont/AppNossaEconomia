import React from 'react';
import { View } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { Container, Btn } from './styles';

const Header = () => {
  const navigation = useNavigation()
  return (
    <Container>
      <Btn onPress={()=>navigation.toggleDrawer()}>
      <MaterialIcons name="storage" size={42} color="black" />
      </Btn>
      
    </Container>
  );
}

export default Header;
import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../Componentes/Header'

import { Container, ContainerTextoPrincipal, TituloPrincinpal, ContainerTextoTotal,TituloTotal,
ContainerTotal, TextoValorTotal
} from './styles';

const Principal = () => {
  return (

    <Container>
      <Header />

      <ContainerTextoPrincipal>
        <TituloPrincinpal>Nossa Economia ❤  </TituloPrincinpal>
      </ContainerTextoPrincipal>

      <ContainerTextoTotal>
        <TituloTotal>Saldo Total   </TituloTotal>
      </ContainerTextoTotal>

      <ContainerTotal>
        <TextoValorTotal>R$ 3000   </TextoValorTotal>
      </ContainerTotal>

    </Container>

  );
}

export default Principal;
// Importação da bivlioteca
// Importação Imgem Logo 

import React from 'react';
import { Image } from 'react-native';
import { Container } from './styles';
import Logo from '../../assets/edu.png';


//Função Imgem/logo 
function Header() {
  return(
    <Container>
      <Image 
        source={Logo}
      />
    </Container>
  )
}

export default Header;
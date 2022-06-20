// importação das Bibliotecas 
import React from 'react';
import * as Application from 'expo-application';
import { Text, View, Button } from 'react-native';
import { KeyboardView, Title, Container, Input, ButtonSubmit,TextButton} from './styles';


//Funcao  Tela Login 

export const Home = ({ navigation }) => (  
    <KeyboardView>
      <Container>
        <Title>Valores</Title>
        
        <ButtonSubmit onPress={() => navigation.navigate('#')} >
          <TextButton>
            Cabelo  R$ 30,00
          </TextButton>
         </ButtonSubmit>

         <ButtonSubmit onPress={() => navigation.navigate('#')} >
          <TextButton>
           Barba  R$ 25,00
          </TextButton>
         </ButtonSubmit>

         <ButtonSubmit onPress={() => navigation.navigate('#')} >
          <TextButton>
            Sobrancelha R$ 15,00
          </TextButton>
         </ButtonSubmit>
        
      </Container>
    </KeyboardView>
  );

export default  Home;
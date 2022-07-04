// importação das Bibliotecas 
import React from 'react';
import * as Application from 'expo-application';
import { Text, View, Button } from 'react-native';
import { KeyboardView, Title, Container, Input, ButtonSubmit,TextButton} from './styles';


//Funcao  Tela Login 

export const Valores = ({ navigation }) => (  
    <KeyboardView>
      <Container>
        <Title>Valores</Title>
        
        <ButtonSubmit>
          <TextButton>
            Cabelo  R$ 30,00
          </TextButton>
         </ButtonSubmit>

         <ButtonSubmit>
          <TextButton>
           Barba  R$ 25,00
          </TextButton>
         </ButtonSubmit>

         <ButtonSubmit>
          <TextButton>
            Sobrancelha R$ 15,00
          </TextButton>
         </ButtonSubmit>
        
      </Container>
    </KeyboardView>
  );

export default  Valores;
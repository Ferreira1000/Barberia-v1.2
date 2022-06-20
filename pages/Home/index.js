// importação das Bibliotecas 
import React from 'react';
import * as Application from 'expo-application';
import { Text, View, Button } from 'react-native';
import { KeyboardView, Title, Container, Input, ButtonSubmit,TextButton} from './styles';


//Funcao  Tela Login 

export const Home = ({ navigation }) => (  
    <KeyboardView>
      <Container>
        <Title>Em que posso ajudar?</Title>
        
        <ButtonSubmit onPress={() => navigation.navigate('Agendar')} >
          <TextButton>
            Agendar horário
          </TextButton>
         </ButtonSubmit>

         <ButtonSubmit onPress={() => navigation.navigate('Agendamentos')} >
          <TextButton>
            Ver agendamentos
          </TextButton>
         </ButtonSubmit>

         <ButtonSubmit onPress={() => navigation.navigate('Valores')} >
          <TextButton>
            Consultar valores
          </TextButton>
         </ButtonSubmit>
        
      </Container>
    </KeyboardView>
  );

export default  Home;
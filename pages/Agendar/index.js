// importação das Bibliotecas 
import React from 'react';
import * as Application from 'expo-application';
import { Text, View, Button } from 'react-native';
import { KeyboardView, Title, Container, Input, ButtonSubmit,TextButton} from './styles';


//Funcao  Tela Login 

export const Agendar = ({ navigation }) => (  
    <KeyboardView>
      <Container>
        <Title> Agendamentos de horários</Title>
        
        <ButtonSubmit onPress={() => navigation.navigate('#')} >
          <TextButton>
            Calendario
          </TextButton>
         </ButtonSubmit>

         {/* <ButtonSubmit onPress={() => navigation.navigate('Agendamentos')} >
          <TextButton>
            Ver agendamentos
          </TextButton>
         </ButtonSubmit>

         <ButtonSubmit onPress={() => navigation.navigate('valores')} >
          <TextButton>
            Consultar valores
          </TextButton>
         </ButtonSubmit> */}
        
      </Container>
    </KeyboardView>
  );

export default  Agendar;
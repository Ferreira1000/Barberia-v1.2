// importação das Bibliotecas 
import React, { useState } from 'react';
import * as Application from 'expo-application';
import { Text, View, Button } from 'react-native';
import { KeyboardView, Title, Container, Input, ButtonSubmit,TextButton} from './styles';
import { authentication } from '../../config/firebaseconfig';
import { signOut } from "firebase/auth";


//Funcao  Tela Login 

export const Home = ({ navigation }) => {

  const [isSignedIn, setIsSignedIn] = useState(true);

  const SignOutUser = () => {
    signOut(authentication)
    .then((re) => {
      setIsSignedIn(false);
    })
    .catch(alert("Ops, não foi possível sair"));
  }
  
  return (
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

         <ButtonSubmit onPress={() => navigation.navigate('Login')} >
          <TextButton>
            Sair
          </TextButton>
         </ButtonSubmit>
        
      </Container>
    </KeyboardView>
  )
};

export default  Home;
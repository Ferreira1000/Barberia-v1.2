// importação das Bibliotecas 
import React from 'react';
import * as Application from 'expo-application';
import { Text, View, Button } from 'react-native';
import { KeyboardView, Title, Container, Input, ButtonSubmit,TextButton} from './styles';
import Header from '../../components/Header';


//Funcao  Tela Login 


export const Cadastro = ({ navigation }) => (

  
  
    <KeyboardView>
      <Header />
      <Container>
      <Input 
          placeholderTextColor="#fff"
          placeholder="Nome"
        />
        <Input 
          placeholderTextColor="#fff"
          placeholder="E-mail"
        />
         <Input 
          placeholderTextColor="#fff"
          placeholder="Telefone"
        />
        <Input 
          placeholderTextColor="#fff"
          placeholder="Senha"
          secureTextEntry
        />
        
        <ButtonSubmit onPress={() => navigation.navigate('Login')} >
          <TextButton>
            Cadastrar
          </TextButton>
         </ButtonSubmit>
        
      </Container>

          

      
      
    </KeyboardView>

  );

  

export default  Cadastro;


  
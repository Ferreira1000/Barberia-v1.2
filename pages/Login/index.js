// importação das Bibliotecas 
import React from 'react';
import * as Application from 'expo-application';
import { Text, View, Button } from 'react-native';
import { KeyboardView, Title, Container, Input, ButtonSubmit,TextButton,  } from './styles';
import Header from '../../components/Header';


//Funcao  Tela Login 
export const Login = ({ navigation }) => (
  
    <KeyboardView>
      <Header />
      <Container>
        <Input 
          placeholderTextColor="#fff"
          placeholder="E-mail"
        />
        <Input 
          placeholderTextColor="#fff"
          placeholder="Senha"
          secureTextEntry
        />
        
        <ButtonSubmit  onPress={() => navigation.navigate('Home')}>
          <TextButton>
            Entrar
          </TextButton>
         </ButtonSubmit>
        
      </Container>

         <Text>
            <Button   fonte color={'fff'} title='Cadastrar'
            onPress={() => navigation.navigate('Cadastro')}>
            
            </Button>
          </Text>


    </KeyboardView>




  );

  

export default Login;


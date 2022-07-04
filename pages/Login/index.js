// importação das Bibliotecas 
import React, { useState } from 'react';
import * as Application from 'expo-application';
import { Text, Button } from 'react-native';
import { KeyboardView, Container, Input, ButtonSubmit,TextButton,  } from './styles';
import Header from '../../components/Header';
import { authentication } from '../../config/firebaseconfig';
import { signInWithEmailAndPassword } from "firebase/auth";

//Funcao  Tela Login 
export const Login = ({ navigation }) => {

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [text, setText] = useState('');
  //states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const SignInUser = () => {
    signInWithEmailAndPassword(authentication, email, password)
      .then((re) => {
        setIsSignedIn(true)
        navigation.navigate('Home')
      })
      .catch(error => {
        if ((email, password) == '') {
          alert("Preencha todos os campos!");
        } else {
          alert("E-mail ou senha inválidos!");
        }
      }
      )
  };

  return (
    <KeyboardView>
      <Header />
      <Container>
        <Input
          placeholderTextColor="#fff"
          placeholder="E-mail"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Input
          placeholderTextColor="#fff"
          placeholder="Senha"
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />

        <ButtonSubmit onPress={(SignInUser)}>
          <TextButton>
            Entrar
          </TextButton>
        </ButtonSubmit>

      </Container>

      <Text>
        <Button fonte color={'fff'} title='Cadastrar'
            onPress={() => navigation.navigate('Cadastro')}>
            
            </Button>
          </Text>

    </KeyboardView>
  );
};

export default Login;
// importação das Bibliotecas 
import React, { useState } from 'react';
import * as Application from 'expo-application';
import { Text, View, Button } from 'react-native';
import { KeyboardView, Title, Container, Input, ButtonSubmit,TextButton} from './styles';
import Header from '../../components/Header';
import { authentication } from '../../config/firebaseconfig';
import { createUserWithEmailAndPassword} from "firebase/auth";


//Funcao  Tela Login 


export const Cadastro = ({ navigation }) => {

  const [isSignedIn, setIsSignedIn] = useState(false);
  //states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const RegisterUser = () => {
    createUserWithEmailAndPassword(authentication, email, password)
    .then((re) => {
      console.log(re);
      setIsSignedIn(true)
      navigation.navigate('Login')
    })
    .catch(error => {
      if ((email, password) == '') {
        alert("Preencha todos os campos!");
      } else if (password.length < 6) {
        alert("A senha deve conter no minímo 6 digitos!");
      } else {
        alert("Digite um e-mail válido");
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
          value={password}
          onChangeText={text => setPassword(text)}
        />
        
        <ButtonSubmit onPress={(RegisterUser)} >
          <TextButton>
            Cadastrar
          </TextButton>
         </ButtonSubmit>
        
      </Container>
    </KeyboardView>
  );
};

export default Cadastro;
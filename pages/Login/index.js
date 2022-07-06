// importação das Bibliotecas 
import React, { useState } from 'react';
import * as Application from 'expo-application';
import { Text, Button } from 'react-native';
import { KeyboardView, Container, Input, ButtonSubmit, TextButton, } from './styles';
import Header from '../../components/Header';
import { authentication } from '../../config/firebaseconfig';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup,  } from "firebase/auth";





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


  // const loginWithFacebook = ()=> {

  //   //ENTER YOUR APP ID 
  //   const { type, token } =  Expo.Facebook.logInWithReadPermissionsAsync('549019423529791', { permissions: ['public_profile'] })

  //   if (type == 'success') {

  //     const credential = firebase.auth.FacebookAuthProvider.credential(token)

  //     firebase.auth().signInWithCredential(credential).catch((error) => {
  //       console.log(error)
  //     })
  //   }
  // }



    async function signInWithFacebook() {
    const appId = Expo.Constants.manifest.extra.facebook.appId;
    const permissions = ['public_profile', 'email'];  // Permissions required, consult Facebook docs
    
    const {
      type,
      token,
    } = await Expo.Facebook.logInWithReadPermissionsAsync(
      appId,
      {permissions}
    );
  
    switch (type) {
      case 'success': {
        await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);  // Set persistent auth state
        const credential = firebase.auth.FacebookAuthProvider.credential(token);
        const facebookProfileData = await firebase.auth().signInAndRetrieveDataWithCredential(credential);  // Sign in with Facebook credential
  
        // Do something with Facebook profile data
        // OR you have subscribed to auth state change, authStateChange handler will process the profile data
        
        return Promise.resolve({type: 'success'});
      }
      case 'cancel': {
        return Promise.reject({type: 'cancel'});
      }
    }
  }





   



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
        <ButtonSubmit onPress={(signInWithFacebook)}>
        </ButtonSubmit>

      </Text>

    </KeyboardView>
  );
};

export default Login;
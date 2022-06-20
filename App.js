import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Agendar from './pages/Agendar';
import Agendamentos from './pages/Agendamentos';
import Valores from './pages/Valores';

const Stack = createStackNavigator();


//Direcionamento de Paginas 
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" options={{
        headerShown: false,
      }}
      component={Login} />

      <Stack.Screen name="Cadastro" options={{
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'white',
        title: '',
      }} 
      component={Cadastro} />

      <Stack.Screen name="Home" options={{
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'white',
        title: '',
      }}  
      component={Home} />

      <Stack.Screen name="Agendar" options={{
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'white',
        title: '',
      }}  
      component={Agendar} />

      <Stack.Screen name="Agendamentos" options={{
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'white',
        title: '',
      }}  
      component={Agendamentos} />

      <Stack.Screen name="Valores" options={{
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'white',
        title: '',
      }}  
      component={Valores} />





    </Stack.Navigator>
  );
}

export default function App() {
  
    return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

//import { MyStack } from "./routes";


//export const App = () => {
//  return (
//    <AppRouter />
//  );
//}















// //Importaçoes Pasta pages / Components 
// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import Signin from './pages/Signin';
// import Cadastrar from './pages/Cadastro';

// export default function App() {
//   return (
//     <>
//       <Signin/>
     
      



//       <StatusBar style="light" />
//     </>
//   );
// }






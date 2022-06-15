import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './pages/Signin';
import Cadastro from './pages/Cadastro';


const Stack = createStackNavigator();


//Direcionamento de Paginas 
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signin" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
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






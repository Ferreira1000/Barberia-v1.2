import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Home from '../pages/Home';
import Agendar from '../pages/Agendar';
import Agendamentos from '../pages/Agendamentos';
import Valores from '../pages/Valores';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Agendar" component={Agendar} />
      <Stack.Screen name="Agendamentos" component={Agendamentos} />
      <Stack.Screen name="Valores" component={Valores} />
    </Stack.Navigator>
  );
}
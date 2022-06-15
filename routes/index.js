import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Signin  from '../pages/Signin';
import Cadastro from '../pages/Cadastro';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  );
}
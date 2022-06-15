// Importação da Biblioteca 
import styled from 'styled-components/native';


//  Teclado 
export const KeyboardView = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #000;
`

// Bloco estilização do container 
export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: 160px;
  width: 90%;
`
// Estilização do Titulo
export const Title = styled.Text`
  color: #fff;
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 30px;
`
// Estilização do Input
export const Input = styled.TextInput`
  border: 3px solid #8B0000;
  margin-bottom: 30px;
  padding: 15px 20px;
  color: #fff;
  font-size: 20px;
  border-radius: 9px;
  width: 90%;
`
// Estilização do Botão
export const ButtonSubmit = styled.TouchableOpacity`
  background-color:#8B0000;
  border-radius: 9px;
  width: 90%;
  padding: 20px;
  align-items: center;
  
`
//Estilização Texto do botão
export const TextButton = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;`



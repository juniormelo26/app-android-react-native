import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Platform } from 'react-native';
import { Background, Container, Logo, AreaInput, Input, SubmitButton, 
  SubmitText, ContainerText} from './styles';

export default function Login() {
  const navigation = useNavigation();
  
  const [nome, setNome] = useState('');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  return (
    <Background>
    <Container
    behavior={Platform.OS === 'ios' ? 'padding' : ''}
    enabled
    >
      <Logo source={require('../../assets/Logo.png')}/> 
     

      <AreaInput>
         <Input
         placeholder="Nome"
         autoCorrect={false}
         autoCapitalize="none"
         value={nome}
         onChangeText={ (text) => setNome(text) }
         />
       </AreaInput>
       <AreaInput>
         <Input
         placeholder="Usuário"
         autoCorrect={false}
         autoCapitalize="none"
         value={usuario}
         onChangeText={ (text) => setUsuario(text) }
         />
      </AreaInput>
      <AreaInput>
         <Input
         placeholder="Senha"
         autoCorrect={false}
         autoCapitalize="none"
         value={senha}
         onChangeText={ (text) => setSenha(text) }
         />
      </AreaInput>

      <SubmitButton onPress={ () => {}}>
        <SubmitText>Cadastrar</SubmitText>
      </SubmitButton>

      
    </Container>


  </Background>
  );
}
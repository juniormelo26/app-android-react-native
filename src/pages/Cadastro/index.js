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


  const BASE_API = 'http://192.168.0.83:3000';

  //ENVIO DO FORM CADASTRO
  async function handleCadastro(){
      const req = await fetch('http://192.168.0.83:8080/cadastrar', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: nome,
            login: usuario,
            password: senha  
        })
        
    });
     console.log(req);
     /* const json = await req.json();//recebe a resposta da requisição acima
    return json;   */
    
  }





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

      <SubmitButton onPress={ () => {handleCadastro()}}>
        <SubmitText>Cadastrar</SubmitText>
      </SubmitButton>

      
    </Container>


  </Background>
  );
}
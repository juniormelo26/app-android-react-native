import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Platform, Text } from 'react-native';
import { Background, Container, Logo, AreaInput, Input, SubmitButton, 
  SubmitText, Link, LinkText} from './styles';

export default function Login() {
  const navigation = useNavigation();
  
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const BASE_API = 'http://192.168.0.83:8080';

  //ENVIO DO FORM LOGIN
  async function handleLogin(){

    if (usuario.trim() != '' && senha.trim() != '') {


      const req = await fetch('http://192.168.0.83:8080/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: usuario,
                password: senha  
            })
          
      });
    
     const json = await req.json();
     if( json.erro === true){
      Alert.alert("ERRO", "DADOS INCORRETOS!");
     }else{
        navigation.reset({  
          routes: [{ name: 'AreaRestrita' }]
        });
        setUsuario('');
        setSenha('');
     }
    /*  console.log(json); 
     console.log(json.erro);  */
  }else{
    Alert.alert("ERRO", "PREENCHA TODOS OS CAMPOS!");
  }
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
         placeholder="Usuario"
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

      <SubmitButton onPress={ () => {handleLogin()}}>
        <SubmitText>Acessar</SubmitText>
      </SubmitButton>

      <Link onPress={ () => navigation.navigate('Cadastro')}>
       <LinkText>Crie uma conta aqui!</LinkText>
      </Link>
    </Container>


  </Background>
  );
}
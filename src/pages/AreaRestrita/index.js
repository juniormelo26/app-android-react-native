import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Platform, Text } from 'react-native';
import { Background, Container, Logo, AreaText, SubmitButton, SubmitText} from './styles';

export default function AreaRestrita() {
  const navigation = useNavigation();

  function handleLogout(){
    navigation.reset({
         routes:[{name:'Login'}]
     });
  }
  
  return (
    <Background>
    <Container
    behavior={Platform.OS === 'ios' ? 'padding' : ''}
    enabled
    >
      <Logo source={require('../../assets/Logo.png')}/>
      <AreaText>ÁREA RESTRITA</AreaText>

      <SubmitButton onPress={ () => {handleLogout()}}>
        <SubmitText>Sair</SubmitText>
      </SubmitButton>

    </Container>


  </Background>
  );
}
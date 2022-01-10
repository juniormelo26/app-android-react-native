import styled from "styled-components/native";

export const Background = styled.View`
flex: 1;
background-color: #9932CC;

`;
export const Container = styled.KeyboardAvoidingView`
flex:1;
align-items: center;
justify-content: center;
`;
export const Logo = styled.Image`
margin-bottom: 70px;
`;
export const AreaInput = styled.View`
flex-direction: row;
`;
export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#FFF',
    fontWeight: 'bold'
})`
background-color: rgba(0,0,0,0.20);
width: 90%;
font-size: 17px;
color:#FFF;
margin-bottom: 15px;
border-radius: 7px;
padding-left: 10px;
`;
export const SubmitButton = styled.TouchableOpacity`
align-items: center;
justify-content: center;
background-color: #00b94a;
width: 90%;
height: 45px;
border-radius: 7px;
margin-top:10px;

`;

export const SubmitText = styled.Text`
font-size: 20px;
font-weight: bold;
color: #000;
`;
export const Link = styled.TouchableOpacity`
margin-top: 10px;
margin-bottom: 9px;
`;
export const LinkText = styled.Text`
font-weight: bold;
color: #FFF;
`;
export const ContainerText = styled.Text`
font-size: 23px;
color: #FFF;
margin-bottom: 30px;
`;



import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro';

const Stack = createStackNavigator();


export default function App() {
 return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen 
        name='Login' 
        component={Login}
        options={{headerShown: false}}  
         />
       <Stack.Screen name='Cadastro' component={Cadastro} options={{
                  headerStyle:{
                      backgroundColor: '#9932CC',
                      borderBottomWidth: 3,
                      borderBottomColor: '#00b94a'
                  },
                  headerTintColor: '#000',
                  headerBackTitleVisible: false,
                  headerTitle: 'Voltar'
              }}/>
     </Stack.Navigator>
   </NavigationContainer>
  );
}
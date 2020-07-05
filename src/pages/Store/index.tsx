import React, { useCallback, useRef } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { useAuth } from '../../hooks/auth';

import getValidationErrors from '../../utils/getValidationErrors';

import jare from '../../assets/jare.jpg'

import {
  Container,
  Addres,
  Description,
  Image,
  Info,
  Title,
  Footer,
  FooterText,
  Icon
} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const Stores: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>

            <Info>
              <Image source={jare} />
                <Title>Nome da loja</Title>
                <Addres>Rua tal 0000, bairro. Cidade -UF </Addres>
                <Description>
                    Descrição: Lorem Ipsum blablabla. Lorem Ipsum blablabla Lorem Ipsum bla Lorem Ipsum blabla.
                    Lorem Ipsum blablabla Lorem Ipsum blabla Lorem Ipsum bla. Lorem Ipsum blabla Lorem Ipsum bla bla... ler mais
                </Description>

                <Button>Produtos</Button>
            </Info>
            
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <Footer>
          <Icon onPress={()=> {console.log('ok')}} name="map" size={20}/>
          <Icon name="shopping-cart" size={20}/>
          <Icon name="user" size={20}/>
          <Icon name="home" size={20}/>
      </Footer>
    </>
  );
};

export default Stores;
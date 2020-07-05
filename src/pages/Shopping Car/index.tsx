import React, { useCallback, useRef } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  FlatList,
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
  StoreName,

  Footer,
  FooterCircle,
  FooterText,
  Icon,
  ChevronIcon,

  ProductsList,
  Product,
  ProductName,
  CloseButton
  
} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const ShoppingCar: React.FC = () => {
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
            <StoreName>
              Loja do Marcelin
              <ChevronIcon name="chevron-down" size={20}/>
            </StoreName>
            <StoreName>
              Loja do Thiagão
              <ChevronIcon name="chevron-down" size={20}/>  
            </StoreName>

            <StoreName>
              Varejo da mosca varejeira
              <ChevronIcon name="chevron-up" size={20}/>
            </StoreName>
            <ProductsList>

              <Product>
                <ProductName>Coleira pra jacaré</ProductName>
                <CloseButton><Icon name="x"/></CloseButton>
              </Product>
              <Product>
                <ProductName>Coleira pra jacaré</ProductName>
                <CloseButton><Icon name="x"/></CloseButton>
              </Product>
              <Product>
                <ProductName>Coleira pra jacaré</ProductName>
                <CloseButton><Icon name="x"/></CloseButton>
              </Product>
              <Product>
                <ProductName>Coleira pra jacaré</ProductName>
                <CloseButton><Icon name="x"/></CloseButton>
              </Product>
              <Product>
                <ProductName>Coleira pra jacaré</ProductName>
                <CloseButton><Icon name="x"/></CloseButton>
              </Product>
              
              <Button>Finalizar compra</Button>

            </ProductsList>


            <StoreName>
              Atacadão do atacado
              <ChevronIcon name="chevron-down" size={20}/>  
            </StoreName>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <Footer>
          <Icon onPress={()=> {console.log('ok')}} name="map" size={20}/>
          <FooterCircle>
            <Icon name="shopping-cart" size={32}/>
          </FooterCircle>
          <Icon name="user" size={20}/>
          <Icon name="home" size={20}/>
      </Footer>
    </>
  );
};

export default ShoppingCar;
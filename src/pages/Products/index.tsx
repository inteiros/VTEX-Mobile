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
  SearchBar,
  SearchBarInput,
  Footer,
  FooterText,
  Icon,
  SearchIcon,
  Product,
  ProductImage,
  ProductName,
  ProductPrice
} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const Products: React.FC = () => {
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
            <SearchBar>
              <SearchIcon name="search" size={20} color="#000"/>
              <SearchBarInput/>
            </SearchBar>
          
              <Product>
                <ProductImage source={jare}></ProductImage>
                <ProductName>Nome do produto</ProductName>
                <ProductPrice>$150,00</ProductPrice>
              </Product>

              <Product>
                <ProductImage source={jare}></ProductImage>
                <ProductName>Nome do produto</ProductName>
                <ProductPrice>$150,00</ProductPrice>
              </Product>
            

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

export default Products;
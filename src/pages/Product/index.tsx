import React, { useCallback, useRef, useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
  Text
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
  Image,
  Info,
  Title,

  PriceAndAddToCartContainer,
  Price,
  AddToCartContainer,

  CartCount,
  Count,
  CountButton,
  CountText,
  CartIcon,

  Description,
  Footer,
  Icon
} from './styles';

const Product: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();

  const [counter, setCounter] = useState(0)

  return (
    <>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>

            <Info>
              <Image source={jare} />
                <Title>Coleira pra jacaré</Title>

                <PriceAndAddToCartContainer>
                  <Price>R$ 150,00</Price>
                  <AddToCartContainer>
                    <CartCount>

                      <CountButton 
                        activeOpacity={0.8}
                      > 
                        <CountText> - </CountText> 
                      </CountButton>
                      <Count> 
                        <CountText> {counter} </CountText> 
                      </Count>
                      <CountButton 
                        activeOpacity={0.8}
                      > 
                        <CountText> + </CountText> 
                      </CountButton>

                    </CartCount>
                    <CartIcon name="shopping-cart" size={20}/>
                  </AddToCartContainer>
                </PriceAndAddToCartContainer>

                <Description>
                    Descrição: Lorem Ipsum blablabla. Lorem Ipsum blablabla Lorem Ipsum bla Lorem Ipsum blabla.
                    Lorem Ipsum blablabla Lorem Ipsum blabla Lorem Ipsum bla. Lorem Ipsum blabla Lorem Ipsum bla bla... ler mais
                </Description>
                
            </Info>

          </Container>
        </ScrollView>

      <Footer>
          <Icon onPress={()=> {console.log('ok')}} name="map" size={20}/>
          <Icon name="shopping-cart" size={20}/>
          <Icon name="user" size={20}/>
          <Icon name="home" size={20}/>
      </Footer>
    </>
  );
};

export default Product;
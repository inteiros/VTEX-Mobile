import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface Product {
  name: string,
  price: number
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #eeeeee;
  padding: 0 30px ${Platform.OS === 'android' ? 20 : 40}px;
`;

export const Image = styled.Image`
  width: 100%; 
  margin-top: 20px;
  margin-bottom: 20px;
`

export const SearchBar = styled.View`
  height: 48px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  background: #fff;
  border-radius: 24px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #f71963;

  flex-direction: row;
  align-items: center;

`

export const SearchBarInput = styled.TextInput`
  padding: 0 16px;
  
  flex: 1;
  color: #142032;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
`

export const Product = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  background: #eeeeee;

  margin-top: 16px;
`

export const ProductImage = styled.Image`
  width: 100%;
  height: 240px;
  border-radius: 16px;
`

export const ProductName = styled.Text`
  font-size: 18px;
  color: #142032;
  margin-top: 8px;
  margin-bottom: 8px;
`

export const ProductPrice = styled.Text`
  font-size: 16px;
  color: #666;

`

export const Footer = styled.View`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #f71963;
  border-top-width: 1px;
  border-color: #f71963;
  padding: 16px 0 ${16 + getBottomSpace()}px;
  height: 64px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const FooterText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: 'RobotoSlab-Medium';
  margin-left: 16px;
`;

export const Icon = styled(FeatherIcon)`
  color: #fff;
  margin: auto;
`

export const SearchIcon = styled(FeatherIcon)`
  color: #f71963;
  margin-left: 16px;
`


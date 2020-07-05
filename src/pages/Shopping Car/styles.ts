import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.ScrollView`
  flex: 1;
  
  background: #eeeeee;
  padding: 0 30px ${Platform.OS === 'android' ? 40 : 40}px;
`

export const StoreName = styled.Text`
  margin-top: 24px;
  font-size: 24px;
  color: #142032;
  justify-content: space-between;
`

export const ProductsList = styled.ScrollView`
  flex: 1;
`

export const Product = styled.View`
  margin-top: 8px;
  flex-direction: row;
  align-items: center;
`

export const ProductName = styled.Text`
  flex: 1;
  font-size: 18px;
  color: #666;
`

export const CloseButton = styled(RectButton)`
  height: 32px;
  width: 32px;
  border-radius: 4px;
  background-color: #f71963;
`

export const Footer = styled.View`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #f71963;
  padding: 16px 0 ${16 + getBottomSpace()}px;
  height: 64px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const FooterCircle = styled.View`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  background: #f71963;
`

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

export const ChevronIcon = styled(FeatherIcon)`
  margin-left: 16px;
  color: #f71963;
`


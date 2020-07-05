import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #eeeeee;
  padding: 0 30px ${Platform.OS === 'android' ? 40 : 40}px;
`;

export const Image = styled.Image`
  width: 100%; 
  margin-bottom: 20px;
  height: 360px;
`

export const Info = styled.View`
  width: 100%;
`


export const Title = styled.Text`
  font-size: 20px;
  color: #142032;
  font-family: 'RobotoSlab-Medium';
  margin-bottom: 24px;
`;

export const Addres = styled.Text`
  font-size: 16px;
  color: #474747;
  font-family: 'RobotoSlab-Medium';
  margin-bottom: 8px;
`

export const Description = styled.Text`
  font-size: 14px;
  color: #848484

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


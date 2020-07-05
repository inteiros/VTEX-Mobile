import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.ScrollView`
  flex: 1;
  
  background: #eeeeee;
  padding: 0 30px ${Platform.OS === 'android' ? 40 : 40}px;
`;

export const Info = styled.View`
  width: 100%;
  text-align: center;
`

export const Image = styled.Image`
  width: 100%; 
  margin-top: 20px;
  margin-bottom: 20px;
  height: 240px;
`

export const Title = styled.Text`
  text-align: center;
  font-size: 20px;
  color: #142032;
  font-family: 'RobotoSlab-Medium';
  margin-bottom: 18px;
`;

export const PriceAndAddToCartContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
`

export const Price = styled.Text`
  font-size: 18px;
  color: #666;
  margin: auto;
`

export const AddToCartContainer = styled.View`
  width: 180px;
  height: 50px;
  border-radius: 8px;
  background-color: #f71963;
  padding: 0 16px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const CartCount = styled.View`
  width: 96px;
  height: 32px;
  background-color: #f71963;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Count = styled.View`
  height: 32px;
  background-color: #fff;
  border: 1px solid #f71963;
  border-radius: 4px;

  flex: 1;
  align-items: center;
  justify-content: center;
`

export const CountButton = styled.TouchableOpacity`
  height: 32px;
  background-color: #fff;
  border: 1px solid #f71963;
  border-radius: 4px;

  flex: 1;
  align-items: center;
  justify-content: center;
`

export const CountText = styled.Text`
  text-align: center;
  
  font-size: 18px;
  padding: 8px 0;
  color: #666;
`

export const CartIcon = styled(FeatherIcon)`
  color: #fff;
  margin: 0 8px;
`

export const Description = styled.Text`
  font-size: 14px;
  color: #848484;
  margin-top: 16px;
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


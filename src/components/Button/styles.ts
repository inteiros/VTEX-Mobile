import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #f71963;
  border-radius: 5px;
  margin-top: 15px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #eeeeee;
  font-size: 18px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 173px;
  margin-left: 173px;
`;

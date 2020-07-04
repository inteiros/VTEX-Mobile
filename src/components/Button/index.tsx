import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText, Icon } from './styles';

interface ButtonProps extends RectButtonProperties {
  children?: string;
  containerStyle?: Record<string, unknown>;
  icon?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  containerStyle,
  icon,
  ...rest
}) => {
  return (
    <Container style={containerStyle} {...rest}>
      {icon && <Icon name={icon} size={30} color="#EEEEEE" />}
      {children && <ButtonText>{children}</ButtonText>}
    </Container>
  );
};

export default Button;

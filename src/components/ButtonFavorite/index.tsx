import React from 'react';
import { useTheme } from 'styled-components';
import Icon from '../Icon';
import { Container } from './styles';

const ButtonFavorite: React.FC = () => {
  const theme = useTheme();

  return (
    <Container>
      <Icon name="hearto" size={16} color={theme.white} />
    </Container>
  );
};

export default ButtonFavorite;

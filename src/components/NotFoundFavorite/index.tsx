import React from 'react';
import { Container, LottieView, Title } from './styles';

const NotFoundFavorite: React.FC = () => {
  return (
    <Container>
      <Title>No character was a favorite.</Title>
      <LottieView autoPlay source={require('../../assets/notFavorite.json')} />
    </Container>
  );
};

export default NotFoundFavorite;

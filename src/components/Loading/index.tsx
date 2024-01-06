import React from 'react';
import { Container, LottieView } from './styles';

const Loading: React.FC = () => {
  return (
    <Container>
      <LottieView autoPlay source={require('../../assets/loading.json')} />
    </Container>
  );
};

export default Loading;

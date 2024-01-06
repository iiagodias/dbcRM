import React from 'react';
import CardCharacter from '../../components/CardCharacter';
import InputSearch from '../../components/InputSearch';
import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <InputSearch onSearch={text => console.log(text)} />
      <CardCharacter />
    </Container>
  );
};

export default Home;

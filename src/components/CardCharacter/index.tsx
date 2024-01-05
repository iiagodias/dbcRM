import React from 'react';
import ButtonFavorite from '../ButtonFavorite';
import {
  Box,
  BoxImage,
  BoxInfo,
  BoxRow,
  BoxSpace,
  BoxText,
  Container,
  Description,
  Image,
  Title,
} from './styles';

const CardCharacter: React.FC = () => {
  return (
    <Container>
      <BoxRow>
        <BoxImage>
          <Image
            source={{
              uri: 'https://img.elo7.com.br/product/360x360/2C8D2AA/painel-1x0-65-rick-e-morty-personalizado.jpg',
            }}
          />
        </BoxImage>
        <BoxInfo>
          <BoxText>
            <BoxSpace>
              <Box>
                <Title>Guerry</Title>
                <Description>Ele eé veroz</Description>
              </Box>
              <ButtonFavorite />
            </BoxSpace>
          </BoxText>
        </BoxInfo>
      </BoxRow>
    </Container>
  );
};

export default CardCharacter;

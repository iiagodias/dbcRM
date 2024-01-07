import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { useTheme } from 'styled-components';
import ButtonFavorite from '../../components/ButtonFavorite';
import Icon from '../../components/Icon';
import { MainStackParamList } from '../../routes/MainStack';
import {
  BoxInfo,
  BoxRow,
  BoxText,
  Container,
  Description,
  Image,
  Title,
} from './styles';

const Details: React.FC = () => {
  const theme = useTheme();
  const route = useRoute<RouteProp<MainStackParamList, 'Details'>>();

  const { character } = route.params;

  const colorStatus = character.status === 'Alive' ? theme.green : theme.red;

  return (
    <Container>
      <Image source={{ uri: character.image }} />
      <BoxInfo>
        <BoxText>
          <BoxRow>
            <Icon name="user" size={16} color={theme.white} />
            <Title>{character.name}</Title>
          </BoxRow>
          <BoxRow>
            <Icon name="questioncircle" size={12} color={theme.white} />
            <Description>{character.species}</Description>
          </BoxRow>
          <BoxRow>
            <Icon name="woman" size={12} color={theme.white} />
            <Description>{character.gender}</Description>
          </BoxRow>
          <BoxRow>
            <Icon name="star" size={12} color={colorStatus} />
            <Description>{character.status}</Description>
          </BoxRow>
        </BoxText>
        <ButtonFavorite character={character} />
      </BoxInfo>
    </Container>
  );
};

export default Details;

import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import React from 'react';
import { ICharacter } from '../../types/characters';
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

interface ICardCharacter {
  character: ICharacter;
}

const CardCharacter: React.FC<ICardCharacter> = ({ character }) => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const onNavigate = (): void => {
    navigation.navigate('Details', { character });
  };

  return (
    <Container onPress={onNavigate}>
      <BoxRow>
        <BoxImage>
          <Image
            source={{
              uri: character.image,
            }}
          />
        </BoxImage>
        <BoxInfo>
          <BoxText>
            <BoxSpace>
              <Box>
                <Title numberOfLines={1}>{character.name}</Title>
                <Description>{character.species}</Description>
              </Box>
              <ButtonFavorite character={character} />
            </BoxSpace>
          </BoxText>
        </BoxInfo>
      </BoxRow>
    </Container>
  );
};

export default CardCharacter;

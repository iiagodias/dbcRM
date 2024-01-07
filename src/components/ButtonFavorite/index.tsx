import React from 'react';
import { useTheme } from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  insertAndRemoveToListFavorite,
  isFavorite,
} from '../../shared/favoriteHandler';
import { setFavoriteCharacters } from '../../store/favoriteReducer';
import { ICharacter } from '../../types/characters';
import Icon from '../Icon';
import { Container } from './styles';

interface IButtonFavorite {
  character: ICharacter;
}

const ButtonFavorite: React.FC<IButtonFavorite> = ({ character }) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const { favoritesCharacters } = useAppSelector(state => state.favorite);

  const isFavoriteCharacter = isFavorite(character, favoritesCharacters);

  const onFavorite = () => {
    const newListFavorite = insertAndRemoveToListFavorite(
      character,
      favoritesCharacters,
    );
    dispatch(setFavoriteCharacters(newListFavorite));
  };

  return (
    <Container onPress={onFavorite}>
      <Icon
        name={isFavoriteCharacter ? 'heart' : 'hearto'}
        size={16}
        color={theme.white}
      />
    </Container>
  );
};

export default ButtonFavorite;

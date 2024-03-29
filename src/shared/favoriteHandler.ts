import { ICharacter } from '../types/characters';

export const isFavorite = (
  character: ICharacter,
  favoritesCharacters: ICharacter[],
) => {
  return Boolean(favoritesCharacters.find(item => item.id === character.id));
};

export const insertAndRemoveToListFavorite = (
  character: ICharacter,
  favoritesCharacters: ICharacter[],
): ICharacter[] => {
  const hasFavorite = isFavorite(character, favoritesCharacters);

  if (hasFavorite) {
    return favoritesCharacters.filter(item => item.id !== character.id);
  }

  const listFavorite = [...favoritesCharacters];
  listFavorite.push(character);

  return listFavorite;
};

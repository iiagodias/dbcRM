import { ICharacter } from '../../src/types/characters';

export const character: ICharacter = {
  __typename: 'Character',
  gender: 'Male',
  id: 123,
  image: 'https://urlimga.com.br',
  name: 'Rick',
  species: 'Human',
  status: 'Dead',
};

export const listCharactersWithFavorite: ICharacter[] = [
  character,
  {
    ...character,
    id: 1,
  },
];

export const listCharactersWithOutFavorite: ICharacter[] = [
  {
    ...character,
    id: 1,
  },
];

export const resultInserList: ICharacter[] = [
  {
    ...character,
    id: 1,
  },
  character,
];

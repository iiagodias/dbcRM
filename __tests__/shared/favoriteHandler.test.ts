import {
  insertAndRemoveToListFavorite,
  isFavorite,
} from '../../src/shared/favoriteHandler';
import {
  character,
  listCharactersWithFavorite,
  listCharactersWithOutFavorite,
  resultInserList,
} from '../__mocks__/characters.mock';

describe('Test func isFavorite', () => {
  it('isFavorite - with favorite', () => {
    const isFavoriteCharacter = isFavorite(
      character,
      listCharactersWithFavorite,
    );

    expect(isFavoriteCharacter).toEqual(true);
  });

  it('isFavorite - without favorite', () => {
    const isFavoriteCharacter = isFavorite(
      character,
      listCharactersWithOutFavorite,
    );

    expect(isFavoriteCharacter).toEqual(false);
  });
});

describe('Test func insertAndRemoveToListFavorite', () => {
  it('insertAndRemoveToListFavorite - character is favorite', () => {
    const returnList = insertAndRemoveToListFavorite(
      character,
      listCharactersWithFavorite,
    );

    const result = [{ ...character, id: 1 }];

    expect(returnList).toEqual(result);
  });

  it('insertAndRemoveToListFavorite - character is not favorite', () => {
    const returnListWithCharacter = insertAndRemoveToListFavorite(
      character,
      listCharactersWithOutFavorite,
    );

    expect(returnListWithCharacter).toEqual(resultInserList);
  });
});

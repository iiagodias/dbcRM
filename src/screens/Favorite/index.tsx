import { FlashList } from '@shopify/flash-list';
import React, { ReactElement } from 'react';
import CardCharacter from '../../components/CardCharacter';
import NotFoundFavorite from '../../components/NotFoundFavorite';
import { useAppSelector } from '../../hooks/redux';
import { ICharacter } from '../../types/characters';
import { Container } from './styles';

const Favorite: React.FC = () => {
  const { favoritesCharacters } = useAppSelector(state => state.favorite);

  const isNotFavorite = favoritesCharacters.length === 0;

  const renderItem = ({ item }: { item: ICharacter }): ReactElement => {
    return <CardCharacter character={item} key={item.id} />;
  };

  return (
    <Container>
      {isNotFavorite && <NotFoundFavorite />}

      <FlashList
        data={favoritesCharacters}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
        estimatedItemSize={200}
      />
    </Container>
  );
};

export default Favorite;

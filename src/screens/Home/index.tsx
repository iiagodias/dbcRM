import { useQuery } from '@apollo/client';
import { FlashList } from '@shopify/flash-list';
import React, { ReactElement, useState } from 'react';
import CardCharacter from '../../components/CardCharacter';
import InputSearch from '../../components/InputSearch';
import Loading from '../../components/Loading';
import { GET_CHARACTERS } from '../../services/querysApollo';
import { ICharacter } from '../../types/characters';
import { Container, Title } from './styles';

interface IGetCharacters {
  loading: boolean;
  data?: { characters: { results: ICharacter[] } };
}

const Home: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');

  const { loading, data }: IGetCharacters = useQuery(GET_CHARACTERS, {
    variables: { page: 1, filter: searchText },
  });

  const isNotFound = data?.characters?.results.length === 0;

  console.log(isNotFound);

  const renderItem = ({ item }: { item: ICharacter }): ReactElement => {
    return <CardCharacter character={item} />;
  };

  return (
    <Container>
      <InputSearch onSearch={text => setSearchText(text)} />

      {!!isNotFound && <Title>No characters found!</Title>}

      {!loading ? (
        <FlashList
          data={data?.characters?.results}
          renderItem={renderItem}
          estimatedItemSize={200}
        />
      ) : (
        <Loading />
      )}
    </Container>
  );
};

export default Home;

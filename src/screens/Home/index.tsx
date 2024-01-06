import { useQuery } from '@apollo/client';
import { FlashList } from '@shopify/flash-list';
import React, { ReactElement, useState } from 'react';
import CardCharacter from '../../components/CardCharacter';
import InputSearch from '../../components/InputSearch';
import Loading from '../../components/Loading';
import { GET_CHARACTERS } from '../../services/querysApollo';
import { ICharacter } from '../../types/characters';
import { Container, Title } from './styles';

const Home: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [page, setPage] = useState<number>(1);

  const { loading, data, fetchMore } = useQuery(GET_CHARACTERS, {
    variables: { page: 1, filter: searchText },
  });

  console.log(data);

  const isNotFound = data?.characters?.results?.length === 0 && !loading;

  const renderItem = ({ item }: { item: ICharacter }): ReactElement => {
    return <CardCharacter character={item} />;
  };

  const onSearch = (text: string): void => {
    setPage(1);
    setSearchText(text);
  };

  const onPaginate = (): void => {
    if (loading) {
      return;
    }

    fetchMore({
      variables: {
        page: page + 1,
      },

      updateQuery: (prev, { fetchMoreResult }) => {
        fetchMoreResult.characters.results = [
          ...prev.characters.results,
          ...fetchMoreResult.characters.results,
        ];
        return fetchMoreResult;
      },
    });

    setPage(prevState => prevState + 1);
  };

  return (
    <Container>
      <InputSearch onSearch={onSearch} />

      {!!isNotFound && <Title>No characters found!</Title>}

      <FlashList
        data={data?.characters?.results}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
        estimatedItemSize={200}
        onEndReached={onPaginate}
      />

      {loading && <Loading />}
    </Container>
  );
};

export default Home;

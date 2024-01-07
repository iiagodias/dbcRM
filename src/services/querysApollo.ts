import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int, $filter: String) {
    characters(page: $page, filter: { name: $filter }) {
      info {
        count
      }
      results {
        name
        species
        status
        image
        id
        gender
      }
    }
  }
`;

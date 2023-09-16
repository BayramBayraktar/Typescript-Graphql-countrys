import { gql } from '@apollo/client';

export const GET_ALL_COUNTRIES = gql`
  query Query {
    countries {
      code
      name
      native
      capital
      emoji
      currency
      languages {
        code
        name
      }
    }
  }
`;

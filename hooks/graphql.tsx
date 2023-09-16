import { useQuery } from '@apollo/client';
import { GET_ALL_COUNTRIES } from '../graphql/Country'

export const useAllCountries = () => {
  const { error, loading, data } = useQuery(GET_ALL_COUNTRIES)
  return {
    error,
    loading,
    data
  }
}

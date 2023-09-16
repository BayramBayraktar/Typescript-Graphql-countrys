import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css'

import type { AppProps } from 'next/app'
import { NormalizedCacheObject } from '@apollo/client/cache';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: 'https://countries.trevorblades.com/graphql',
  cache: new InMemoryCache(),
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )

}

export default MyApp

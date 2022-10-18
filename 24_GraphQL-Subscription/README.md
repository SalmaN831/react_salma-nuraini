# Section 24 - GraphQL Subscription
Subscription adalah cara yang kita gunakan untuk mengambil data secara real time

Cara menggunakan subscribtion :
1. Install libraries
    Menginstal library pada terminal dengan mengetik "npm install graphql-ws"
2. Import modul yang digunakan
    import { ApolloClient, InMemoryCache } from '@apollo/client';
    
    import { split, HttpLink } from '@apollo/client';
    
    import { getMainDefinition } from '@apollo/client/utilities';
    
    import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
    
3. Membuat httpLink untuk query dan mutation dan wsLink untuk subscription

    const httpLink = new HttpLink({
      uri: 'http://localhost:4000/graphql'
    });

    const wsLink = new GraphQLWsLink(createClient({
      url: 'ws://localhost:4000/subscriptions',
    }));
    
4. Tambahkan split function dan gunakan sebagai link ketika membuat client

    const splitLink = split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === 'OperationDefinition' &&
          definition.operation === 'subscription'
        );
      },
      wsLink,
      httpLink,
    );

    const client = new ApolloClient({
      link: splitLink,
      cache: new InMemoryCache()
    });
    
5. Import useSubscription dari apollo client dan define subscription

    import { useSubscription } from '@apollo-client'

    const { data, loading } = useSubscription(
        COMMENTS_SUBSCRIPTION,
        { variables: { postID } }
      );
      
6. Mengaktifkan subscription dan menggunakan data

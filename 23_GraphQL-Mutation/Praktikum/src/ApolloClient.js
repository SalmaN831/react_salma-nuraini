import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://enabled-antelope-99.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers : {
        'x-hasura-admin-secret' : 'qNQSi7K6wC4alTBi7eeuh6LjfptyX7qAYqtlDsVCb5Uh3hmSmscLQXVKwSmeEjlW'
    }
});

export default client;
# Section 22 - GraphQL Query and Apollo Client

* Apollo Server : digunakan back-end untuk membuat server GraphQL
* Apollo Client : digunakan pihak client untuk mengambil data dari server

Cara setting Apollo Client :
1. Setup
    * Membuat project React baru
    * membuat React sandbox baru
    
2. Instal Dependencies
    
    Jalankan "npm install @apollo/client graphql" pada terminal
    
3. Initialize ApolloClient
    
    Membuat file baru lalu mengcopy-paste kode berikut
    
    import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
    
    const client = new ApolloClient({
      uri: 'https://flyby-gateway.herokuapp.com/',
      cache: new InMemoryCache(),
    });
    
4. 

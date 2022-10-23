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
    
4. Connect your client to React

   import ApolloProvider dalam file indeex.js
   
   import {  ApolloProvider } from '@apollo/client';

5. Fetch data with UseQuery

   import useQuery dan gql dari @apollo-client
   
   import { useQuery, gql } from '@apollo/client';
   
   Lalu menyalin query dari GraphQL, sebagai contoh
   
   const GET_LOCATIONS = gql`
     query GetLocations {
       locations {
         id
         name
         description
         photo
       }
     }
   `;
   
## Database
![database](https://user-images.githubusercontent.com/79805395/197372165-648e8de8-de9a-4976-9758-1b0b9a4d0196.png)

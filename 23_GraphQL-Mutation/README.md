# Section 23 - GraphQL Mutation

Mutation adalah cara kita untuk memanipulasi data GraphQl seperti melakukan CRUD (Create, Update, Delete)

Cara menggunakan mutation :
1. Import useMutation dari @apollo-client
  
   import { gql, useMutation } from '@apollo/client';

2. Define query mutation, dengan menyalin query dari GraphQL

    const INCREMENT_COUNTER = gql`
      mutation IncrementCounter {
        currentValue
      }
    `;  
    
3. Memanggil useMutation

    const [mutateFunction, { data, loading, error }] = useMutation(INCREMENT_COUNTER);
    
4. 

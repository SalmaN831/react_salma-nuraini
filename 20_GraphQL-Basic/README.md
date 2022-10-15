# Section 20 - GraphQL Basic
GraphQL adalah query language untuk API, dimana kita bisa mendefine skema dari data yang kita inginkan yang ingin dikirim ke client. Dengan GraphQl kita menbutuhkan hanya dengan satu endpoint untuk membuat semua request

3 fitur GraphQL:
1. Query : digunakan untuk mendapatkan data
2. Mutation : digunakan untuk memanipulasi data (insert, update, delete)
3. Subcription : digunakan untuk mendapatkan data secara realtime

## Query
* Basic, dengan GraphQL kita dapat mengambil data yang kita butuhkan
* Multiple related data sources, dengan GraphQL kita dapat mendapatkan multiple data collection. Jika dibandingkan dengan REST, hanya bisa mendapat data berupa id saja
* Multiple unrelated data sources, dengan GraphQL kita dapat mendapatkan multiple data yang berbeda source
* Fragment, potongan logic yang bisa dipakai di beberapa tempat sekaligus, diantara multiple queries dan mutation

## Mutation
Mutation adalah fungsi untuk melalukan CRUD (Create, Update, Delete)

## Subscribtion
Subscribtion adalah fitur yang digunakan server untuk mengirim data kepada client ketika terjadi suatu kondisi spesifik

# Section 17 - Global State Management and Data Fetching

Redux adalah library untuk manajemen state global yang menggunakan struktur "one way data flow"

Saat yang tepat menggunakan Redux
* Banyak state yang perlu ditaruh di banyak tempat
* State pada App banyak berubah
* Logic untuk mengubah state kompleks
* Ukuran codebase yang sedang-besar dan dikerjakan oleh banyak orang
* Perlu untuk mengetahui bagaimana state diupdate seiring dengan waktu

Redux libraries and tools
* React-Redux
* Redux Toolkit
* Redux DevTools Extension

Komponen penting pada Redux
* Action : memberi informasi dari aplikasi ke store
* Reducer : mengambil state aplikasi saat ini dan object action lalu mengembalikan state aplikasi terbaru
* Store

Redux Thunk adalah Thunk middleware untuk redux yang memungkinkan kita membuat action creator yang mengembalikan function bukan action

Redux Thun diperlukan utnuk menghandle side effect logic seperti logic synchronus kompleks yang perlu mengakses store dan juga logic async seperti request data

Cara fetching data di React
* Fetch API
* Axios
* React Query Library

## Hasil Praktikum
### Tampilan
![Tampilan](https://user-images.githubusercontent.com/79805395/197162781-c2ada0f4-84fb-4c3c-9b8e-e5280271fb37.png)
## Database dan Restfull API
![Database dan Restfull API](https://user-images.githubusercontent.com/79805395/195546673-67605b4d-c156-4989-8bf2-d70ee7bcea45.png)
![Database dan Restfull API (1)](https://user-images.githubusercontent.com/79805395/195546710-a34bb865-4985-4594-af0a-ffc855c54574.png)
![Database dan Restfull API (2)](https://user-images.githubusercontent.com/79805395/195546724-086b6f6d-6c98-45c7-b43f-fe2b22014fc8.png)
![Database dan Restfull API (3)](https://user-images.githubusercontent.com/79805395/195546729-f01bb772-5fc8-4137-8cec-fdca33f6c758.png)
![Database dan Restfull API (4)](https://user-images.githubusercontent.com/79805395/195546734-e4a2e751-4085-42db-ba2a-3b0edf5e2af6.png)
![Database dan Restfull API (5)](https://user-images.githubusercontent.com/79805395/195546744-27c697c9-b299-44ce-951e-1cc11b6e2dca.png)

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

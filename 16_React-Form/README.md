# Section 16 - React Form

Form merupakan salah satu hal kruian dalam pengembangan website. Form dapat digunakan untuk menghandle inputan dari user.

Macam form :
* Input
* Text Area
* Select
* Radio Button
* Checkbox

## Controlled Component
Controlled component adalah sebuah elemen masukan form yang nilainya dikontrol oleh React.

Implementasi controlled component:
* Tag textarea

  Dalam React, < textarea > menggunakan atribut value. Dengan cara ini, sebuah form yang menggunakan < textarea > dapat ditulis dengan cara yang sangat mirip dengan sebuah form yang menggunakan input satu baris
  
* Tag select

  Pada HTML, tag select digunakan untuk membuat dropdown. Dalam Reactalih-alih menggunakan atribut select, kita menggunakan atribut value di tag select.

## Uncontrolled Component
Uncontrolled Component adalah alternatif dari controlled component, dimana data form akan ditangani oleh DOM-nya sendiri.

Dalam React, sebuah < input type="file" /> merupakan uncontrolled component karena nilainya hanya bisa disetel oleh pengguna, bukan program.

## Controlled Component vs Uncontrolled Component

| Fitur | Uncontrolled | Controlled |
| --- | --- | --- |
| one-time value retrieval | v | v |
| validating on submit | v | v |
| instan field validation | x | v |
| conditionally disabling submit button | x | v |
| enforcing input format | x | v |
| several inputs for one piece data | x | v |
| dynamics inputs | x | v |

## Basic Validation
Alasan:
1. Mencari input data yang benar dan sesuai dengan format
2. Melindungi akun pengguna
3. Melindungi sistem/aplikasi

Tipe validasi data formulir :
* Client-side validation
* Server-side validation

Built in form validation
* required : menentukan field form perlu diisi sebelum formulir dapat dikirimkan
* minlenght dan maxlenght : menentukan jumlah karakter minimal dan maksimal yang bisa dimasukkan
* min dan max : menentukan nilai minimum dan maksimum angka yang bisa dimasukkan
* type : menentukan apakah data berupa angka, email, atau type yang lainnya
* pattern : menentukan regular expression (regex) yang mendefinisikan pola data yang boleh dimasukkan 

Kapan validasi menggunakan Javascript digunakan:
* Ketika ada perubahan di form
* Ketika menekan tombol submit

## Hasil Praktikum
### Berhasil disimpan
![berhasil disimpan](https://user-images.githubusercontent.com/79805395/197146968-385c8018-c4f2-4808-af0e-1c00515dd1fb.png)
### Nama error
![nama error](https://user-images.githubusercontent.com/79805395/197146950-61a8fdb3-94b7-4abc-ba01-6ace03e54add.png)
### Email error
![email error](https://user-images.githubusercontent.com/79805395/197146975-a6bab4af-1827-46e7-ae25-f59a03ba5258.png)
### Nomor HP error
![no hp error](https://user-images.githubusercontent.com/79805395/197146964-b89289a0-c50c-4994-802e-111d7ed9c887.png)

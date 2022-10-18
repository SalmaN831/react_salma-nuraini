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
### Tampilan awal
![hasil](https://user-images.githubusercontent.com/79805395/196511793-7833e70a-38a7-424e-aa21-52cb81d66e18.png)
### Nama error
![err-nama](https://user-images.githubusercontent.com/79805395/196511797-1ba259b8-ebe6-4f38-a37b-7fefdfb82e39.png)
### Email error
![err-email](https://user-images.githubusercontent.com/79805395/196511795-c572073e-f7d6-4de4-bdee-44fc9172bb96.png)
### Nomor HP error
![err-nohp](https://user-images.githubusercontent.com/79805395/196511783-768c4d7b-ced1-48e4-8efb-5de240e9913d.png)

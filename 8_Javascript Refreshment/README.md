# Section 8 - Javascript Refreshment
## Introduction
Javascript adalah Bahasa pemrograman high level, scripting, untyped, dan interpreted. Javascript mempunyai beberapa framework atau library seperti svelte, vue, react, dll.

## Values
* Declaration : proses pembuatan variabel untuk menyimpan data
* Scoping : mementukan dimana variabel, fungsi, dan objek diatur dan dapat diakses dalam kode kita
* Hoisting : membuat beberapa jenis variabel atau fungsi dapat diakses/digunakan dalam kode sebelum dideklarasikan

Kesimpulan :

| | Declaration | Redeclaration | Reassignment | Hoisting | Global Scope | Function Scope | Block Scope |
| :-----------: | :---------: | :----------: | :-----------: | :---------: | :----------: | :-----------: | :---------: |
| Var | Ya | Ya | Ya | Ya | Ya | Tidak | Ya |
| Let | Ya | Tidak | Ya | Tidak | Ya | Tidak | Tidak |
| Const | Tidak | Tidak | Tidak | Tidak | Ya | Tidak | Tidak |

## Understanding Variable
Tipe data pada Javascript :
| | Pengertian | Contoh |
| ----------- | --------- | ---------- |
| Primitive | Unit pemprosesan terkecil dan elemen paling sederhana dalam bahasa pemrograman | string boolean, number, bigInt,undefined, null, symbol |
| Object | unit yang menyimpan properti dan fungsi | object, array, function, date, set, map, weak set, weak map |

## Destructuring
Destructuring adalah ekspresi dari JavaScript yang memungkinkan untuk menyalin nilai dari array atau properti dari objek ke dalam variabel yang berbeda.

Spread syntax dapat digunakan ketika semua elemen dari object atau array perlu dimasukkan ke dalam semacam daftar.

## Method
Method merupakan sebuah fungsi yang terkait dengan object, membuat programnya se-sederhana mungkin sesuai kegunaan masing masing.
* Concat :menggabungkan dua atau lebih array dan mengembalikan salinan array yang digabungkan
* Map : membuat array baru dengan hasil memanggil fungsi untuk setiap elemen array
* Foreach : memanggil fungsi untuk setiap elemen array
* Slice : memilih bagian dari array dan mengembalikan array baru
* Filter : membuat array baru dengan setiap elemen dalam array yang lulus seleksi
* Reduce : melakukan operasi pada setiap elemen array menjadi nilai tunggal

## Control Flow
Control flow adalah aturan yang digunakan untuk mengatur alur eksekusi pada statement atau jalannya program.
* Pengulangan (loop) : for, while, do while
* Pengkondisian (percabangan) : if… else, switch, block, try…catch, break, continue, throw

## Function Intro Golang
Function dalam javascript adalah sebuah objek, karena memiliki properti dan juga method. Function digunakan untuk melakukan serangkaian komputasi/prosedur yang dapat digunakan berulang kali.

## Class
Class adalah prototype dari suatu objek yang akan dibuat.

Constructor adalah method di dalam class yang akan selalu terpanggil pertama kali ketika membuat objek
Method adalah fungsi dalam class.

Attributes adalah kumpulan variabel yang membentuk objek yang dimiliki oleh suatu class
Extends digunakan untuk membuat kelas anak dari kelas induk. Kelas anak mewarisi semua atribut dan method dari kelas induk

## Async Wait
* Synchronus mengeksekusi setiap perintah satu persatu sesuai urutan kode yang dituliskan.
* Asynchronus hasil eksekusi atau output tidak selalu berdasarkan urutan kode, tetapi berdasarkan waktu proses.
* Callback adalah fungsi yang dikirimkan sebagai parameter pada fungsi lain.
* Promise adalah objek yang merepresentasikan keberhasilan atau kegagalan pada sebuah event yang asynchronus dimasa mendatang.
* Asynchronus function adalah sebuah function yang bekerja secara asynchronus yang menghasilkan promise sebagai return value-nya, tetapi cara penulisan code-nya menggunakan penulisan synchronus.
* Await adalah sebuah keyword yang terdapat pada async function yang tujuannya menghentikan eksekusi sambil menunggu promise-nya selesai

## DOM
Document Object Model (DOM) adalah API untuk HTML yang merepresentasikan halaman web pada suatu dokumen menjadi sebuah object.
* DOM Selection Method

| Event | Kegunaan |
| ----------- | --------- |
| getElementById() | Element |
| getElementByTagName() | HTMLCollection |
| getElementByClassName() | HTMLCollection |
| querySelector() | Element |
| querySelectorAll() | nodeList |

* DOM Manipulation

| Event | Kegunaan |
| ----------- | --------- |
| element.innerHTML | Merubah isi dari tag yang sudah diseleksi |
| element.style.< propertyCSS > | Merubah style dari tag yang sudah diseleksi |
| element.setAttribute() | Mengelola/memanipulasi attribute yang sudah diseleksi |
| element.classList.add() | Mengelola/memanipulasi class yang sudah diseleksi |

* DOM Event

| Event | Kegunaan |
| ----------- | --------- |
| onclick | Digunakan ketika user mengklik mouse |
| onchange | Digunakan dalam kombinasi dengan validasi bidang input |
| onblur | Digunakan ketika user meninggalkan kolom input |
| onmouseover | Digunakan ketika user mengarahkan mouse ke atas suatu object |
| onmouseout | Digunakan ketika user mengarahkan mouse ke luar suatu object |
| oncopy | Digunakan ketika user mencopy suatu object |

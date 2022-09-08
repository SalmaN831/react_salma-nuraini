# Section 9 - Clean Code

## Clean Code
Clean code adalah istilah untuk kode yang mudah dibaca, diubah, dan dipahami oleh programmer.

## Karakteristik Clean Code
* Penamaan mudah dipahami
* Mudah dieja dan dicari
* Singkat namun mendeskripsikan konteks
* Konsisten
* Hidari penambahan konteks yang tidak perlu
* Komentar
* Good function
* Gunakan konvensi
* Formating 

## KISS (Keep It So Simple)
Hindari membuat fungsi yang dibuat untuk melakukan A, sekaligus memodifikasi B, mengecek fungsi C, dll.

Tips KISS
* function atau class harus kecil
* function dibuat untuk melakukan satu tugas saja
* Jangan terlalu banyak menggunakan argumen pada function
* Harus diperhatikan untuk mencapai kondisi yang seimbang, kecil, dan jumlahnya minimal

## DRY (Don't Repeat Yourself)
Duplikasi code terjadi karena sering copy paste. Untuk menghindari duplikasi code buatlah function yang dapat digunakan secara berulang-ulang

Refactoring adalah proses restructurisasi kode yang dibuat, dengan cara mengubah struktur internal tanpa mengubah perilaku eksternal. prinsip KISS dan DRY dapat dicapai dengan cara refactor

Teknik refactoring
* Membuat sebuah abstraksi
* Memecah kode dengan function/class
* Perbaiki penamaan dan lokasi kode
* Deteksi kode yang memiliki duplikasi

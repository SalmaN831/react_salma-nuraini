# Penjelasan
## Nomer 1
1. Input (Bil) digunakan untuk memasukkan inputan berupa bilangan
2. Selection digunakan untuk mengecek jika bil = 1 maka akan mencetak "Bil Prima", jika bukan maka akan diteruskan
3. Bilangan yang melewati selection pertama dilakukan pengecekan kembali menggunakan selection dengan kondisi jika Bil adalah bilangan 2, 3, 5, 7 maka akan mencetak "Bil Prima", jika bukan maka akan diteruskan
4. Terakhir dilakukan pengecekan lagi untuk memeriksa apakah bilangan habis dibagi dengan 2, 3, 5, 7, jika iya maka akan mencetak "Bukan Bil Prima", jika tidak maka aka mencetak "Bil Prima"

## Nomer 2
1. Input jumlah tombol (N) digunakan untuk memasukkan jumlah tombol sejumlah N
2. i = 1, dimana i adalah tombol ke-i yang ditekan
3. lampu = "mati", digunakan untuk memberikan kondisi kepada lampu
4. Looping digunakan hingga mencapai i > N
5. Kemudian digunakan selection untuk mengecek apakah N habis dibagi i, jika iya maka akan diteruskan ke selection berikutnya yang berarti keadaan lampu akan berubah
6. Pada selection berikutnya dilakukan pengecekan terhadap kondisi lampu, apabila lampu = "mati" maka lampu akan berganti menjadi "nyala", jika tidak maka lampu akan tetap pada keadaan "mati"
7. Dilakuka penambahan i = i+1 yang berarti lampu berikutnya yang akan ditekan
8. Setelah kondisi i>N maka looping akan berhenti dan mencetak output berupa "Lampu" + lampu (kondisi lampu menyala/mati)

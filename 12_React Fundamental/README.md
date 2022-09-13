# Section 12 - React Fundamental

## JSX
JSX (Javascript XML) adalah ekstensi pada Javascript yang disarankan digunakan di React karena menggambarkan apa yang seharusnya tampak pada UI.

Kenapa menggunakan JSX 
* JSX dibuat berdasarkan fakta kalau logika rendering sangat terikat dengan logic UI
* Menggabungkan teknologi dan memisahkan sesuai keperluan

Spesifikasi pada JSX
* Kapitalisasi untuk komponen React
* Huruf kecil untuk komponen bawaan

## React Component
Komponen React adalah bagian kode yang dapat digunakan kembali yang digunakan untuk menentukan tampilan, behaviour, dan state sebagian UI

Membuat komponen pada react
* Function : function biasa pada Javascript
* Class : extend dari React component

## Component Kompotition
Props adalah singkatan dari properties yang membuat kita dapat memberikan argumen/data pada komponen

Props membantu untuk membuat komponen menjadi lebih dinamis

Props dioper ke komponen sama seperti memberi atribut atribut pada tag HTML

Props pada komponen adalah read-only dan tidak dapat diubah

One Way Data Flow : artinya komponen parent dapat mentransfer data melalui props ke komponen children, namun tidak sebaliknya

Komposisi komponen
* Kontainmen
* Spesialisasi

## React Lifecycle
React lifecycle adalah sederetan event yang terjadi dari awal komponen muncul sampai menghilang dari aplikasi

Siklus komponen react
* Render Phase : fungsi harus pure dan tidak ada side effect
* Pre-commit Phase : membaca DOM
* Commit Phase : pengolahan DOM dan melakukan side effect

Lifecycle method
* render() : required pada class component
* componentDidMount() : dipanggil ketika component sudah di render untuk pertama kali
* componentDidUpdate() : dipanggil ketika terjadi update
* componentWillUnmount() : dipanggil ketika component akan dihancurkan

## Conditional
### Render Bersyarat
Pada React, kita dapat membuat komponen berbeda yang mencakup perilaku yang dibutuhkan. Lalu kita dapat merender beberapa bagian saja berdasarkan state dari aplikasi.
* Menggunakan If
* Inline If dengan operator &&
* Inline If-Else dengan ternary conditional operator
* Mencegah komponen untuk rendering

### Render List
Kita dapat membangun koleksi dari beberapa elemen dan menyertakannya dalam JSX menggunakan tanda kurung kurawal {}

### Key

## Directory Structure
Pendekatan tentang cara memasukkan file ke dalam folder
* Pengelompokan berdasarkan fitur atau rute
* Pengelompokan berdasarkan jenis file

Tips menentukan file structure
* Hindari terlalu banyak nesting
* Jangan terlalu memikirkannya

## Styling Inline
* Classes dan CSS
* Atribut style
* Modul CSS

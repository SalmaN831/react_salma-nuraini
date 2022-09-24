# Section 15 - React Routing

## Router
Router merupakan modul pada react yang berfungsi melakukan proses navigasi pada SPA (Single Page Application).

MPA (Multi Page Application) juga disebut tradisional web app adalah jenis aplikasi website dimana perlu memuat ulang seluruh halaman web setiap kali membuat permintaan baru.

SPA (Single Page Application) adalah salah satu jenis aplikasi website dimana hanya ada satu halaman yang menangani semua aktivitas yang terjadi dalam aplikasi tersebut.

Keunggulan SPA dan MPA
| SPA | MPA |
| --- | --- |
| Waktu loading website jauh lebih cepat | SEO website akan lebih mudah dioptimasi |
| Tidak ada query tambahan ke server | Memudahkan untuk mengubah halaman tertentu untuk setiap kebutuhan yang berbeda |
| Front-end yang cepat dan responsif | Menggunakan tools analisis seperti Google Analytics yang terintegrasi langsung dengan website |
| Meningkatkan pengalaman pengguna | |

Kekurangan SPA dan MPA
| SPA | MPA |
| --- | --- |
| Tidak bagus dalam hal SEO | Kecepatan download website jauh lebih lama dibandingkan dengan SPA |
| Berat saat di-load\buka pertama kali | Perlu mengintgrasikan front-end dan back-end |
| Kurang aman dibanding dengan website biasa | Lebih sering membutuhkan maintenance dan update |
| Masalah kompatibilitas browser | Mungkin akan lebih sering menemukan masalah performa pada website |

Komponen yang digunakan
* BrowserRouter : digunakan sebagai router yang menggunakan API history dari HTML 5, sehingga dapat menggunakan location untuk sinkronkan UI dengan url.
* Route : digunakan sebagai pengarah jalannya lalu lintas suatu aplikasi web.
* Switch : digunakan untuk membungkus kumpulan beberapa komponen Route.
* Link : digunakan untuk berpindah antar halaman, property to tersebut merujuk pada path di route yang akan dituju.

## Use url params in React
Parameter url adalah suatu parameter yang nilainya ditetapkan secara dinamis di URL halaman.

Perbedaan Link dan Redirect
| Link | Redirect |
| --- | --- |
| Dapat digunakan pada kondisi apapun | Lebih sering digunakan pada halaman 404 |
| Memberikan history baru pada browser | Menimpa history pada browser |
| Bereaksi dengan click seperti a href | Bereaksi dengan suatu kondisi |

## Hook routing react
* useHistory : memberi akses ke instance riwayat yang dapat digunakan sebagai navigasi.
* useLocation : mengembalikan objek lokasi yang mewakili url saat ini.
* useParams : mengembalikan objek pasangan kunci/nilai parameter url.
* useRouteMatch : mencoba mencocokkan url saat ini dengan cara yang sama seperti < Route >.

## Hasil Praktikum
![Hasil](https://user-images.githubusercontent.com/79805395/192106844-e70f6a42-01e2-4f40-bf5b-c92e1c8c7ea2.png)

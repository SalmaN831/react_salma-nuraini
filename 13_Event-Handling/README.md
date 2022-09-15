# Section 13 - Event Handling

## State
State adalah data privat sebuah component. Data ini hanya tersedia untuk component tersebut dan tidak bisa diakses dari component lain

Tentang state :
1. Dapat dimodifikasi menggunakan setState
2. Setiap terjadi modifikasi maka akan dilakukan render ulang
3. Bersifat asynchronus
4. Dipakai dalam class

Perbedaan props dan state
| Props | State |
| ----- | ----- |
| bersifat read-only | dapat diubah dengan cara asynchronus |
| tidak dapat diubah | diubah menggunakan fungsi this.setState |

## Statefull dan Stateless
Stateful component adalah component yang memiliki state. Component ini dibuat dengan class. Kelebihan dari class component adalah memiliki lifecycle.

Stateless component adlaah component yang tidak memiliki state hanya props. Umumnya component ini dibuat dengan function karena codenya lebih ringkas.

Perbedaan Component Stateful dan Stateles
| Stateful | Stateless |
| ----- | ----- |
| Mengerti tentang aplikasi | Tidak tahu tentang aplikasi |
| Melakukan data fetching | Tidak melakukan data fecthing |
| Berinteraksi dengan aplikasi | Tujuan utamanya adalah visualisasi |
| Tidak dapat digunakan kembali | Dapat digunakan kembali |
| Meneruskan status dan data ke anaknya | Hanya berkomunikasi dengan induk langsungnya |

## Event Handling
Handling Event adalah suatu metode untuk menangani sebuah event/aksi yang diberikan pengguna kepada suatu komponen.

Event adalah suatu peristiwa yang dipicu oleh pengguna pada suatu komponen, misalnya tombol ditekan.

Beberapa contoh list event
* Clipboard Events (promise terpenuhi)
* Form Event (onChange, onSubmit)
* Mouse Event (onClick, onDoubleClick, onMouseOver)
* Generic Event (onError, onLoad)

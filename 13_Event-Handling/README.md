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


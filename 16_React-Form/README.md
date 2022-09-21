# Section 16 - React Form

Form merupakan salah satu hal kruian dalam pengembangan website. Form dapat digunakan untuk menghandle inputan dari user.

Macam form :
* Input
* Text Area
* Select
* Radio Button
* Checkbox

Controlled component adalah sebuah elemen masukan form yang nilainya dikontrol oleh React.

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

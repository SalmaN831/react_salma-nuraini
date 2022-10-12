# Section 19 - Deployment

## Build React App
Tujuan melakukan build adalah agar aplikasi kita menjadi versi production, sehingga performanya lebih ringan dan cepat.

Untuk melakukan build dapat menggunakan "npm run build", namun untuk pengembangan normal gunakan "npm start"

Untuk menjalankan aplikasi yang optimal di lokal kompuetr kita, kita dapat menggunakan serve

* npm install -g serve : untuk menginstall serve
* serve -s build : untuk menjalankan serve di lokal

## Deployment
Deployment adalah kegiatan yang bertujuan untuk menyebarkan aplikasi yang sudah kita buat. Harapannya aplikasi tersebut dapat diakses oleh banyak orang, tidak hanya kita sendiri.

### Deployment dengan Surge
Surge adalah layanan penerbit website statik gratis untuk front-end developers

Cara deployment dengan surge :
1. Memastikan node versi terbaru
2. Instal Surge di terminal dengan "npm instal --global surge"
3. Jalankan perintah Surge di terminal

### Deployment dengan Netlify
Netifly adalah salah satu platform penyedia layanan build tools sekaligus Continous Deployment.

Cara deployment dengan Netlify :
1. Buat akun netifly (www.netlify.com)
2. Install netlify CLI di terminal dengan "npm install netlify-cli -g"
3. Jalankan perintah netlify deploy di terminal
4. Verifikasi akun menggunakan browser, pilih authorized
5. Pilih "Create & Configure a new site". Untuk team pilih yang suda tersedia. Site name opsional
6. Pilih lokasi file yang akan dideploy. Pilih ./build

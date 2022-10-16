# Praktikum GraphQL-Basic
## Tabel Anggota
![no 4](https://user-images.githubusercontent.com/79805395/196043581-aa23b1d2-eaf6-4433-89bf-ee9df5bc2c85.png)

## Tabel Keterangan
![no 5](https://user-images.githubusercontent.com/79805395/196043589-496cad0a-5569-466b-80c4-7303012ba7d6.png)

## Menampilkan siswa dengan status true
![no 6](https://user-images.githubusercontent.com/79805395/196043591-720823f1-7ccb-42c3-b531-545df667df1f.png)

### Query
query MyQuery($_eq: Boolean = true) {
  kampus_merdeka_keterangan(where: {status: {_eq: $_eq}}) {
    anggotum {
      nama
    }
    status
  }
}

### Hasil Query
{
  "data": {
    "kampus_merdeka_keterangan": [
      {
        "anggotum": {
          "nama": "Budi"
        },
        "status": true
      },
      {
        "anggotum": {
          "nama": "Sita"
        },
        "status": true
      }
    ]
  }
}

## Insert data Angga
![no 7](https://user-images.githubusercontent.com/79805395/196043592-a4a91d0b-abee-4419-9b3e-eac334091c96.png)

### Query
mutation MyMutation($object: kampus_merdeka_keterangan_insert_input!) {
  insert_kampus_merdeka_keterangan_one(object: $object) {
    id
  }
}

### Query Variable
{
  "object": {
    "id_anggota": 3,
    "pelajaran": "Sistem Informasi",
    "nilai": 90,
    "status": true
  }
}

{
  "object": {
    "id_anggota": 3,
    "pelajaran": "React",
    "nilai": 55,
    "status": false
  }
}

### Hasil Query
{
  "data": {
    "insert_kampus_merdeka_keterangan_one": {
      "id": 5
    }
  }
}

{
  "data": {
    "insert_kampus_merdeka_keterangan_one": {
      "id": 6
    }
  }
}

![no 5](https://user-images.githubusercontent.com/79805395/196043589-496cad0a-5569-466b-80c4-7303012ba7d6.png)

## Update status false ke true
![no 8](https://user-images.githubusercontent.com/79805395/196043594-596c9f23-34ff-4fc0-b25b-9020a95726ae.png)

### Query
mutation MyMutation($_eq: Boolean = false, $status: Boolean = true) {
  update_kampus_merdeka_keterangan(where: {status: {_eq: $_eq}}, _set: {status: $status}) {
    returning {
      id
      status
    }
  }
}

### Hasil Query
{
  "data": {
    "update_kampus_merdeka_keterangan": {
      "returning": [
        {
          "id": 2,
          "status": true
        },
        {
          "id": 4,
          "status": true
        },
        {
          "id": 6,
          "status": true
        }
      ]
    }
  }
}

![no 8 1](https://user-images.githubusercontent.com/79805395/196043593-f756d5d6-5b27-4428-bb53-ae22319306ee.png)

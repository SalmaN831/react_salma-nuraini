import React, { useState, useRef } from 'react'
import "./style.css"

export default function Form() {

  const baseData = {
    nama: "",
    email: "",
    noHandphone: "",
    pendidikan: "",
    kelas: "",
    harapan: ""
  } 

  const baseError = {
    nama: "",
    email: "",
    noHandphone: ""
  }

  const suratKesungguhan = useRef('');

  const [data, setData] = useState(baseData);

  const [errorMassage, setErrorMassage] = useState(baseError);

  const regexNama = /^[A-Za-z ]*$/
  const regexEmail = /^([a-z0-9_-]+)@([\da-z-]+)\.([a-z]{2,6})$/
  const regexNomor = /^(\+62|62)?[\s-]?0?8[1-9]{1}\d{1}[\s-]?\d{4}[\s-]?\d{2,5}$/

  const handleInput = e => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "nama") {
      if (regexNama.test(value)) {
        setErrorMassage("")
      } else {
        setErrorMassage("Nama harus berupa huruf")
      }
    }

    if (name === "email") {
      if (regexEmail.test(value)) {
        setErrorMassage("")
      } else {
        setErrorMassage("Email tidak sesuai")
      }
    }

    if (name === "noHandphone") {
      if (regexNomor.test(value)) {
        setErrorMassage("")
      } else {
        setErrorMassage("No Handphone tidak sesuai")
      }
    }

    setData({
      ...data,
      [name]: value
    })
    console.log("data", data)
  }

  const handleSubmit = (event) => {
    if (errorMassage !== "") {
      alert("Terdapat data yang tidak sesuai")
    } else {
      alert("Data berhasil disimpan")
    }
    event.preventDefault()
  }

  const resetData = () => {
    setData(baseData);
    setErrorMassage("")
  }

  return (
    <>
    <h1 className='center'>Pendaftaran Peserta Coding Bootcamp</h1>
    <form onSubmit={handleSubmit}>
        <label className='input'>
          Nama Lengkap:
          <input type="text" name="nama" value={data.nama} onChange={handleInput} required />
        </label>
        <label className='input'>
          Email:
          <input type="text" name="email" value={data.email} onChange={handleInput} required />
        </label>
        <label className='input'>
          No Hanphone:
          <input type="text" name="noHandphone" value={data.noHandphone} onChange={handleInput} required />
        </label>
        <label className='input'>
          Latar Belakang Pendidikan:
          <div>
            <input type="radio" name="pendidikan" value="IT" onChange={handleInput} />IT
            <input type="radio" name="pendidikan" value="Non IT" onChange={handleInput} />Non IT
          </div>
        </label>
        <label className='input'>
          Kelas Coding yang Dipilih:
          <select required type="text" name="kelas" value={data.kelas} onChange={handleInput}>
            <option value="golang">Coding Backend with Golang</option>
            <option value="react">Coding Frontend with ReactJS</option>
            <option value="fullstack">Fullstack Developer</option>
          </select>
        </label>
        <label className='input'>
          Foto Surat Kesungguhan:
          <input type="file" ref={suratKesungguhan} required></input>
        </label>
        <label className='input'>
          Harapan untuk Coding Bootcamp ini:
          <textarea name='harapan' value={data.harapan} onChange={handleInput} ></textarea>
        </label>
        <div className='error-message'>{errorMassage}</div>
        <div className='btn'>
          <input type="submit" className='btn-submit' value="Submit" required />
          <button className='btn-reset' onClick={resetData}>Reset</button>
        </div>
    </form>
    </>
  )
}
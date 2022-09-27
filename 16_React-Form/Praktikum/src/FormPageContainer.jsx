import React, { useState } from "react";
import FormPage from "./FormPage.jsx";

const FormPageContainer = () => {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    noHP: "",
    latbel: "",
    harapan: ""
  });

  const handleChangeFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    const form  = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preentDefault();
      e.stopPropagation();
    }
    e.preentDefault();
  }
  return(
    <FormPage nama={formData.nama}
              email={formData.email}
              noHP={formData.noHP}
              harapan={formData.harapan}
              handleSubmit={handleSubmit}
              handleChange={handleChangeFormData}/>
  )
}

export default FormPageContainer;

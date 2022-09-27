import React from "react";
import { Button, Form, Stack, Dropdown, DropdownButton } from "react-bootstrap";

const FormPage = (
  {
    nama,
    email,
    noHP,
    harapan,
    handleChange,
    handleSubmit
  }
) => {
  return (
    <Stack gap={3} className="m-5">
      <h1 className="text-center">Pendaftaran Peserta Coding Bootcamp</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex flex-column align-items-start">
          <Form.Label>Nama Lengkap</Form.Label>
          <Form.Control
            name="nama"
            type="text"
            value={nama}
            onChange={(e) => handleChange(e)}
            required/>
        </Form.Group>
        <Form.Group className="mb-3 d-flex flex-column align-items-start">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            value={email}
            onChange={(e) => handleChange(e)}
            required/>
        </Form.Group>
        <Form.Group className="mb-3 d-flex flex-column align-items-start" >
          <Form.Label>No. Handphone</Form.Label>
          <Form.Control
            name="noHP"
            type="text"
            value={noHP}
            required
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3 d-flex flex-column align-items-start" >
          <Form.Label>Latar Belakang Pendidikan</Form.Label>
          <Stack gap={3} direction="horizontal">
            <Form.Check
              name="latbel"
              type="radio"
              label="IT"
              value="it"
              required
              onChange={(e) => handleChange(e)}
            />
            <Form.Check
              name="latbel"
              type="radio"
              label="Non IT"
              value="non"
              required
              onChange={(e) => handleChange(e)}
            />
          </Stack>
        </Form.Group>
        <Form.Group className="mb-3 d-flex flex-column align-items-start">
          <Form.Label>Kelas Coding yang Dipilih</Form.Label>
          <DropdownButton id="dropdown-item-button" title="Pilih Kelas">
            <Dropdown.Item as="button">Coding Backend with Golang</Dropdown.Item>
            <Dropdown.Item as="button">Coding Frontend with Reactjs</Dropdown.Item>
            <Dropdown.Item as="button">Fullstack Developer</Dropdown.Item>
          </DropdownButton>
        </Form.Group>
        <Form.Group className="mb-3 d-flex flex-column align-items-start">
          <Form.Label>Foto Surat Kesungguhan</Form.Label>
          <Form.Control
            name="foto"
            type="file"
            />
        </Form.Group>
        <Form.Group className="mb-3 d-flex flex-column align-items-start">
          <Form.Label>Harapan</Form.Label>
          <Form.Control as="textarea"
            name="harapan"
            type="text"
            value={harapan}
            onChange={(e) => handleChange(e)}
            required/>
        </Form.Group>
        <Button variant="success" type="submit">Submit</Button>
        <Button variant="danger" type="submit">Reset</Button>
      </Form>
    </Stack>
  )
}

export default FormPage;

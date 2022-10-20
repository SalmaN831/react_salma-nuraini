
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import NameForm from "./FormCoding";

describe('NameForm', () => {
    test('renders NameForm component', () => {
        render(<NameForm/>)
        // screen.debug()
        expect(screen.getByText('Pendaftaran Peserta Coding Bootcamp')).toBeInTheDocument;
        expect(screen.getByLabelText(/Nama/)).toBeInTheDocument;
    });

    test('input text for nama', () => {
        render(<NameForm/>)
        // screen.debug()
        fireEvent.input(
            screen.getByRole("textbox", {name: /nama/i}), 
            {target: {value: "Salma"}})

        fireEvent.input(
            screen.getByRole("textbox", {name: /email/i}), 
            {target: {value: "salmanuraini00@gmail.com"}})

        expect(screen.getByLabelText(/Nama/)).toHaveValue("Salma");
        expect(screen.getByLabelText(/Email/)).toHaveValue("salmanuraini00@gmail.com");
    });

    test('input text for nama with number', () => {
        render(<NameForm/>)
        // screen.debug()
        fireEvent.input(
            screen.getByRole("textbox", {name: /nama/i}), 
            {target: {value: "Salma1"}})

        fireEvent.input(
            screen.getByRole("textbox", {name: /email/i}), 
            {target: {value: "salmanuraini00@gmail.com"}})

        expect(screen.getByLabelText(/Nama/)).toHaveValue("Salma1");
        expect(screen.getByLabelText(/Email/)).toHaveValue("salmanuraini00@gmail.com");
        expect(screen.getByText("Nama Lengkap Harus Berupa Huruf")).toBeInTheDocument();
    });

    test('submit button', () => {
        render(<NameForm/>)
        // screen.debug()
        fireEvent.input(
            screen.getByRole("textbox", {name: /nama/i}), 
            {target: {value: "Salma"}})

        fireEvent.input(
            screen.getByRole("textbox", {name: /email/i}), 
            {target: {value: "salmanuraini00@gmail.com"}})

        expect(screen.getByLabelText(/Nama/)).toHaveValue("Salma");
        expect(screen.getByLabelText(/Email/)).toHaveValue("salmanuraini00@gmail.com");

        // fireEvent.click(screen.getByRole("button"))
        // expect(screen.getByLabelText(/Nama/)).toHaveValue("");
        // expect(screen.getByLabelText(/Email/)).toHaveValue("");
    });
})
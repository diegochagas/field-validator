# Field Validator

Library with functions to validate input fields in JavaScript.

## Used technologies

- JavaScript

## Check if email is valid

The function return true if an email is valid.

`emailIsValid('teste@teste.com') = true`

## Check if CPF is valid

The function return true if a a brazilian CPF ('Cadastro de Pessoa Física' or 'Individual Registration in English') is valid.

`CPFIsValid('000.000.000-00') = false`

## Check if CNPJ is valid

The function return true if a a brazilian CNPJ ('Cadastro Nacional de Pessoa Jurídica' or National Register of Legal Entities in English) is valid.

`CNPJIsValid("00.000.000/0001-00") = false`

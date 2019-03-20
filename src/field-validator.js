function emailIsValid(fieldValue) {
  const regexEmail = /^[\w!#$%&'*+\/=?^`{|}~-]+(\.[\w!#$%&'*+\/=?^`{|}~-]+)*@(([\w-]+\.)+[A-Za-z]{2,6}|\[\d{1,3}(\.\d{1,3}){3}\])$/;
  const isValid = !regexEmail.test(fieldValue) ? false : true;
  return isValid;
}

const removeIfHasCharacter = (regex, text) => (regex.test(text)) ? text.replace(regex, "") : text;

function removeDotsAndHyphens(text){
  text = removeIfHasCharacter(/\./g, text);
  text = removeIfHasCharacter(/-/, text);
  text = removeIfHasCharacter(/\//g, text);
  return text;
}

function allCharactersAreEqual (text){
  let sameCharacters = true;
  for (let i = 0; i < text.length - 1; i++) {
    if (text.charAt(i) !== text.charAt(i + 1)) {
      sameCharacters = false;
      break;
    }
  }
  return sameCharacters;
}

function validateDigitCPF(cpf, lastPositionToCheck, positionDigit){
  let digits = cpf.substring(9);
  let size = lastPositionToCheck + 1;
  let numbers = cpf.substring(0, lastPositionToCheck);
  let sum = 0;
  for (let i = size; i > 1; i--) {
    sum += numbers.charAt(size - i) * i;
  }
  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  return result === parseInt(digits.charAt(positionDigit));
}

function validateDigitCNPJ(cnpj, size, positionDigit) {
  let numbers = cnpj.substring(0, size);
  let digits = cnpj.substring(cnpj.length - 2);
  let sum = 0;
  let pos = size - 7;
  for (let i = size; i >= 1; i--) {
    sum += numbers.charAt(size - i) * pos--;
    if (pos < 2) {
      pos = 9;
    }
  }
  result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  return result === parseInt(digits.charAt(positionDigit));
}

const firstDigitCPFIsValid = (cpf) => validateDigitCPF(cpf, cpf.length - 2, 0);
const secondDigitCPFIsValid = (cpf) => validateDigitCPF(cpf, cpf.length - 1, 1);
const firstDigitCNPJIsValid = (cnpj) => validateDigitCNPJ(cnpj, cnpj.length - 2, 0);
const secondDigitCNPJIsValid = (cnpj) => validateDigitCNPJ(cnpj, cnpj.length - 1, 1);

function CPFIsValid(CPF) {
  CPF = removeDotsAndHyphens(CPF);
  if (CPF.length < 11 ||
        allCharactersAreEqual(CPF) || 
        !firstDigitCPFIsValid(CPF) || 
        !secondDigitCPFIsValid(CPF)) {
    return false;
  }
  return true; 
}

function CNPJIsValid(cnpj) {
  cnpj = removeDotsAndHyphens(cnpj);
  if (allCharactersAreEqual(cnpj) ||
        !firstDigitCNPJIsValid(cnpj) ||
        !secondDigitCNPJIsValid(cnpj)) {
    return false;
  } else {
    return true;
  }
}

// Functon to jump from next field
function jumpField(next, maxSize, event) {
  if (event.value.length >= maxSize) {
    // Change focus from next component
    next.focus();
  }
}


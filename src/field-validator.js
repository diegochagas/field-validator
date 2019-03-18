function emailIsValid(fieldValue) {
  const regexEmail = /^[\w!#$%&'*+\/=?^`{|}~-]+(\.[\w!#$%&'*+\/=?^`{|}~-]+)*@(([\w-]+\.)+[A-Za-z]{2,6}|\[\d{1,3}(\.\d{1,3}){3}\])$/;
  const isValid = !regexEmail.test(fieldValue) ? false : true;
  return isValid;
}

function removeDotsAndHyphens(text){
  text = text.replace(/\./g, "");
  text = text.replace(/-/, "");
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

function validateDigitCPF(cpf, actualLastPosition, positionDigit){
  let digits = cpf.substring(9);
  let lastPosition = actualLastPosition + 1;
  let numbers = cpf.substring(0, actualLastPosition);
  let sum = 0;
  for (let i = lastPosition; i > 1; i--) {
    sum += numbers.charAt(lastPosition - i) * i;
  }
  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  return result === parseInt(digits.charAt(positionDigit));
}

const firstDigitCPFIsValid = (cpf) => validateDigitCPF(cpf, 9, 0);
const secondDigitCPFIsValid = (cpf) => validateDigitCPF(cpf, 10, 1);

function CPFIsValid(cpf) {
  cpf = removeDotsAndHyphens(cpf);
  if (cpf.length < 11) {
    return false;
  }
  if ( allCharactersAreEqual(cpf) || 
  !firstDigitCPFIsValid(cpf) || 
  !secondDigitCPFIsValid(cpf)) {
    return false;
  }
  return true; 
}

function cnpjValidate(cnpj) {
// Remove dots and hyphens from number
cnpj = cnpj.replace(/\./g, "");
cnpj = cnpj.replace(/-/, "");
cnpj = cnpj.replace(/\//g, "");

var numbers, digits, sum, i, result, pos, size, same_digits;
same_digits = 1;
if (cnpj.length < 14 && cnpj.length < 15) return false;
for (i = 0; i < cnpj.length - 1; i++)
if (cnpj.charAt(i) != cnpj.charAt(i + 1)) {
  same_digits = 0;
  break;
}
if (!same_digits) {
size = cnpj.length - 2;
numbers = cnpj.substring(0, size);
digits = cnpj.substring(size);
sum = 0;
pos = size - 7;
for (i = size; i >= 1; i--) {
  sum += numbers.charAt(size - i) * pos--;
  if (pos < 2) pos = 9;
}
result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
if (result != digits.charAt(0)) return false;
size = size + 1;
numbers = cnpj.substring(0, size);
sum = 0;
pos = size - 7;
for (i = size; i >= 1; i--) {
  sum += numbers.charAt(size - i) * pos--;
  if (pos < 2) pos = 9;
}
result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
if (result != digits.charAt(1)) return false;
return true;
} else return false;
}

// Functon to jump from next field
function jumpField(next, maxSize, event) {
if (event.value.length >= maxSize) {
// Change focus from next component
next.focus();
}
}
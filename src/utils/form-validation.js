export const alphabetValidate = (e) => {
  const keyCode = e.keyCode || e.which;
  const keyValue = String.fromCharCode(keyCode);
  const isAlphabet = /^[A-Za-z.']$/.test(keyValue);
  if (
    e.target.value.length === 0 &&
    keyValue === " " &&
    e.target.value[0] !== " "
  ) {
    e.preventDefault();
  } else if (
    e.target.value.length === 0 &&
    keyValue === "." &&
    e.target.value[0] !== "."
  ) {
    e.preventDefault();
  } else if (
    e.target.value.length === 0 &&
    keyValue === "'" &&
    e.target.value[0] !== "'"
  ) {
    e.preventDefault();
  } else if (keyValue === "." || keyValue === "'") {
    // Prevent consecutive dots, commas, or apostrophes
    const lastChar = e.target.value[e.target.value.length - 1];
    if (lastChar === "." || lastChar == "'") {
      e.preventDefault();
    }
  } else if (
    isAlphabet ||
    (keyValue === " " && !e.target.value.endsWith(" "))
  ) {
    return;
  } else {
    e.preventDefault();
  }
};

export const numberFormatValidate = (e) => {
  const keyCode = e.keyCode || e.which;
  const keyValue = String.fromCharCode(keyCode);
  const input = e.target.value;

  if (
    e.target.value.length === 0 &&
    keyValue === " " &&
    e.target.value[0] !== " "
  ) {
    e.preventDefault();
    return;
  }
  // Allow only digits, parentheses, spaces, and hyphens
  // eslint-disable-next-line no-useless-escape
  if (!/[\d\(\)\-\s]/.test(keyValue)) {
    e.preventDefault();
    return;
  }

  // Ensure the format matches (XXX) XXX-XXXX
  const cleanedInput = input.replace(/\D/g, ""); // Remove all non-digit characters

  // Restrict input based on length and placement of characters
  if (cleanedInput.length >= 10) {
    e.preventDefault(); // Stop input after 10 digits
    return;
  }

  // Formatting logic
  let formattedInput = "";

  if (cleanedInput.length < 4) {
    formattedInput = `(${cleanedInput}`;
  } else if (cleanedInput.length < 7) {
    formattedInput = `(${cleanedInput.slice(0, 3)}) ${cleanedInput.slice(3)}`;
  } else {
    formattedInput = `(${cleanedInput.slice(0, 3)}) ${cleanedInput.slice(
      3,
      6
    )}-${cleanedInput.slice(6)}`;
  }

  e.target.value = formattedInput;
};

export const phoneNumberValidate = (e, maxLength = 10) => {
  const keyCode = e.keyCode || e.which;
  const keyValue = String.fromCharCode(keyCode);
  const disallowedCharacters = /[^0-9]/;

  if (disallowedCharacters.test(keyValue)) {
    e.preventDefault();
  }

  const input = e.target.value;
  if (input.length >= maxLength) {
    e.preventDefault();
  }
};


export const spaceValidate = (e) => {
  const keyCode = e.keyCode || e.which;
  const keyValue = String.fromCharCode(keyCode);
  const isAlphabet = /\s/.test(keyValue);
  if (isAlphabet) {
    e.preventDefault();
  }
};
// Initial space not allow validation
export const initialSpaceValidate = (e) => {
  const keyCode = e.keyCode || e.which;
  const keyValue = String.fromCharCode(keyCode);
  const isAlphabet = /\s/.test(keyValue);
  if (e.target.value.length === 0 && keyValue === ' ' && e.target.value[0] !== ' ') {
    e.preventDefault();
  } else if (!isAlphabet || (keyValue === ' ' && !e.target.value.endsWith(' '))) {
    return;
  } else {
    e.preventDefault();
  }
};
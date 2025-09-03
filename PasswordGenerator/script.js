let pass = document.getElementById("password");
let copyBtn = document.getElementById("copyBtn");
let lengthSlider = document.getElementById("lengthSlider");
let lengthValue = document.getElementById("lengthValue");
let uppercase = document.querySelector(".uppercase");
let lowercase = document.querySelector(".lowercase");
let numbers = document.querySelector(".numbers");
let symbols = document.querySelector(".symbols");
let duplicateCharacters = document.querySelector(".characters");
let generateBtn = document.querySelector(".generate-btn");


copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(pass.value);
  alert("Password Copied to Clipboard");
});

lengthValue.textContent = lengthSlider.value;
lengthSlider.addEventListener("input", () => {
  lengthValue.textContent = lengthSlider.value;
});

let isValidElement = (val) => {
  if (val.length !== parseInt(lengthSlider.value)) {
    return false;
  }
  if (!/[A-Z]/.test(val) && uppercase.checked) {
    return false;
  }
  if (!/[a-z]/.test(val) && lowercase.checked) {
    return false;
  }
  if (!/[0-9]/.test(val) && numbers.checked) {
    return false;
  }
  if (!/[^A-Za-z0-9]/.test(val) && symbols.checked) {
    return false;
  }
  if (duplicateCharacters.checked) {
    let charSet = new Set(val);
    if (charSet.size !== val.length) {
      return false; // duplicate found
    }
  }

  return true;
};

generateBtn.addEventListener("click", () => {
  let val = pass.value;
  if (isValidElement(val)) {
    alert("Password Generated Successfully");
  } else {
    alert("Password is not Valid");
  }
});

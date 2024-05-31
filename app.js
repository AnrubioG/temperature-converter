// ----------------------- Selectores del DOM ----------------------- //
const from = document.querySelector("#form");
const select = document.querySelector("#select");
const input = document.querySelector("#input");
const submit = document.querySelector("#submit");
const tempOne = document.querySelector("#tempOne");
const tempTwo = document.querySelector("#tempTwo");
const resultcontainer = document.querySelector("#result");

// ----------------------- validate inpu ----------------------- //
input.addEventListener("input", function (e) {
  const value = e.target.value;
  if (!/^-?\d*\.?\d*$/.test(value)) {
    input.value = "";
  }
});

// -----------------------  ----------------------- //
from.addEventListener("submit", (e) => {
  e.preventDefault();
  const degrees = Number(input.value);
  const unit = select.value;
  if (degrees === "" || unit === "") {
    alert("Completa todos los campos");
  } else {
    switch (unit) {
      case "1":
        tempOne.textContent = `Los F° son ${(degrees * 9) / 5 + 32}`;
        tempTwo.textContent = `Los K° son ${degrees + 273.15}`;
        break;
      case "2":
        tempOne.textContent = `Los C° son ${((degrees - 32) * 5) / 9}`;
        tempTwo.textContent = `Los K° son ${((degrees - 32) * 5) / 9 + 273.15}`;
        break;
      case "3":
        tempOne.textContent = `Los C° son ${degrees - 273.15}`;
        tempTwo.textContent = `Los F° son ${((degrees - 273.15) * 9) / 5 + 32}`;
        break;
      default:
        break;
    }
  }
});

const form = document.querySelector("form");
const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");

const country = document.getElementById("country");
const countryError = document.querySelector("#country + span.error")

const zip = document.getElementById("zip");
const zipError = document.querySelector("#zip + span.error");

email.addEventListener("input", (e) => {
  if (email.validity.valid) {
    emailError.textContent = "";
  } else {
    showError(email, emailError);
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function showError(element, errorSpan) {
  console.log(element.validity);

  if (element.validity.valueMissing) {
    errorSpan.textContent = "This field is empty.";
  } else if (element.validity.typeMismatch) {
    errorSpan.textContent = "Value doesn't match type";
  }
}

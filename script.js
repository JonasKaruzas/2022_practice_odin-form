const createAccountForm = document.getElementById("createAccountForm");
const passwordError = document.getElementById("password-error");
const passwordEl = document.querySelector("#createAccountForm #password");
const passwordContEl = document.querySelector(
  "#createAccountForm #passwordConfirm"
);

function displayError() {
  passwordError.style.display = "block";
  passwordEl.classList.add("error");
  passwordContEl.classList.add("error");
}

function removeError() {
  passwordError.style.display = "none";
  passwordEl.classList.remove("error");
  passwordContEl.classList.remove("error");
}

function passwordCheck(e) {
  e.preventDefault();

  const mainPassword = createAccountForm.elements.password.value;
  const confirmPassword = createAccountForm.elements.passwordConfirm.value;

  if (mainPassword !== confirmPassword) {
    displayError();
  } else {
    removeError();
  }
}

createAccountForm.addEventListener("submit", passwordCheck);

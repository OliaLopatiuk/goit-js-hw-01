const userForm = document.querySelector(".login-form");

userForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {email, password} = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
  return alert("The fields can't be empty!")
  }

  const user = {
    login: email.value,
    password: password.value,
  }

  console.log(user);

  event.currentTarget.reset();
};
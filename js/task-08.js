const userForm = document.querySelector(".login-form");

userForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {email, password} = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
  return alert("The fields can't be empty!")
  }

  console.log(`Login: ${email.value}, Password: ${password.value}`);

  event.currentTarget.reset();
};
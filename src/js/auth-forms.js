const nickLogInput = document.querySelector("#log-nick");
const passwordLogInput = document.querySelector("#log-password");
const errorLog = document.querySelector(".login__error");

const nameSignupInput = document.querySelector("#create-name");
const nickSignupInput = document.querySelector("#create-nick");
const passwordSignupInput = document.querySelector("#create-password");
const errorSignup = document.querySelector(".signup__error");
const successSignup = document.querySelector(".signup__success");

const loginUser = async e => {
  e.preventDefault();

  const response = await fetch("/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
    body: JSON.stringify({
      nick: nickLogInput.value,
      password: passwordLogInput.value
    })
  });

  const decoded = await response.json();
  const token = await decoded;

  if (token.err) {
    errorLog.innerHTML = token.err;
    return;
  }

  window.location.href = "/inbox";
};

const createUser = async e => {
  e.preventDefault();

  const response = await fetch("/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: nameSignupInput.value,
      nick: nickSignupInput.value,
      password: passwordSignupInput.value
    })
  });

  const decoded = await response.json();
  const created = await decoded;
  console.log(created);
  if (created.err) {
    errorSignup.innerHTML = created.err;
  }

  if (created.message) {
    successSignup.innerHTML = created.message;
    errorSignup.innerHTML = null;
    nameSignupInput.value = null;
    nickSignupInput.value = null;
    passwordSignupInput.value = null;
  }
};

const logoutUser = async e => {
  e.preventDefault();
  const response = await fetch("/logout", {
    method: "DELETE",
    credentials: "include"
  });
  window.location.href = "/";
};

export { loginUser, createUser, logoutUser };

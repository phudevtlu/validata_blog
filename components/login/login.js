import data from "../Data.js";

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const inputElement = document.querySelectorAll("input");
let isError = false;

// Validate from
function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Tên đăng nhập không được để trống");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email không được để trống");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email không hợp lệ");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Mật khẩu không được để trống");
  } else {
    setSuccessFor(password);
  }
  return isError;
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.classList.add("error");
  small.innerText = message;
  isError = true;
  return isError;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.classList.add("success");
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
function clearInput(inputElement) {
  inputElement.forEach((item) => {
    item.value = "";
    item.parentElement.classList.remove("success");
  });
}

// sign in

let isChecked = false;
// let currentUser = null;
const btnLogin = document.querySelector(".btn-login");

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  let isExist = false;

  let user = {
    username: username.value,
    email: email.value,
    password: password.value,
  };

  if (checkInputs()) {
    return null;
  } else {
    data.forEach((item, index) => {
      if (
        item.user.username == user.username &&
        item.user.email == user.email &&
        item.user.password == user.password
      ) {
        isExist = true;
      }
    });
    let json = JSON.stringify(user);

    if (isExist) {
      localStorage.setItem("index", json);
      location.href = "/components/home/home.html";
      clearInput(inputElement);
    } else {
      let listUsers = JSON.parse(localStorage.Users);
      listUsers.map((item, index) => {
        if (
          item.username == user.username &&
          item.password == user.password &&
          item.email == user.email
        ) {
          isChecked = true;
        }
      });

      if (isChecked) {
        localStorage.setItem("index", json);
        location.href = "/components/home/home.html";
      } else {
        alert("Đăng nhập thất bại");
        clearInput(inputElement);
      }
    }
  }
});

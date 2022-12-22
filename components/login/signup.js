import data from "../Data.js";

// const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const radioBtn = document.getElementById("radioBtn");
let isError = false;

// khi oninput => clear notice
const inputElement = document.querySelectorAll(".form-control input");

inputElement.forEach((item) => {
  if (
    (item.oninput = () => {
      const formControl = item.parentElement;
      const small = formControl.querySelector("small");
      formControl.classList.remove("error");
      small.innerText = "";
    })
  );
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

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

  if (password2Value === "") {
    setErrorFor(password2, "Mật khẩu không được để trống");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Mật khẩu không trùng khớp");
  } else {
    setSuccessFor(password2);
  }
  if (radioBtn.checked == false) {
    alert("Vui lòng xác nhận điều khoản");
    isError = true;
  } else {
    isError = false;
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
/// signup
const localUsers = [];
const btnSignUp = document.querySelector(".btn-signup");
btnSignUp.addEventListener("click", (e) => {
  e.preventDefault();
  let isExist = false;
  let user = {
    username: username.value,
    email: email.value,
    password: password.value,
  };
  //check ton tai
  if (checkInputs()) {
    return null;
  } else {
    data.forEach((item) => {
      if (item.user.username == user.username) {
        alert("Tên đăng nhập đã tồn tại");
        isExist = true;
        clearInput(inputElement);
      }
    });
    if (!isExist) {
      localUsers.push(user);
      let json = JSON.stringify(localUsers);
      localStorage.setItem("Users", json);
      clearInput(inputElement);
      alert("Đăng ký thành công");
      radioBtn.checked = false;
    }
  }
});

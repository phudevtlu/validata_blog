import data from "../Data.js";

// BẬT TẮT MENU
const btnMenu = document.querySelector(".menu-bar");
const overlay = document.querySelector(".overlay");
const info = document.querySelector(".info");
const exits = document.querySelector(".fa-xmark");

btnMenu.addEventListener("click", (e) => {
  overlay.classList.add("active");
  info.classList.add("active");
});

overlay.addEventListener("click", (e) => {
  overlay.classList.remove("active");
  info.classList.remove("active");
});

exits.addEventListener("click", (e) => {
  overlay.classList.remove("active");
  info.classList.remove("active");
});

///check user localStorage
const user = document.querySelector(".info-list").firstElementChild;
const signout = document.querySelector(".info-list").lastElementChild;

let listUsers = JSON.parse(localStorage.getItem("Users"));
let indexUser = JSON.parse(localStorage.getItem("index"));
let userIndex = null;
listUsers.map((item, index) => {
  if (
    item.username == indexUser.username &&
    item.password == indexUser.password &&
    item.email == indexUser.email
  ) {
    user.innerHTML = `<i class="fa-solid fa-user"></i>` + indexUser.username;
    user.classList.add("user");
    userIndex = index;
  }
});

// check user defaults
data.map((item, index) => {
  if (
    item.user.username == indexUser.username &&
    item.user.password == indexUser.password &&
    item.user.email == indexUser.email
  ) {
    user.innerHTML = `<i class="fa-solid fa-user"></i>` + indexUser.username;
    user.classList.add("user");
    userIndex = index;
  }
});

user.addEventListener("click", () => {
  window.location.href = "../profile/profile.html";
});
signout.addEventListener("click", () => {
  user.innerHTML = "Profile";
  localStorage.removeItem("index");
  user.classList.remove("user");
  location.href = "../index.html";
});
export default userIndex;

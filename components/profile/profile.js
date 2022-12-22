import data from "../Data.js";
import userIndex from "../home/home.js";

const profile = JSON.parse(localStorage.getItem("index"));
const profileName = document.querySelector(".header-profile-desc span");
profileName.innerText = profile.username;
const postContainer = document.querySelector(".profile-main");
const nonePost = document.querySelector(".profile-null");

let isPost = false;
data.map((item) => {
  if (item.user.username == profileName.innerHTML) {
    isPost = true;
    return;
  }
});

let postAuthor = document.querySelectorAll(".post-author p");
let postAuthorImg = document.querySelectorAll(".post-author img");
let postTitle = document.querySelectorAll(".post-title");
let postContent = document.querySelectorAll(".post-content");
let postContentImg = document.querySelectorAll(".post-body img");

if (isPost) {
  postContainer.classList.add("active");
  nonePost.classList.remove("active");
  data[userIndex].posts.map((item, index) => {
    postAuthor[index].innerText = item.author;
    postAuthorImg[index].src = item.avatar;
    postTitle[index].innerText = item.title;
    postContent[index].innerText = item.content;
    postContentImg[index].src = item.img;
    console.log(postAuthor[index].innerText);
  });
} else {
  postContainer.classList.remove("active");
  nonePost.classList.add("active");
}

const postItem = document.querySelectorAll(".profile-post-item");
console.log(postAuthor);

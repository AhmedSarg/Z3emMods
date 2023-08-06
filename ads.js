let lis = document.querySelectorAll("li");
let liHome = lis[0];
let liApps = lis[1];
let liGames = lis[2];
let liRequest = lis[3];
let liAbout = lis[4];
liHome.addEventListener("click", function () {
  window.location.assign("/home.html");
});
liApps.addEventListener("click", function () {
  window.location.assign("/apps.html");
});
liGames.addEventListener("click", function () {
  window.location.assign("/games.html");
});
liRequest.addEventListener("click", function () {
  window.location.assign("/request.html");
});

let itemName = sessionStorage.getItem("name");
let title = document.createElement("title");
title.textContent = itemName;
document.head.appendChild(title);

let counterText = document.querySelector(".counter");
let btn = document.querySelector(".skip");
let i = 1;
let counter = setInterval(() => {
  counterText.textContent = i;
  if (i === 0) {
    clearInterval(counter);
    btn.style.opacity = 1;
    btn.textContent = "Skip";
    let id = Math.random().toFixed(3) * 1000;
    sessionStorage.setItem("id", id);
    btn.addEventListener("click", function () {
      btn.classList.add("buttonClickAnimation");
      location.href(`/ads_page_1.html?id=${id}`)
      setTimeout(() => {
        btn.classList.remove("buttonClickAnimation");
      }, 2000);
    });
  } else {
    i--;
  }
}, 1000);

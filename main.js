let lis = document.querySelectorAll("li");
let liHome = lis[0];
let liApps = lis[1];
let liGames = lis[2];
let liRequest = lis[3];
let liAbout = lis[4];
let appsShow = document.querySelectorAll(".apps.show")[0];
let myApps = document.getElementsByClassName("apps container")[0];
let gamesShow = document.querySelectorAll(".games.show")[0];
let myGames = document.getElementsByClassName("games container")[0];
let items = document.querySelectorAll(".item");

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

let animationTime = 1000;
appsShow.addEventListener("click", function () {
  if (myApps.style.display == "none") {
    myApps.classList.add("startContainerAnimationExpand");
    myApps.style.display = "flex";
    setTimeout(function () {
      myApps.classList.remove("startContainerAnimationExpand");
    }, animationTime);
    appsShow.classList.remove("fa-chevron-up");
    appsShow.classList.add("fa-chevron-down");
  } else {
    myApps.classList.add("startContainerAnimationHide");
    setTimeout(function () {
      myApps.style.display = "none";
    }, animationTime * 0.8);
    setTimeout(function () {
      myApps.classList.remove("startContainerAnimationHide");
    }, animationTime);
    appsShow.classList.remove("fa-chevron-down");
    appsShow.classList.add("fa-chevron-up");
  }
});
gamesShow.addEventListener("click", function () {
  if (myGames.style.display == "none") {
    myGames.classList.add("startContainerAnimationExpand");
    myGames.style.display = "flex";
    setTimeout(function () {
      myGames.classList.remove("startContainerAnimationExpand");
    }, animationTime);
    gamesShow.classList.remove("fa-chevron-up");
    gamesShow.classList.add("fa-chevron-down");
  } else {
    myGames.classList.add("startContainerAnimationHide");
    setTimeout(function () {
      myGames.style.display = "none";
    }, animationTime * 0.8);
    setTimeout(function () {
      myGames.classList.remove("startContainerAnimationHide");
    }, animationTime);
    gamesShow.classList.remove("fa-chevron-down");
    gamesShow.classList.add("fa-chevron-up");
  }
});

items.forEach(function (item) {
  item.addEventListener("click", function () {
    window.sessionStorage.setItem("name", item.children[1].textContent)
    window.location.assign("/ads_page_1.html");
  });
});

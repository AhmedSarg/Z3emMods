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
document.head.appendChild(title)





//let foundTicket = document.URL.substring(document.URL.indexOf("?") + 8);
//if (foundTicket === sessionStorage.getItem("ticket")) {
// // // // page when ticket is correct
// } else {
//   let error = document.createElement("h5");
//   error.textContent = "صفحة غير موجودة";
//   error.style.textAlign = "center";
//   error.style.marginTop = "50px";
//   error.style.fontSize = "30px";
//   error.style.color = "var(--black)";
//   error.style.fontFamily = '"Rubik", sans-serif';
//   document.body.appendChild(error);
// }

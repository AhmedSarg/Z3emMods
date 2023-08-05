let lis = document.querySelectorAll("li")
let liApps = lis[0]
let liGames = lis[1]
let liRequest = lis[2]
let liAbout = lis[3]
let appsShow = document.querySelectorAll(".apps.show")[0]
let gamesShow = document.querySelectorAll(".games.show")[0]

liApps.onclick = function () {
    console.log("Apps Page")
    window.location.assign("/pages/apps.html")
}
liGames.onclick = function () {
    window.location.assign("/pages/games.html")
}
liRequest.onclick = function () {
    window.location.assign("/pages/request.html")
}
liAbout.onclick = function () {
    window.location.assign("/pages/about.html")
}

appsShow.onclick = function () {
    if (document.getElementsByClassName("apps container")[0].style.display == "none") {
        document.getElementsByClassName("apps container")[0].style.display = "flex"
        document.querySelectorAll(".apps.show")[0].classList.remove("fa-chevron-up")
        document.querySelectorAll(".apps.show")[0].classList.add("fa-chevron-down")
    }
    else {
        document.getElementsByClassName("apps container")[0].style.display = "none"
        document.querySelectorAll(".apps.show")[0].classList.remove("fa-chevron-down")
        document.querySelectorAll(".apps.show")[0].classList.add("fa-chevron-up")
    }
}

gamesShow.onclick = function () {
    if (document.getElementsByClassName("games container")[0].style.display == "none") {
        document.getElementsByClassName("games container")[0].style.display = "flex"
        document.querySelectorAll(".games.show")[0].classList.remove("fa-chevron-up")
        document.querySelectorAll(".games.show")[0].classList.add("fa-chevron-down")
    }
    else {
        document.getElementsByClassName("games container")[0].style.display = "none"
        document.querySelectorAll(".games.show")[0].classList.remove("fa-chevron-down")
        document.querySelectorAll(".games.show")[0].classList.add("fa-chevron-up")
    }
}

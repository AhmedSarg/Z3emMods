let lis = document.querySelectorAll("li")
let liApps = lis[0]
let liGames = lis[1]
let liRequest = lis[2]
let liAbout = lis[3]
let appsShow = document.querySelectorAll(".apps.show")[0]
    let myApps = document.getElementsByClassName("apps container")[0]
let gamesShow = document.querySelectorAll(".games.show")[0]
let myGames = document.getElementsByClassName("games container")[0]

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
    if (myApps.style.display == "none") {
        myApps.classList.add("startAnimationExpand")
        myApps.style.display = "flex"
        setTimeout(function () {
            myApps.classList.remove("startAnimationExpand")
        }, 1000)
        appsShow.classList.remove("fa-chevron-up")
        appsShow.classList.add("fa-chevron-down")
    }
    else {
        myApps.classList.add("startAnimationHide")
        setTimeout(function () {
            myApps.style.display = "none"
        }, 800)
        setTimeout(function () {
            myApps.classList.remove("startAnimationHide")
        }, 1000)
        appsShow.classList.remove("fa-chevron-down")
        appsShow.classList.add("fa-chevron-up")
    }
}

gamesShow.onclick = function () {
    if (myGames.style.display == "none") {
        myGames.classList.add("startAnimationExpand")
        myGames.style.display = "flex"
        setTimeout(function () {
            myGames.classList.remove("startAnimationExpand")
        }, 1000)
        gamesShow.classList.remove("fa-chevron-up")
        gamesShow.classList.add("fa-chevron-down")
    }
    else {
        myGames.classList.add("startAnimationHide")
        setTimeout(function () {
            myGames.style.display = "none"
        }, 800)
        setTimeout(function () {
            myGames.classList.remove("startAnimationHide")
        }, 1000)
        gamesShow.classList.remove("fa-chevron-down")
        gamesShow.classList.add("fa-chevron-up")
    }
}

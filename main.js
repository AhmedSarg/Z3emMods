let lis = document.querySelectorAll("li")
let liApps = lis[0]
let liGames = lis[1]
let liRequest = lis[2]
let liAbout = lis[3]
let appsShow = document.querySelectorAll(".apps.show")[0]
let myApps = document.getElementsByClassName("apps container")[0]
let appItem1 = document.querySelectorAll(".app.item")[0]
let appItem2 = document.querySelectorAll(".app.item")[1]
let gamesShow = document.querySelectorAll(".games.show")[0]
let myGames = document.getElementsByClassName("games container")[0]
let gameItem1 = document.querySelectorAll(".game.item")[0]
let gameItem2 = document.querySelectorAll(".game.item")[1]

liApps.addEventListener("click", function () {
    console.log("Apps Page")
    window.location.assign("/pages/apps.html")
})
liGames.addEventListener("click", function () {
    window.location.assign("/pages/games.html")
})
liRequest.addEventListener("click", function () {
    window.location.assign("/pages/request.html")
})
liAbout.addEventListener("click", function () {
    window.location.assign("/pages/about.html")
})

let animationTime = 1000
appsShow.addEventListener("click", function () {
    if (myApps.style.display == "none") {
        myApps.classList.add("startContainerAnimationExpand")
        appItem1.classList.add("startItemAnimationExpand")
        appItem2.classList.add("startItemAnimationExpand")
        myApps.style.display = "flex"
        setTimeout(function () {
            myApps.classList.remove("startContainerAnimationExpand")
            appItem1.classList.remove("startItemAnimationExpand")
            appItem2.classList.remove("startItemAnimationExpand")
        }, animationTime)
        appsShow.classList.remove("fa-chevron-up")
        appsShow.classList.add("fa-chevron-down")
    }
    else {
        myApps.classList.add("startContainerAnimationHide")
        appItem1.classList.add("startItemAnimationHide")
        appItem2.classList.add("startItemAnimationHide")
        setTimeout(function () {
            myApps.style.display = "none"
        }, animationTime * 0.8)
        setTimeout(function () {
            myApps.classList.remove("startContainerAnimationHide")
            appItem1.classList.remove("startItemAnimationHide")
            appItem2.classList.remove("startItemAnimationHide")
        }, animationTime)
        appsShow.classList.remove("fa-chevron-down")
        appsShow.classList.add("fa-chevron-up")
    }
})

gamesShow.addEventListener("click", function () {
    if (myGames.style.display == "none") {
        myGames.classList.add("startContainerAnimationExpand")
        gameItem1.classList.add("startItemAnimationExpand")
        gameItem2.classList.add("startItemAnimationExpand")
        myGames.style.display = "flex"
        setTimeout(function () {
            myGames.classList.remove("startContainerAnimationExpand")
            gameItem1.classList.remove("startItemAnimationExpand")
            gameItem2.classList.remove("startItemAnimationExpand")
        }, animationTime)
        gamesShow.classList.remove("fa-chevron-up")
        gamesShow.classList.add("fa-chevron-down")
    }
    else {
        myGames.classList.add("startContainerAnimationHide")
        gameItem1.classList.add("startItemAnimationHide")
        gameItem2.classList.add("startItemAnimationHide")
        setTimeout(function () {
            myGames.style.display = "none"
        }, animationTime * 0.8)
        setTimeout(function () {
            myGames.classList.remove("startContainerAnimationHide")
            gameItem1.classList.remove("startItemAnimationHide")
            gameItem2.classList.remove("startItemAnimationHide")
        }, animationTime)
        gamesShow.classList.remove("fa-chevron-down")
        gamesShow.classList.add("fa-chevron-up")
    }
})

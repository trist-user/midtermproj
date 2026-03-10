let curImage = document.getElementById("graphics");
let gameName = document.getElementById("gameName");
let locName= document.getElementById("location");
let locDesc= document.getElementById("locationDescript");
let storyTxt= document.getElementById("storyTxt");
let choiceA= document.getElementById("routeA");
let choiceB= document.getElementById("routeB");
let choiceC= document.getElementById("routeB");

let gameStrt = {
    img: "",
    imgDesc: "",
    imgName: "",
    story: "",
    buttNameA: "",
    buttNameB: "",
    buttNameC: "",
}
// x-scissor attack choice
let routeA = {
    img: "poisoned  ",
    imgDesc: "",
    imgName: "",
    story: "",
    buttNameA: "",
    buttNameB: "",
}
// send sabeleye to hospital
let routeAA = {
    img: "",
    imgDesc: "",
    imgName: "",
    story: "",
    buttNameA: "",
    buttNameB: "",
}
// keep sableye at home 
let routeAB = {
    img: "",
    imgDesc: "",
    imgName: "",
    story: "",
    buttNameA: "",
    buttNameB: "",
}
// tried to leer at em
let routeB = {
    img: "",
    imgDesc: "",
    imgName: "",
    story: "",
    buttNameA: "",
    buttNameB: "",
}
// reflect on resulted loss and sue
let routeBA = {
    img: "",
    imgDesc: "",
    imgName: "",
    story: "",
    buttNameA: "",
    buttNameB: "",
}
// sadge physical therapy
let routeBB = {
    img: "",
    imgDesc: "",
    imgName: "",
    story: "",
    buttNameA: "",
    buttNameB: "",
}
// rut roh you ominous winded
let routeC = {
    img: "",
    imgDesc: "",
    imgName: "",
    story: "",
    buttNameA: "",
    buttNameB: "",
}
// bury in backyard, but new friend appears
let routeCA = {
    img: "",
    imgDesc: "",
    imgName: "",
    story: "",
    buttNameA: "",
    buttNameB: "",
}
// have sentimental ring made   
let routeCB = {
    img: "",
    imgDesc: "",
    imgName: "",
    story: "",
    buttNameA: "",
    buttNameB: "",
}
let routeInfo = [gameStrt,routeA,routeAB,routeB,routeBA,routeBB,routeC,routeCA,routeCB]
function displayShifter(routeNum){
    switch(routeNum){
        case 0:
            curImage.src = gameStrt.img



    }
}
// make event listeners for buttons and then have the listeners take you to a specific display based on current display
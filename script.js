let curImage = document.getElementById("graphics");
let gameName = document.getElementById("gameName");
let locName= document.getElementById("location");
let locDesc= document.getElementById("locDescript");
let storyTxt= document.getElementById("storyTxt");
let choiceA= document.getElementById("routeA");
let choiceB= document.getElementById("routeB");
let choiceC= document.getElementById("routeC");

let gameStrt = {
    img: "./sableye_battle.jpg",
    imgDesc: "your trusty Sableye in battle against a Riolu",
    imgName: "Battle",
    story: "On a walk near your house you lock eyes with another trainer. Immediately and without any words or consent from you, they send out a riolu to fight your Sableye.",
    buttNameA: "Sableye, attack with X-scissor!",
    buttNameB: "Sableye, debuff with leer",
    buttNameC: "Sableye, prepare for next round with ominous wind",
}
// x-scissor attack choice
let routeA = {
    img: "./filler_Img.jpg",
    imgDesc: "dsvwsdvvdsdsvdsvd",
    imgName: "dcdcdcdcdc",
    story: "s",
    buttNameA: "cdcdc",
    buttNameB: "cddcdcdcd",
}
// send sabeleye to hospital
let routeAA = {
    img: "./filler_Img.jpg",
    imgDesc: "",
    imgName: "",
    story: "",
    buttNameA: "",
    buttNameB: "",
}
// keep sableye at home 
let routeAB = {
    img: "./filler_Img.jpg",
    imgDesc: "",
    imgName: "",
    story: "",
    buttNameA: "",
    buttNameB: "",
}
// tried to leer at em
let routeB = {
    img: "./filler_Img.jpg",
    imgDesc: "",
    imgName: "",
    story: "",
    buttNameA: "",
    buttNameB: "",
}
// reflect on resulted loss and sue
let routeBA = {
    img: "./filler_Img.jpg",
    imgDesc: "",
    imgName: "",
    story: "",
    buttNameA: "",
    buttNameB: "",
}
// sadge physical therapy
let routeBB = {
    img: "./filler_Img.jpg",
    imgDesc: "",
    imgName: "",
    story: "",
    buttNameA: "",
    buttNameB: "",
}
// rut roh you ominous winded
let routeC = {
    img: "./filler_Img.jpg",
    imgDesc: "",
    imgName: "",
    story: "",
    buttNameA: "",
    buttNameB: "",
}
// bury in backyard, but new friend appears
let routeCA = {
    img: "./filler_Img.jpg",
    imgDesc: "",
    imgName: "",
    story: "",
    buttNameA: "",
    buttNameB: "",
}
// have sentimental ring made   
let routeCB = {
    img: "./filler_Img.jpg",
    imgDesc: "",
    imgName: "",
    story: "",
    buttNameA: "",
    buttNameB: "",
}
let routeInfo = [gameStrt,routeA,routeAA,routeAB,routeB,routeBA,routeBB,routeC,routeCA,routeCB]
function displayShifter(routeNum){
    switch(routeNum){
        case 0:
            curImage.src = gameStrt.img;
            locName.innerHTML = gameStrt.imgName;
            locDesc.innerHTML = gameStrt.imgDesc;
            storyTxt.innerHTML = gameStrt.story;
            choiceA.innerHTML = gameStrt.buttNameA;
            choiceB.innerHTML = gameStrt.buttNameB;
            choiceC.innerHTML = gameStrt.buttNameC;
            break;
        case 1:
            curImage.src = routeA.img;
            locName.innerHTML = routeA.imgName;
            locDesc.innerHTML = routeA.imgDesc;
            storyTxt.innerHTML = routeA.story;
            choiceA.innerHTML = routeA.buttNameA;
            choiceB.innerHTML = routeA.buttNameB;
            choiceC.hidden = true;
            break;
        case 2:
            curImage.src = routeAA.img;
            locName.innerHTML = routeAA.imgName;
            locDesc.innerHTML = routeAA.imgDesc;
            storyTxt.innerHTML = routeAA.story;
            choiceA.innerHTML = routeAA.buttNameA;
            choiceB.innerHTML = routeAA.buttNameB;
            choiceC.hidden = true;
            break;
        case 3:
            curImage.src = routeAB.img;
            locName.innerHTML = routeAB.imgName;
            locDesc.innerHTML = routeAB.imgDesc;
            storyTxt.innerHTML = routeAB.story;
            choiceA.innerHTML = routeAB.buttNameA;
            choiceB.innerHTML = routeAB.buttNameB;
            choiceC.hidden = true;
            break;
        case 4:
            curImage.src = routeB.img;
            locName.innerHTML = routeB.imgName;
            locDesc.innerHTML = routeB.imgDesc;
            storyTxt.innerHTML = routeB.story;
            choiceA.innerHTML = routeB.buttNameA;
            choiceB.innerHTML = routeB.buttNameB;
            choiceC.hidden = true;
            break;
        case 5:
            curImage.src = routeBA.img;
            locName.innerHTML = routeBA.imgName;
            locDesc.innerHTML = routeBA.imgDesc;
            storyTxt.innerHTML = routeBA.story;
            choiceA.innerHTML = routeBA.buttNameA;
            choiceB.innerHTML = routeBA.buttNameB;
            choiceC.hidden = true;
            break;
        case 6:
            curImage.src = routeBB.img;
            locName.innerHTML = routeBB.imgName;
            locDesc.innerHTML = routeBB.imgDesc;
            storyTxt.innerHTML = routeBB.story;
            choiceA.innerHTML = routeBB.buttNameA;
            choiceB.innerHTML = routeBB.buttNameB;
            choiceC.hidden = true;
            break;
        case 7:
            curImage.src = routeC.img;
            locName.innerHTML = routeC.imgName;
            locDesc.innerHTML = routeC.imgDesc;
            storyTxt.innerHTML = routeC.story;
            choiceA.innerHTML = routeC.buttNameA;
            choiceB.innerHTML = routeC.buttNameB;
            choiceC.hidden = true;
            break;
        case 8:
            curImage.src = routeCA.img;
            locName.innerHTML = routeCA.imgName;
            locDesc.innerHTML = routeCA.imgDesc;
            storyTxt.innerHTML = routeCA.story;
            choiceA.innerHTML = routeCA.buttNameA;
            choiceB.innerHTML = routeCA.buttNameB;
            choiceC.hidden = true;
            break;
        case 9:
            curImage.src = routeCB.img;
            locName.innerHTML = routeCB.imgName;
            locDesc.innerHTML = routeCB.imgDesc;
            storyTxt.innerHTML = routeCB.story;
            choiceA.innerHTML = routeCB.buttNameA;
            choiceB.innerHTML = routeCB.buttNameB;
            choiceC.hidden = true;
            break;

    }
}
displayShifter(0);
// event listeners that wait for click and change display
// based on button pressed and current display
// to fix bug change event loisteners to compare something other than images
choiceA.addEventListener("click",()=>{
    console.log("ahahahahahaah")
    if (curImage.src == gameStrt.img){
        displayShifter(1)
    }else if(curImage.src == routeA.img){
        displayShifter(2)
    }else if(curImage.src == routeB.img){
        displayShifter(5)
    }else if(curImage.src == routeC.img){
        displayShifter(8)
    }
})
choiceB.addEventListener("click",()=>{
    console.log("hahahahahahahaha")
    if (curImage.src == gameStrt.img){
        displayShifter(4)
    }else if(curImage.src == routeA.img){
        displayShifter(3)
    }else if(curImage.src == routeB.img){
        displayShifter(6)
    }else if(curImage.src == routeC.img){
        displayShifter(9)
    }
})
choiceC.addEventListener("click",()=>{
    console.log("hehehehe")
    if (curImage.src == gameStrt.img){
        displayShifter(7)
    }
})

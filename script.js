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
    imgDesc: "routeA",
    imgName: "dcdcdcdcdc",
    story: "a",
    buttNameA: "cdcdc",
    buttNameB: "cddcdcdcd",
}
// send sabeleye to hospital
let routeAA = {
    img: "./filler_Img.jpg",
    imgDesc: "routeAA",
    imgName: "",
    story: "aa",
    buttNameA: "",
    buttNameB: "",
}
// keep sableye at home 
let routeAB = {
    img: "./filler_Img.jpg",
    imgDesc: "routeAB",
    imgName: "",
    story: "",
    buttNameA: "",
    buttNameB: "",
}
// tried to leer at em
let routeB = {
    img: "./filler_Img.jpg",
    imgDesc: "routeB",
    imgName: "",
    story: "b",
    buttNameA: "",
    buttNameB: "",
}
// reflect on resulted loss and sue
let routeBA = {
    img: "./filler_Img.jpg",
    imgDesc: "routeBA",
    imgName: "",
    story: "",
    buttNameA: "",
    buttNameB: "",
}
// sadge physical therapy
let routeBB = {
    img: "./filler_Img.jpg",
    imgDesc: "routeBB",
    imgName: "",
    story: "",
    buttNameA: "",
    buttNameB: "",
}
// rut roh you ominous winded
let routeC = {
    img: "./filler_Img.jpg",
    imgDesc: "routeC",
    imgName: "",
    story: "c",
    buttNameA: "choice A",
    buttNameB: "choice B",
}
// bury in backyard, but new friend appears
let routeCA = {
    img: "./filler_Img.jpg",
    imgDesc: "routeCA",
    imgName: "",
    story: "",
    buttNameA: "",
    buttNameB: "",
}
// have sentimental ring made   
let routeCB = {
    img: "./filler_Img.jpg",
    imgDesc: "routeCB",
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
choiceA.addEventListener("click",()=>{
    console.log("ahahahahahaah")
    if (storyTxt.innerHTML == gameStrt.story){
        displayShifter(1)
    }else if(storyTxt.innerHTML == routeA.story){
        displayShifter(2)
    }else if(storyTxt.innerHTML== routeB.story){
        displayShifter(5)
    }else if(storyTxt.innerHTML == routeC.story){
        displayShifter(8)
    }
})
choiceB.addEventListener("click",()=>{
    console.log("hahahahahahahaha")
    if (storyTxt.innerHTML == gameStrt.story){
        displayShifter(4)
    }else if(storyTxt.innerHTML == routeA.story){
        displayShifter(3)
    }else if(storyTxt.innerHTML == routeB.story){
        displayShifter(6)
    }else if(storyTxt.innerHTML == routeC.story){
        displayShifter(9)
    }
})
choiceC.addEventListener("click",()=>{
    console.log("hehehehe")
    if (storyTxt.innerHTML == gameStrt.story){
        displayShifter(7)
    }
})
let i=15
function paceCycle(img1,img2){
    console.log("plzzzzzz")
    if(curImage.src == img1){
        curImage.src = img2;
    }else if(curImage.src == img2){
        curImage.src = img1;
    }
}

choiceA.addEventListener("click",()=>{
    if(storyTxt.innerHTML == routeAA.story){
        console.log("did it work?")
        while(i >0){
            console.log("didididi")
            setInterval(() => paceCycle("http://127.0.0.1:5500/filler_Img.jpg","http://127.0.0.1:5500/sableye_battle.jpg"),5000)
            i--;
        }
    }
})

function laBoop(){
    curImage.src = "./shin_sableye.png"
    let boopSound = new Audio("partyfavorraspypart_ac01_3_5HTQ8CW.mp3");
    boopSound.play()
}
choiceA.addEventListener("click",()=>{
    if(storyTxt.innerHTML = routeCA.story){
        boop = document.createElement("p")
        boop.innerHTML = "boop ze snoot? (press b)"
        document.appendChild(boop);
    }
})
document.addEventListener("keydown",()=>{
    if(storyTxt.innerHTML = routeCA.story){
        if(event.key === "b"){
            laBoop();
            curImage.src = routeCA.img;
        }
    }
})

//defines references for the base elements of the HTML page
let curImage = document.getElementById("graphics");
let gameName = document.getElementById("gameName");
let locName= document.getElementById("location");
let locDesc= document.getElementById("locDescript");
let storyTxt= document.getElementById("storyTxt");
let choiceA= document.getElementById("routeA");
let choiceB= document.getElementById("routeB");
let choiceC= document.getElementById("routeC");

// initial display and info
let gameStrt = {
    img: "./sableye_battle.jpg",
    imgDesc: "your trusty Sableye in battle against a Riolu. (hope they don't get hurt, life is not a video game)",
    imgName: "Battle",
    story: "On a walk near your house you lock eyes with another trainer. Immediately and without any words or consent from you, they send out a riolu to fight your Sableye.",
    buttNameA: "Sableye, attack with X-scissor!",
    buttNameB: "Sableye, debuff with leer",
    buttNameC: "Sableye, prepare for next round with ominous wind",
}

// x-scissor attack choice path
let routeA = {
    img: "./filler_Img.jpg",
    imgDesc: "routeA",
    imgName: "poisoning",
    story: "The Riolu takes the minor cuts and shoots back with a jab. OH woah nvm that was a poison jab, dude your sableye might die.",
    buttNameA: "TAKE TO HOSPITAL",
    buttNameB: "if you can't afford the hospital, i think the Walgreens <b>might</b> have some antidote.",
}

// send sabeleye to hospital path
let routeAA = {
    img: "./filler_Img.jpg",
    imgDesc: "routeAA",
    imgName: "",
    story: "aa",
    buttNameA: "",
    buttNameB: "",
}

// keep sableye at home path
let routeAB = {
    img: "./filler_Img.jpg",
    imgDesc: "routeAB",
    imgName: "",
    story: "AB",
    buttNameA: "",
    buttNameB: "",
}

// tried to leer at em path
let routeB = {
    img: "./filler_Img.jpg",
    imgDesc: "routeB",
    imgName: "Injury",
    story: "OH, the uh Riolu responded with a bullet punch... Not lethal but, Sableye just got folded like a lawn chair. ",
    buttNameA: "YO sue that guy! ",
    buttNameB: "maybe physical therapy can get that arm working again?",
}

// reflect on resulted loss and sue path
let routeBA = {
    img: "./filler_Img.jpg",
    imgDesc: "routeBA",
    imgName: "",
    story: "BA",
    buttNameA: "",
    buttNameB: "",
}

// sadge physical therapy path
let routeBB = {
    img: "./filler_Img.jpg",
    imgDesc: "routeBB",
    imgName: "",
    story: "BB",
    buttNameA: "",
    buttNameB: "",
}

// rut roh you ominous winded path
let routeC = {
    img: "./filler_Img.jpg",
    imgDesc: "Sableye getting absolutely pieced up in close combat",
    imgName: "Um death?",
    story: "c",
    buttNameA: "Well I-uh guess you can bury them in your backyard",
    buttNameB: "Y'know it <b><i>was</i></b> a sableye, so you could have some jewelery to remember them by.",
}

// bury in backyard, but new friend appears path
let routeCA = {
    img: "./filler_Img.jpg",
    imgDesc: "routeCA",
    imgName: "",
    story: "CA story",
    buttNameA: "choice a",
    buttNameB: "choise b",
}

// have sentimental ring made path
let routeCB = {
    img: "./filler_Img.jpg",
    imgDesc: "routeCB",
    imgName: "",
    story: "CB",
    buttNameA: "",
    buttNameB: "",
}

// stores initial path and image info in an array
let routeInfo = [gameStrt,routeA,routeAA,routeAB,routeB,routeBA,routeBB,routeC,routeCA,routeCB]

//defines function to switch through the displays and info for each choice
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
            choiceA.hidden = true;
            choiceB.hidden = true;
            choiceC.hidden = true;
            break;
        case 3:
            curImage.src = routeAB.img;
            locName.innerHTML = routeAB.imgName;
            locDesc.innerHTML = routeAB.imgDesc;
            storyTxt.innerHTML = routeAB.story;
            choiceA.hidden = true;
            choiceB.hidden = true;
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
            choiceA.hidden = true;
            choiceB.hidden = true;
            choiceC.hidden = true;
            break;
        case 6:
            curImage.src = routeBB.img;
            locName.innerHTML = routeBB.imgName;
            locDesc.innerHTML = routeBB.imgDesc;
            storyTxt.innerHTML = routeBB.story;
            choiceA.hidden = true;
            choiceB.hidden = true;
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
            choiceA.hidden = true;
            choiceB.hidden = true;
            choiceC.hidden = true;
            break;
        case 9:
            curImage.src = routeCB.img;
            locName.innerHTML = routeCB.imgName;
            locDesc.innerHTML = routeCB.imgDesc;
            storyTxt.innerHTML = routeCB.story;
            choiceA.hidden = true;
            choiceB.hidden = true;
            choiceC.hidden = true;
            break;

    }
}
//switches display to the game start one
displayShifter(0);

// event listeners that wait for click on buttons to change display
// changes based on which buttons are pressed and what the display is when they are clicked

// event listener that defines base display changes for choiceA buttons in each route
choiceA.addEventListener("click",()=>{
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

//event listener that defines base display changes for choiceB buttons in each route
choiceB.addEventListener("click",()=>{
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

//event listener that defines base display changes for choiceC buttons in each route
choiceC.addEventListener("click",()=>{
    if (storyTxt.innerHTML == gameStrt.story){
        displayShifter(7)
    }
})

//gameStart
// if you press down on the image description in first scene you get context
locDesc.addEventListener("mousedown",()=>{
    window.alert("for a bit of context, this story occurs in a world where pokemon exist. BUT medically is just like everyday life in the real world, so pokemon fights kinda suck after the fact.")
})

//routeA
//if you hover over this choice, you'll be double-checked with
// and had to make a counter to make sure it only happens once
let h =0;
choiceB.addEventListener("mouseover",()=>{
    if(storyTxt.innerHTML == routeA.story){
        if(h<1){
            window.alert("seriously? are you absolutely sure? poison moves are some strong stuff, i'm not sure if pharmacy stuff is fully enough to address... that.")
            h++;
        }
    }
})

//routeAA
// use an image change function and a while loop to rotate between image 1 and 2 for pace cycle in routeAA
function paceCycle(img1,img2){
    if(curImage.src == img1){
        curImage.src = img2;
    }else if(curImage.src == img2){
        curImage.src = img1;
    }
}
let i=15
choiceA.addEventListener("click",()=>{
    if(storyTxt.innerHTML == routeAA.story){
        while(i >0){                      //pacing img 1                            pacing img 2                                          
            setInterval(() => paceCycle("http://127.0.0.1:5500/filler_Img.jpg","http://127.0.0.1:5500/sableye_battle.jpg"),4000)
            i--;
        }
    }
})

//routeAB
//creates new element to inform user on feature
choiceB.addEventListener("click",()=>{
    if(storyTxt.innerHTML == routeAB.story){
        let respects = document.createElement("p")
        respects.innerHTML = "f to pay respects";
        document.body.appendChild(respects)      
    }
})
// uses audio function to play sounds and swap image
function leSad(){
    curImage.src = "./grave.jpg"
    let respec = new Audio("./freesound_community-wah-wah-sad-trombone-6347.mp3");
    respec.play()
}
// runs function and then after certain time resets display
document.addEventListener("keydown",()=>{
    if(storyTxt.innerHTML == routeAB.story){
        if(event.key === "f"){
            leSad();
            setTimeout(()=> displayShifter(3),4900)
        }
    }
})

//routeB
//adds a sound effect, for comedic/story effect
choiceB.addEventListener("click",()=>{
    if(storyTxt.innerHTML == routeB.story){
        let ohShoot = new Audio("./sound_68c2abc71447f.mp3");
        ohShoot.play();
    }
})

//routeBA
//changes image when mouse over image, changes it back when mouse leaves
curImage.addEventListener("mouseover", ()=>{
    if(storyTxt.innerHTML == routeBA.story){
        curImage.src = "./shin_sableye.png" //court case win/healthy sableye img
    }
})
curImage.addEventListener("mouseout",()=>{
    if(storyTxt.innerHTML == routeBA.story){
        curImage.src = "./filler_img.jpg"
    }
})

//routeC
//changes image to... the result of Riolu's attack when mouse goes over the image
curImage.addEventListener("mouseover",()=>{
    if(storyTxt.innerHTML == routeC.story){
        curImage.src = "./sableye_battle.jpg" // filler, make stabbed/bleeding out img
        locDesc.innerHTML = "Sableye... fatally bleeding out"
    }
})

//routeCA
//creates element to inform user of PEAK
choiceA.addEventListener("click",()=>{
    if(storyTxt.innerHTML == routeCA.story){
        boop = document.createElement("p")
        boop.innerHTML = "boop ze snoot? (press b)"
        document.body.appendChild(boop);
    }
})
//function to change image and la boop ze snoot 
function laBoop(){
    curImage.src = "./shin_sableye.png"
    let boopSound = new Audio("./partyfavorraspypart_ac01_3_5HTQ8CW.mp3");
    boopSound.play()
}
// detects keyboard input to la boop ze snoot and change it back to normal after a little bit
document.addEventListener("keydown",()=>{
    if(storyTxt.innerHTML == routeCA.story){
        if(event.key === "b"){
            laBoop();
            setTimeout(()=> displayShifter(8),50)
        }
    }
})

//routeCB
// function to check if user input is wrong or just objectively incorrect
// if it was the later you are appropriately shamed with audio and a web page opening, then closing
//also catches the triggered errors for proper handling
function inCheck(userIn){
    try{
        let numCheck = /^-?\d+(\.\d+)?$/
        if (numCheck.test(userIn) == true){
            throw new Error("yo c'mon bro, lock in. obviously don't type numbers")
        }else if(userIn == "no"){
            let tab = window.open("https://us-tuna-sounds-images.voicemod.net/1acd66ec-87a1-4a22-a6a6-bd4b680bcf74-1727517344495.jpg","why are you like this?" )
            let shame = new Audio("./Tuco_ GET OUT - QuickSounds.com.mp3")
            shame.play()
            shame.play()
            shame.play()
            setTimeout(()=>{
                if(tab && !tab.closed){
                    tab.close();
                }
            },3000)
            throw new Error("No no no, don't look in inspect for something to save you. Go ahead, close the game. Don't you dare come back") 
        } 
    }catch(error){
        console.error("caught you:", error.message);
    }
}
// asks for input to run thorough JUDGEMENT after a delay to read the display
choiceB.addEventListener("click",()=>{
    if(storyTxt.innerHTML == routeCB.story){
        setTimeout(()=>{
            let response = prompt("will you honor their memory?")
            inCheck(response);
        }, 10000)
    }
})

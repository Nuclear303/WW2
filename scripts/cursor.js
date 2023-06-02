const cursorNum = localStorage.getItem("cursor");
const cursor = document.querySelector(".cursors");
const menu = document.querySelector(".menuSlider");
const star = document.querySelector("html");

function getCursor(folder) {
    switch(cursorNum){
        case '0': default:{   
            star.style.setProperty("cursor", "pointer, auto", "important");       
            break;
        }
        case '1':{
            document.querySelectorAll("*").forEach(element => {
            element.style.cursor = `url(${folder}/bullet.svg), auto`;
            });
            break;
        }
        case '2':{
            document.querySelectorAll("*").forEach(element => {
                element.style.cursor = `url(${folder}/bullet2.svg), auto`;
            });   
            break;
        }
        case '3':{
            document.querySelectorAll("*").forEach(element => {
                element.style.cursor = `url(${folder}/bomb.svg), auto`;
            });
            break;
        }  
    }
}

document.addEventListener("DOMContentLoaded", _=>{
    getCursor(localStorage.getItem("folder"))
})

document.addEventListener("click",_=>{
    new Audio(`${localStorage.getItem("folder")}/click.wav`).play();
})
menu.addEventListener("click", _=>{
    if(localStorage.shown == "1"){
        cursor.style.animation = "cursorSlideOut 1s forwards";
        localStorage.shown = "0";
    }
    else{
        cursor.style.animation = "cursorSlideIn 1s forwards";
        localStorage.shown = "1"
    }
})
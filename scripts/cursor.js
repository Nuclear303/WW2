const cursorNum = localStorage.getItem("cursor");
const cursor = document.querySelector(".cursors");
const menu = document.querySelector(".menuSlider");
const star = document.querySelector("html");
switch(cursorNum){
    case '0': default:{   
        star.style.setProperty("cursor", "pointer, auto", "important");
        
        break;
    }
    case '1':{
        star.style.setProperty("cursor", "url(./media/bullet.svg), auto", "important");
        document.querySelectorAll("a, button").forEach(element => {
        element.style.cursor = "url(./media/bullet.svg), auto";
        });
        break;
    }
    case '2':{
        star.style.setProperty("cursor", "url(./media/bullet2.svg), auto", "important");
        document.querySelectorAll("a, button").forEach(element => {
            element.style.cursor = "url(./media/bullet2.svg), auto";
        });   
        break;
    }
    case '3':{
        star.style.setProperty("cursor", "url(./media/bomb.svg), auto", "important");
        star.style.setProperty("cursor", "url(./media/bomb.svg), auto", "important");
        document.querySelectorAll("a, button").forEach(element => {
            element.style.cursor = "url(./media/bomb.svg), auto";
        });
        break;
    }  
}


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
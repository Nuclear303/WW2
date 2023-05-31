const cursor = localStorage.getItem("cursor");
const star = document.querySelector("*");
switch(cursor){
    case '0':{   
        star.style.cursor = "pointer !important"
        break;
    }
    case '1':{
        console.log("aaaa");
        star.style.setProperty("cursor", "url(./media/bullet.svg), auto", "important");
        break;
    }
    
}
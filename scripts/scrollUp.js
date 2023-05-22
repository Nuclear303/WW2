document.addEventListener("DOMContentLoaded", _=>{
    setInterval(_=>{
        if(scrollY > 0){
            document.querySelector(".scrollUp").style.display = "block";
        }
        else{
            document.querySelector(".scrollUp").style.display = "none";
        }
    }, 100);

    document.querySelector(".scrollUp").addEventListener("click", _=>{
        location.assign("#")
    })
})

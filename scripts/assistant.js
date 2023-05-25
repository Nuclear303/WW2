document.addEventListener("DOMContentLoaded", _=>{
    const person = document.querySelector(".person");
    const pages = document.querySelector(".pages");
    const help = document.querySelector(".help");
    const question = document.querySelector(".question");

    setTimeout(_=>{
        person.style.opacity = "1";
        person.style.transition = "opacity 1s";
        help.style.opacity = "1";
        help.style.transition = "opacity 1s";
    }, 10000);

    person.addEventListener("click", _=>{
        help.style.display = "none";
        pages.style.display = "block";
        if(pages.style.opacity == "1"){
            pages.style.opacity = "0";
        }
        else{
            pages.style.opacity = "1"
        }
        pages.style.transition = "opacity 1s";
    })

    question.addEventListener("click", _=>{
        window.open("https://chat.openai.com", "blank");
    })
})
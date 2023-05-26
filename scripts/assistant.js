document.addEventListener("DOMContentLoaded", _=>{
    const iks = document.querySelector(".iks");
    const assistant = document.querySelector(".assistant");
    const person = document.querySelector("div.person");
    const pages = document.querySelector(".pages");
    const help = document.querySelector(".help");
    const question = document.querySelector(".question");

    setTimeout(_=>{
        assistant.style.display = "block";
    }, 9000);

    setTimeout(_=>{ 
        person.style.opacity = "1";
        person.style.transition = "opacity 1s";
        help.style.opacity = "1";
        help.style.transition = "opacity 1s";
        iks.style.opacity = "1";
        iks.style.transition = "opacity 1s";
    }, 10000);

    person.addEventListener("click", _=>{
        help.style.opacity = "0";
        help.style.transition = "opacity 1s";
        pages.style.display = "block";
        if(help.style.display != "none"){
            setTimeout(_=>{
                help.style.display = "none";
                if(pages.style.opacity == "1"){
                    pages.style.opacity = "0";
                }
                else{
                    pages.style.opacity = "1"
                }
                pages.style.transition = "opacity 1s";
            },1000);
        }
        else{
            if(pages.style.opacity == "1"){
                pages.style.opacity = "0";
            }
            else{
                pages.style.opacity = "1"
            }
            pages.style.transition = "opacity 1s";
        }
    })

    question.addEventListener("click", _=>{
        window.open("https://chat.openai.com", "blank");
    });

    iks.addEventListener("click", _=>{
        assistant.style.opacity = "0";
        assistant.style.transition = "opacity 1s";
        setTimeout(_=>{
            assistant.style.display = "none";
        }, 1000);
    })
})
window.addEventListener('scroll', _=> {
    var bitwy = document.getElementById('bitwy');
    var bitwyPosition = bitwy.getBoundingClientRect();

    var uzbrojenie = document.getElementById('uzbrojenie');
    var uzbrojeniePosition = uzbrojenie.getBoundingClientRect();

    var postacie = document.getElementById('postacie');
    var postaciePosition = postacie.getBoundingClientRect();

    var czolgi = document.getElementById('czolgi');
    var czolgiPosition = czolgi.getBoundingClientRect();

    var samoloty = document.getElementById('samoloty');
    var samolotyPosition = samoloty.getBoundingClientRect();

    var okrety = document.getElementById('okrety');
    var okretyPosition = okrety.getBoundingClientRect();

    var galeria = document.getElementById('galeria');
    var galeriaPosition = galeria.getBoundingClientRect();

    var windowHeight = window.innerHeight;
  
    // Check if the container is in the viewport
    setTimeout(_=>{
        if (bitwyPosition.top <= windowHeight) {
            bitwy.style.opacity = '1';
          } else {
            bitwy.style.opacity = '0';
          }
      
          if (uzbrojeniePosition.top <= windowHeight) {
              uzbrojenie.style.opacity = '1';
            } else {
              uzbrojenie.style.opacity = '0';
            }
      
            if (postaciePosition.top <= windowHeight) {
              postacie.style.opacity = '1';
            } else {
              postacie.style.opacity = '0';
            }
      
            if (czolgiPosition.top <= windowHeight) {
              czolgi.style.opacity = '1';
            } else {
              czolgi.style.opacity = '0';
            }
      
            if (samolotyPosition.top <= windowHeight) {
              samoloty.style.opacity = '1';
            } else {
              samoloty.style.opacity = '0';
            }
      
            if (okretyPosition.top <= windowHeight) {
              okrety.style.opacity = '1';
            } else {
              okrety.style.opacity = '0';
            }
            
            if (galeriaPosition.top <= windowHeight) {
              galeria.style.opacity = '1';
            } else {
              galeria.style.opacity = '0';
            }
            bitwy.style.transition = "opacity 2.5s";
            uzbrojenie.style.transition = "opacity 2.5s";
            postacie.style.transition = "opacity 2.5s";
            czolgi.style.transition = "opacity 2.5s";
            samoloty.style.transition = "opacity 2.5s";
            okrety.style.transition = "opacity 2.5s";
            galeria.style.transition = "opacity 2.5s";
    },500)
  });
  
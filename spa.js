window.onload = () =>{
    var textWrapper = document.querySelectorAll('.ml12');
    textWrapper.forEach(element => {
        element.style= 'display:block'
        element.innerHTML = element.textContent.replaceAll(/\S/g, "<p class='letter'>$&</p>");
    });
    
    var rc = new RandomCoords(Math.max(document.documentElement.clientWidth, window.innerWidth || 0), Math.max(document.documentElement.clientHeight, window.innerHeight || 0))

    anime.timeline()
    .add({
        targets: '.ml12 .letter',
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 2000,
        delay: (el, i) => 1000 + 100 * i
    })
    anime({
        targets: '.head1',
        delay: 500,
        duration: 2000,
        opacity: [0, 1],
        scale: [1.3, 1],
        easing: 'easeOutSine'
    })
    
    anime({
        targets: '.box-button',
        opacity: [0, 1],          
        delay: 2000,
        duration: 2000,
        easing: "easeInOutSine",
    })
    anime({
        targets: '.sub',
        opacity: [0, 1],
        translateX: [200, 0],     
        delay: 1000,
        duration: 1500,
        easing: "easeInOutSine",

    })

    var sky_shooting = document.querySelector('.shootingstars')
    for( i=0; i<60; i++){
        var te = document.createElement('div',{ class: i})
        te.setAttribute('id',i)
        te.setAttribute('class','wish')
        te.setAttribute('style',`left: ${rc.getRandomY()}px;top:${rc.getRandomX()}px`)
        sky_shooting.appendChild(te)
    }
    anime({
        targets: ".shootingstars .wish",
        easing: "linear",
        loop: true,
        delay: (el, i) => 1000 * i,
        opacity: [
          {
            duration: 700,
            value: "1"
          }
        ],
        width: [
          {
            value: "150px"
          },
          {
            value: "0px"
          }
        ],
        translateX: 350
    });
        
}

class RandomCoords {
    constructor( w, h){
        this.w = w
        this.h = h
    }
    getRandomX(){
        return Math.floor(Math.random() * Math.floor(this.w)).toString();
    }
    getRandomY(){
        return Math.floor(Math.random() * Math.floor(this.h)).toString();
    };
}

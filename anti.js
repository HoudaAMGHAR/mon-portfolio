const btnMenu=document.querySelector('.btn-rond-menu');
const nav=document.querySelector('.nav-gauche');
const itemsNav= document.querySelectorAll('.nav-menu-item');
const ligne= document.querySelector('.cont-ligne');

btnMenu.addEventListener('click',() => {

    ligne.classList.toggle('active')
    nav.classList.toggle('menu-visible')
})
if(window.matchMedia('(max-width:1300px)')){
    itemsNav.forEach(item =>{
        item.addEventListener('click',()=> {
            nav.classList.toggle('menu-visible')
            ligne.classList.toggle('active')
        })
    })
} 
//animation ecriture 
const txtAnim = document.querySelector('.txt-animation');
let typewriter = new Typewriter(txtAnim, {
    loop: false, 
    deleteSpeed: 20

});
typewriter
.pauseFor(1800)
.changeDelay(20)
.typeString('c\'est Houda AMGHAR')
.pauseFor(300)
.typeString('<strong>, Developpeuse Full-stack</strong>!')
.pauseFor(1000)
.deleteChars(13)
.typeString('<span style="color:#27ae60;">CSS</span> !')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color:#EA39ff;">Php</span> !')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color:#midnightblue;"> React</span> !')
.pauseFor(1000)
.deleteChars(8)
.typeString('<span style="color: #ff6910;"> JavaScript</span> !')
.pauseFor(1000) 
.deleteChars(8)

.start()


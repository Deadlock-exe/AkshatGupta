const Educontainer= document.querySelector('#education');
const leftcontainer= document.querySelectorAll('.left');
const rightcontainer= document.querySelectorAll('.right');

Educontainer.addEventListener('mouseover',()=>{
    leftcontainer[0].classList.toggle('left-transition')
    leftcontainer[1].classList.toggle('left-transition')
    rightcontainer[0].classList.toggle('right-transition')
    // },{once:true})
})

const Skillcontainer= document.querySelector('#skills');
const SkillArea = document.querySelector('#skillsArea');

Skillcontainer.addEventListener('mouseover',()=>{
    SkillArea.classList.toggle('display-none');
// },{once:true})
})
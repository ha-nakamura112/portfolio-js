const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');
const switchBtn = document.querySelector('.switch-btn');
const switchBtns = document.querySelectorAll('.switch-color');
const smallBtns = document.querySelectorAll('.small-contents');
const smallIcon = document.querySelectorAll('.small-icon');
const smallIcons = document.querySelector('.small-title');
const smallCon = document.querySelector('.small-controlls');
const headImg = document.querySelector('.head-img');


let smallstyleChg = () =>{
  if($($('.small-title .fa-solid')[0]).hasClass('hide')){
    $('.small-controlls').css('width','100%');
    $('.small-controlls').css('height','100%');
    $('.small-title .fa-solid').css('background-color','var(--color-grey1)')
    $('.small-title .fa-solid').css('color','var(--color-grey4)')
  }else{
    $('.small-controlls').css('width','0%');
    $('.small-controlls').css('height','0%');
    $('.small-title .fa-solid').css('background-color','var(--color-grey4)')
    $('.small-title .fa-solid').css('color','var(--color-grey1)')
  }
}

function pageColorChg(){
  // clicked button should be active
  for(let i = 0; i < sectBtn.length; i++){
    sectBtn[i].addEventListener('click', function(){
      let currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
      this.className += 'active-btn';
      this.style.transition = ("all .2s ease-in-out");
    })
  }

  allSections.addEventListener('click', (e) =>{
    let id = e.target.dataset.id;
    if(id){
      // remove selected from the other btns
      sectBtns.forEach((btn)=>{
        btn.classList.remove('active-btn');
      })
      e.target.classList.add('active-btn')

      //hide other sections
      sections.forEach((section)=>{
        // console.log(section);
        section.classList.remove('active');
      })
      let element = document.getElementById(id);
      element.classList.add('active');
    }
  })

  smallCon.addEventListener('click', function(){
    smallstyleChg();
  })

  for(let i = 0; i < smallBtns.length; i++){
    smallBtns[i].addEventListener('click', function(){
      let currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
      this.className += 'active-btn';

      smallBtns[0].classList.toggle('hide');
      smallIcon.forEach((icon)=>{
        icon.classList.toggle('hide');
      })
    })
  }

  smallIcons.addEventListener('click', (e) =>{
    smallIcon.forEach((icon)=>{
      icon.classList.toggle('hide');
    })
    smallBtns[0].classList.toggle('hide');
  })

  allSections.addEventListener('click', (e) =>{
    let id = e.target.dataset.id;
    if(id){
      smallBtns.forEach((btn)=>{
        btn.classList.remove('active-btn');
      })
      e.target.classList.add('active-btn')

      sections.forEach((section)=>{
        section.classList.remove('active');
      })
      let element = document.getElementById(id);
      element.classList.add('active');
    }
  })

  switchBtn.addEventListener('click', ()=>{
    let element = document.body;
    element.classList.toggle('light-mode');
    
    switchBtns.forEach((btns)=>{
      btns.classList.toggle('hide');
    })

  })

  headImg.addEventListener('mouseover' ,function(){
    sectBtns.classList.toggle = 'hide';
  })

}
pageColorChg();
//change page colors by adding class







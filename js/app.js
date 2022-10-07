const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');
const switchBtn = document.querySelector('.switch-btn');

//

function pageColorChg(){
  // cliccked button should be active
  for(let i = 0; i < sectBtn.length; i++){
    sectBtn[i].addEventListener('click', function(){
      let currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
      this.className += 'active-btn';
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

  switchBtn.addEventListener('click', ()=>{
    let element = document.body;
    element.classList.toggle('light-mode');
  })


}
pageColorChg();
//change page colors by adding class







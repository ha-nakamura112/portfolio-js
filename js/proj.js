const sortBtn = document.querySelectorAll('.sort-btn');
const projs = document.querySelectorAll('.port-item');



function filterProj(){
  for(let i = 0; i < sortBtn.length; i++){
    sortBtn[i].addEventListener('click', function(){
      let currentBtn = document.querySelectorAll('.act-btn');
      currentBtn[0].className = currentBtn[0].className.replace('act-btn', '');
      this.className += 'act-btn';

      let showBtn = document.querySelectorAll('.act-btn');
      let val = showBtn[0].className.split(" ")[1];
      
        projs.forEach((proj)=>{
          proj.className = proj.className.replace('hide', '');
          if(val != 'all'){
            if( proj.classList.contains(val) == false ){
              proj.classList.add('hide');
            }
          }
        })
    });
  }
}
filterProj();

const sortBtn = document.querySelectorAll('.sort-btn');
const projs = document.querySelectorAll('.port-item');



function filterProj(){
  // console.log(document.querySelectorAll('.port-text')[0])
  for(let i = 0; i < sortBtn.length; i++){
    sortBtn[i].addEventListener('click', function(){
      let currentBtn = document.querySelectorAll('.act-btn');
      currentBtn[0].className = currentBtn[0].className.replace('act-btn', '');
      this.className += 'act-btn';

      let showBtn = document.querySelectorAll('.act-btn');
      // console.log(showBtn);
      let val = showBtn[0].className.split(" ")[1];
      // console.log(val);
      
        projs.forEach((proj)=>{
          // console.log(proj);
          // console.log(proj.classList);
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

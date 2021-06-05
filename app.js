// drop down menu btn

var pages = document.getElementsByClassName('drop-down-arrow');
var menu = document.getElementsByClassName('menu-drop')
pages[0].addEventListener('click',()=>{
    if(menu[0].style.display ===""){
        menu[0].style.display ='block';
        menu[1].style.display ='';

    }
    else{
        menu[0].style.display ="";
    }
})
pages[1].addEventListener('click',()=>{
    if(menu[1].style.display ===""){
        menu[1].style.display ='block';
        menu[0].style.display ='';
    }
    else{
        menu[1].style.display ="";
    }
})




var toggle_btn = document.querySelector('.hamburger');
var nav_right = document.querySelector('.nav-right');
toggle_btn.addEventListener('click', ()=>{
    nav_right.classList.toggle('change');
})

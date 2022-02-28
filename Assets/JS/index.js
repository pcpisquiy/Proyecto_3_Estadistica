const navbar = document.querySelector('#navbar');
const scrollspy = VanillaScrollspy(navbar);
const Arrow = document.querySelector('#arrow');
const scrollArrow = VanillaScrollspy(Arrow);
scrollspy.init();
scrollArrow.init();
function disableScroll(){  
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function(){ window.scrollTo(x, y) };
}
function enableScroll(){  
    window.onscroll = null;
}
/*===== MENU SHOW Y HIDDEN =====*/ 
const navMenu = document.getElementById('nav__menu'),
      openMenu = document.getElementById('nav__menu--open'),
      closeMenu = document.getElementById('nav__menu--close');

/*SHOW*/ 
openMenu.addEventListener('click', (e)=>{
    navMenu.classList.toggle('show');
    window.addEventListener('scroll', disableScroll());

})

/*HIDDEN*/
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show');
    window.addEventListener('scroll', enableScroll());

})
AOS.init();
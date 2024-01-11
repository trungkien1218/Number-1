let navTrigger = document.querySelector('.nav-trigger');
let mainNav = document.querySelector('.main-nav');
let overlay = document.querySelector('.overlay');

navTrigger.addEventListener('click', function () {
    mainNav.classList.add('show')
   
})/*bật*/ 


overlay.addEventListener('click', function () {
     mainNav.classList.remove('show') 
})/*tắt*/

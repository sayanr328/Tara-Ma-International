// burger=document.querySelector('.burger')
// navbar=document.querySelector('.navbar')
// navList=document.querySelector('.nav-list')
// rightNav=document.querySelector('.rightNav')


// burger.addEventListner('click',()=>){
//     rightNav.classList.toggle('v-class-resp')
//     navList.classList.toggle('v-class-resp')
//     navbar.classList.toggle('h-nav-resp')
// }





const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const navList = document.querySelector('.nav-list');
const rightNav = document.querySelector('.rightNav');

burger.addEventListener('click', () => {
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
});

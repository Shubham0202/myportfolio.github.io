var settings = document.querySelector('.settings-icon');
settings.addEventListener('click',()=>{
const isOpen= settings.getAttribute('aria-expanded');
    if(isOpen === 'true'){
        settings.setAttribute('aria-expanded','false');
       let theme= document.querySelector('.settings-options');
       theme.style.display="none";
    }
    else{
        let theme= document.querySelector('.settings-options');
        settings.setAttribute('aria-expanded','true');
        theme.style.display="block";

    }
});


var theme= document.querySelector('.settings-options'); 
var body= document.querySelector('body');
var backside = document.querySelector('.shade');
var writting = document.getElementsByClassName('wpara');
var projectFrame = document.querySelectorAll('.project-frame');
var card= document.querySelectorAll('.card');
var navbar =document.querySelector('.navbar');
var navlinks = document.querySelector('nav-links');

let theme_changer1 = document.querySelector('.T1');
let theme_changer2 = document.querySelector('.T2');
let theme_changer3 = document.querySelector('.T3');
let theme_changer4 = document.querySelector('.T4');

theme_changer1.addEventListener('click',()=>{
    body.style.background="black";

    theme.style.display="none";
    settings.setAttribute('aria-expanded','false');
    navbar.style.background="var(--nav-links-primary-color-with-focus)";
    for (let i = 0; i < writting.length; i++) {
        writting[i].style.color="white";
        
    }
    for (let i = 0; i < projectFrame.length; i++) {
        projectFrame[i].style.backgroundColor="var(--background)";
        
    }
    for (let i = 0; i < card.length; i++) {
        card[i].style.backgroundColor="var(--background)";
        
    }
});


theme_changer2.addEventListener('click',()=>{
    body.style.background="white";

    theme.style.display="none";
    settings.setAttribute('aria-expanded','false');
    navbar.style.background="var(--nav-links-primary-color-with-focus)";
    for (let i = 0; i < writting.length; i++) {
        writting[i].style.color="black";
        
    }
    for (let i = 0; i < projectFrame.length; i++) {
        projectFrame[i].style.backgroundColor="var(--background-white-smoke)";
        
    }
    for (let i = 0; i < card.length; i++) {
        card[i].style.backgroundColor="var(--background-white-smoke)";
        
    }
});

const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');
const textBox = document.getElementById('text-box');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const nav = document.getElementById('nav');
const LIGHT_THEME = 'light';
const DARK_THEME = 'dark';
var width,height;

// Menu Elements
const switchWrapper = document.getElementById('theme-switch-wrapper');
const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');


// Dark or light images
function imageMode(color){
    image1.src = `./images/undraw_code_thinking_${color}.svg`;
    image2.src = `./images/undraw_proud_coder_${color}.svg`;
    image3.src = `./images/undraw_source_code_${color}.svg`;
}

// Light or Dark mode style
function toggleDarkLightMode(theme){
    if(theme === DARK_THEME){
        nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
        //textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
        toggleIcon.children[0].textContent = 'Dark Mode';
        toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
        //imageMode(DARK_THEME);
    }else{
        nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
        //textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
        toggleIcon.children[0].textContent = 'Light Mode';
        toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
        //imageMode(LIGHT_THEME);
    }
}

// Switch Theme Dynamically
function swtichTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', DARK_THEME);
        localStorage.setItem('theme', DARK_THEME);
        toggleDarkLightMode(DARK_THEME);
    }else{
        document.documentElement.setAttribute('data-theme', LIGHT_THEME);
        localStorage.setItem('theme', LIGHT_THEME);
        toggleDarkLightMode(LIGHT_THEME);
    }
}

// Load Local Storage Theme
function loadTheme(currentTheme){
    if(currentTheme === DARK_THEME){
        toggleSwitch.checked = true;
        document.documentElement.setAttribute('data-theme', DARK_THEME);
        toggleDarkLightMode(DARK_THEME);
    }
}

function toggleNav(){
    //toggle: Menu Bars Open/Closed
    menuBars.classList.toggle('change');
    // toggle: Menu Active
    overlay.classList.toggle('overlay-active');
    if(overlay.classList.contains('overlay-active')){
        // Animate In - Overlay
        overlay.classList.remove('overlay-slide-left');
        overlay.classList.add('overlay-slide-right');
        switchWrapper.classList.remove('overlay-slide-left');
        switchWrapper.classList.add('overlay-slide-right');
    }else{
        // Animate Out - Overlay
        overlay.classList.remove('overlay-slide-right');
        overlay.classList.add('overlay-slide-left');    
        switchWrapper.classList.remove('overlay-slide-right');
        switchWrapper.classList.add('overlay-slide-left');
    }
}

// Event Listener
toggleSwitch.addEventListener('change', swtichTheme);
menuBars.addEventListener('click', toggleNav);
nav1.addEventListener('click', toggleNav);
nav2.addEventListener('click', toggleNav);
nav3.addEventListener('click', toggleNav);
nav4.addEventListener('click', toggleNav);

window.onresize = window.onload = function() {
    width = this.innerWidth;
    height = this.innerHeight;
    if(width >= 1025){
        console.log("change");
        overlay.classList.remove('overlay-slide-left'); 
        overlay.classList.remove('overlay-slide-right');
        switchWrapper.classList.remove('overlay-slide-left');
        switchWrapper.classList.remove('overlay-slide-right');
        menuBars.classList.remove('change');
    }
    //document.body.innerHTML = width + 'x' + height; // For demo purposes
}


// Get Local Storage Theme
const currentTheme = localStorage.getItem('theme');

//On Load
loadTheme(currentTheme);
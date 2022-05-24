const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');
const textBox = document.getElementById('text-box');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const nav = document.getElementById('nav');
const LIGHT_THEME = 'light'
const DARK_THEME = 'dark'


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

// Event Listener
toggleSwitch.addEventListener('change', swtichTheme);

// Get Local Storage Theme
const currentTheme = localStorage.getItem('theme');

//On Load
loadTheme(currentTheme);
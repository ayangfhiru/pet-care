const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (this.scrollY >= 65) {
        header.classList.add('header');
    } else {
        header.classList.remove('header');
    }
});

const btnHamburger = document.querySelector('#hamburger');
btnHamburger.addEventListener('click', (e) => {
    e.preventDefault();
    const icon = btnHamburger.firstElementChild;
    icon.classList.toggle('fa-beat-fade');

    const stsMenu = btnHamburger.nextElementSibling;
    if (stsMenu.classList.contains('hidden')) {
        stsMenu.classList.remove('hidden');
        stsMenu.classList.add('flex');
    } else {
        stsMenu.classList.remove('flex');
        stsMenu.classList.add('hidden');
    }

})

const btnSwitch = document.querySelector('#switchImg');
let switchSrc = (function () {
    let img1 = document.querySelector('#hero1');
    let img2 = document.querySelector('#hero2');
    let hero1 = img1.src;
    let hero2 = img2.src;
    let temp;

    return function () {
        temp = hero1;
        hero1 = hero2;
        hero2 = temp;

        img1.src = hero1;
        img2.src = hero2;
    }

})();

btnSwitch.addEventListener('click', (el) => {
    el.preventDefault();
    let img1 = document.querySelector('#hero1');
    let img2 = document.querySelector('#hero2');
    img1.classList.add('opacity-0');
    img2.classList.add('opacity-0');
    btnSwitch.firstElementChild.classList.add('fa-spin');
    setTimeout(function () {
        switchSrc();
        btnSwitch.firstElementChild.classList.remove('fa-spin');
        img1.classList.remove('opacity-0');
        img2.classList.remove('opacity-0');
    }, 1000);
});


const btnRead = document.querySelectorAll('#readMore');
btnRead.forEach((el) => {
    el.addEventListener('click', (e) => {
        text = e.target.previousElementSibling;
        text.classList.toggle('hidden');
        if (text.classList.contains('hidden')) {
            e.target.textContent = "Read more...";
        } else {
            e.target.textContent = "Show less";
        }
    });
});

const copyright = document.querySelector('p span#copyright');
const year = new Date().getFullYear();
copyright.textContent = year;
const compte = document.getElementById('compte');
const menu = document.getElementById('menu');
const classInactif = 'menu-inactif';

compte.onclick = function () {
    console.log('click');
    menu.classList.toggle('menu-inactif');
};

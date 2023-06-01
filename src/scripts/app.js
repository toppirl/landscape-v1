// Update copyright year to current year
const copyYear = document.querySelector('#copyright-year');
copyYear.innerHTML = new Date().getFullYear();

//Mobile Navigation
const navButton = document.querySelector('.hamburger')
const header = document.querySelector('.header')

navButton.addEventListener('click', () => {
    header.classList.toggle('nav-open')
})
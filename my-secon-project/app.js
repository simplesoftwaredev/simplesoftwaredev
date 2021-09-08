const headOne = document.getElementsByClassName('head-one')[0];
const navbarLink = document.getElementsByClassName('navbar-link')[0];

headOne.addEventListener('click', () =>{
    navbarLink.classList.toggle('active');
});
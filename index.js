const cookieMenu = document.querySelector('.cookieMenu');
const cookieMenuClose = document.querySelector('.cookieMenuClose');
const navMenu = document.querySelector('.navMenu');

cookieMenu.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  cookieMenuClose.classList.toggle('activ');
  cookieMenu.remove('activ');
});

cookieMenuClose.addEventListener('click', () => {
  
  location.reload();
})

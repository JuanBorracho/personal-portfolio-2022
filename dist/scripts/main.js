const mobileIconContainer = document.getElementById('hamburger');
const mobileIcon = document.getElementById('mobile-icon');
const mobileMenu = document.getElementById('mobile-menu');
const exitIcon = document.getElementById('exit-icon');

mobileIconContainer.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  mobileIcon.classList.toggle('none');
});

exitIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  mobileIcon.classList.toggle('none');
});

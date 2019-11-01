// HAMBURGER MENU
var wrapperMenu = document.querySelector('.nav__hamburger-menu');
var menu = document.querySelector('.nav__list');

wrapperMenu.addEventListener('click', () => {
  menu.classList.toggle('open');
  wrapperMenu.classList.toggle('open');  
})



// HOMEPAGE SCROLL BUTTON
window.onscroll = function () {
  let opacity = 90 - window.pageYOffset;
  if (opacity < 20) {
    document.querySelector('.landing-page__button').style.opacity = '0';
  } else {
  document.querySelector('.landing-page__button').style.opacity = '0.' + opacity;
};

  if (window.pageYOffset > 100) {
    document.querySelector('.landing-page__button').style.display = 'none';
  } else {
    document.querySelector('.landing-page__button').style.display = 'flex';
  }
};






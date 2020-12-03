let toogleLink = document.getElementsByClassName ('toggle')[0];
let links = document.getElementsByClassName ('nav-links')[0];

toogleLink.addEventListener ('click', function () {
  links.classList.toggle ('active');
});

let mouseCursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('.nav-links li a');

window.addEventListener('mousemove',cursor);

function cursor (e) {
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
}

navLinks.forEach(link => {

  link.addEventListener('mouseover', () => {
    mouseCursor.classList.add("link-hide");
    link.classList.add('hovered-link');
  });

  link.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove("link-hide");
    link.classList.remove('hovered-link');
  });

});



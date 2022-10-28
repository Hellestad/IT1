



const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const x = document.querySelector('.header .nav-bar .nav-list .ul .x');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul ');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click',()=>{
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});




menu_item.forEach((item) => {
  item.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
  });
});



const handleOnMouseMove = e => {
  const { currentTarget: target } = e;

  const rect =target.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY -rect.top;

  target.style.setProperty("--mouse-x", `${x}px`);
  target.style.setProperty("--mouse-y", `${y}px`);
}

for(const meny of document.querySelectorAll(".meny-item")){
  meny.onmousemove = e => handleOnMouseMove(e);
}





x.addEventListener('click',()=>{
  x.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});

menu_item.forEach((item) => {
  item.addEventListener('click', () => {
    x.classList.toggle('active');
    mobile_menu.classList.toggle('active');
  });
});




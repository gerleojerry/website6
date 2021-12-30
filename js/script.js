let cancel = document.querySelector('.cancel')
let burger = document.querySelector('.burger')
let nav = document.querySelector('nav')

nav.style.right = '-200px'

burger.addEventListener('click', ()=> {
  if(nav.style.right == '-200px') {
    nav.style.right = '0px';
  }
  else {
    nav.style.right = '-200px';
  }
})


cancel.addEventListener('click', ()=> {
  nav.style.right = '-200px';
})

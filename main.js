navbar = document.querySelector('[data-navbar]')
NavTrocar = document.querySelectorAll('[data-trocar]')
for (const element of NavTrocar) {
  element.addEventListener('click', function () {
    navbar.classList.toggle('show')
  })
}

const links = document.querySelectorAll('[data-navbar-link]')
for (const link of links) {
  link.addEventListener('click', function () {
    navbar.classList.remove('show')
  })
}

const header = document.querySelector('[data-header]')
const navHeader = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeader) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

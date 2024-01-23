const navbar = document.getElementById("main-navbar")

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 0) {
    navbar.classList.add("navbar-after-scroll")
  } else {
    navbar.classList.remove("navbar-after-scroll")
  }
})

const navbarTransparent = document.getElementById("main-trans")

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 0) {
    navbarTransparent.classList.add("trans-after-scroll")
  } else {
    navbarTransparent.classList.remove("trans-after-scroll")
  }
})

window.onload = function() {
  const burgerMenu = document.getElementById('burger-menu')

  burgerMenu.addEventListener('click', toggleMenu)

  function toggleMenu() {
    const menu =document.getElementById('menu')

    if (!menu.classList.contains('show')) {
      menu.classList.add('show')
    } else {
      menu.classList.remove('show')
    }
  }
}
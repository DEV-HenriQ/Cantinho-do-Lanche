const allIndisponivel = document.querySelectorAll('.indisponivel')

allIndisponivel.forEach(function(cada)
{
   cada.children[1].children[3].children[0].classList.add('gray')
   cada.children[1].children[3].children[0].disabled = true
   cada.children[1].children[3].children[2].classList.add('gray')
   cada.children[1].children[3].children[2].disabled = true
})
const allmais = document.querySelectorAll('.adicionar-qtd')
allmais.forEach(function(cada)
{
   cada.addEventListener('click', () => alert('mais'))
})

const allmenos = document.querySelectorAll('.diminuir-qtd')
allmenos.forEach(function(cada)
{
   cada.addEventListener('click', () => alert('menos'))
})

const allIndisponivel = document.querySelectorAll('.indisponivel')

allIndisponivel.forEach(function(cada)
{
   cada.children[1].children[3].children[0].classList.add('gray')
   cada.children[1].children[3].children[0].disabled = true
   cada.children[1].children[3].children[2].classList.add('gray')
   cada.children[1].children[3].children[2].disabled = true
})
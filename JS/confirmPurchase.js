const fechar = document.querySelector('#fechar-div')
const fechar2 = document.querySelector('#fechar-div-2')

fechar.addEventListener('click', abrirEfechar)
fechar2.addEventListener('click', abrirEfechar)

function abrirEfechar()
{
   const minhaDiv = document.querySelector('.meu-pedido-container')
   const meuConteudo = document.querySelector('.meu-pedido')

   if (minhaDiv.classList.contains('esmaecer-1'))
   {
      minhaDiv.classList.remove('esmaecer-1')
      minhaDiv.classList.add('esmaecer-2')

      meuConteudo.classList.remove('aparecer')
      meuConteudo.classList.add('desaparecer')
   }
   else
   {
      minhaDiv.classList.add('esmaecer-1')
      minhaDiv.classList.remove('esmaecer-2')

      meuConteudo.classList.add('aparecer')
      meuConteudo.classList.remove('desaparecer')
   }

   const formulario = document.querySelector('.formulario')
   if (formulario.classList.contains('aparecer-2'))
   {
      formulario.classList.remove('aparecer-2')
      formulario.classList.add('desaparecer-2')
   }
}

const vai = document.querySelector('.vai')
vai.addEventListener('click', abrir2)

function abrir2()
{
   const formulario = document.querySelector('.formulario')
   formulario.classList.add('aparecer-2')
   formulario.classList.remove('desaparecer-2')
   prepareToZap()
}
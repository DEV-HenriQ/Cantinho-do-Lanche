const fechar = document.querySelector('#fechar-div')

fechar.addEventListener('click', abrirEfechar)

function abrirEfechar()
{
   const minhaDiv = document.querySelector('.meu-pedido-container')

   if (minhaDiv.classList.contains('aparecer'))
   {
      minhaDiv.classList.remove('aparecer')
      minhaDiv.classList.add('desaparecer')
   }
   else
   {
      minhaDiv.classList.add('aparecer')
      minhaDiv.classList.remove('desaparecer')
   }
}
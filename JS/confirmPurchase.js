const fechar = document.querySelector('#fechar-div')

fechar.addEventListener('click', abrirEfechar)

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
}
document.addEventListener("DOMContentLoaded", function() 
{
   const carrinho = document.querySelector('.icone-de-carrinho')

   setInterval(function()
   {
      carrinho.classList.add('scaling-animation')

      setTimeout(function()
      {
         carrinho.classList.remove('scaling-animation')
      }, 2000)
   }, 4000)
})
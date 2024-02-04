const carrinho = document.querySelector('.icone-de-carrinho')
carrinho.addEventListener('click', verifyQtd)

function verifyQtd()
{
   abrirEfechar()
   let totalPedido = 0
   const allItens = document.querySelectorAll('.item-de-compra')
   allItens.forEach(function(cada)
   {
      let qtd = Number(cada.children[1].children[3].children[1].innerHTML)
      if (qtd > 0)
      {
         let quantidade = qtd
         let nome = cada.children[1].children[0].innerHTML
         let valorUnitario = cada.children[1].children[2].innerHTML.slice(3,7)
         let valorTotal = transform(valorUnitario, qtd)
         totalPedido+= valorTotal

         console.log(`${quantidade} - ${nome} - R$ ${valorUnitario} - R$ ${valorTotal.toFixed(2).replace('.',',')}`)
      }
   })
   if (totalPedido == 0)
   {
      console.log('Carrinho vazio =(\nAdicione itens ao carrinho...')
      return
   }
   console.log(`Valor dos produtos = ${(totalPedido).toFixed(2).replace('.',',')}`)
   console.log('Frete = R$ 5,00')
   console.log(`Valor total = R$ ${(totalPedido + 5).toFixed(2).replace('.',',')}`)
}

function transform(valor, quantidade)
{
   let dotValue = valor.replace(',','.')
   let numberValue = parseFloat(dotValue)
   return(numberValue * quantidade)
}
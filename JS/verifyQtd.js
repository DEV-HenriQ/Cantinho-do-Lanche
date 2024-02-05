const carrinho = document.querySelector('.icone-de-carrinho')
carrinho.addEventListener('click', verifyQtd)

function verifyQtd()
{
   abrirEfechar()
   let totalPedido = 0
   const meusItens = document.querySelector('.meus-itens')
   const osItens = document.querySelector('.os-itens')
   const msgDosItens = document.querySelector('.msg-dos-itens')
   msgDosItens.innerHTML = ''
   osItens.innerHTML = ''

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

         let pg = document.createElement('p')
         pg.innerHTML = `${quantidade} - ${nome} - R$ ${valorTotal.toFixed(2).replace('.',',')}`
         osItens.append(pg)
      }
   })
   if (totalPedido == 0)
   {
      osItens.innerHTML = `<img src="../IMG/vazio.jpg" alt="imagem representando vazio" width="180px" height="180px">`
      document.querySelector('.vai').disabled = true
      document.querySelector('.vai').classList.add('gray-1')
   }
   else
   {
      document.querySelector('.vai').disabled = false
      document.querySelector('.vai').classList.remove('gray-1')

      let p1 = document.createElement('p')
      p1.innerHTML = `Valor dos produtos = R$ ${(totalPedido).toFixed(2).replace('.',',')}`
      let p2 = document.createElement('p')
      p2.innerHTML = 'Frete = R$ 5,00'
      let p3 = document.createElement('p')
      p3.innerHTML = `Valor total = R$ ${(totalPedido + 5).toFixed(2).replace('.',',')}`

      msgDosItens.append(p1,p2,p3)
   }
}

function transform(valor, quantidade)
{
   let dotValue = valor.replace(',','.')
   let numberValue = parseFloat(dotValue)
   return(numberValue * quantidade)
}
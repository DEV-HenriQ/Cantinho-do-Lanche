let mensagemPraFirma = ''
let meuLink = document.querySelector('#mandar-pro-zap')
meuLink.target = "_blank"

function prepareToZap()
{
   let myInterval = setInterval(function()
   {
      const nome = document.querySelector('#nome').value
      const endereco = document.querySelector('#endereco').value
      const referencia = document.querySelector('#referencia').value
      const formaPgmt = document.querySelector('#pagamento').value
      const observacoes = document.querySelector('#obs').value
      const pedido = document.querySelector('.os-itens').innerHTML
      const pedidoF = transformingToTextZap(pedido)
      const totalApagarFinal = document.querySelector('.msg-dos-itens').children[2].innerText

      mensagemPraFirma = `https://wa.me/+5581998249582?text=PEDIDO%20CANTINHO%20DO%20LANCHE%20-%20VIA%20SITE%0D%0A%0D%0APedido%20de:%20*${nome}*!%0D%0A%0D%0A--------------------------------%0D%0A%0D%0A${pedidoF}%0D%0A%0D%0AObservações:%20${observacoes}%0D%0A%0D%0A${totalApagarFinal}%0D%0A%0D%0AForma%20de%20pagamento:%20${formaPgmt}%0D%0A%0D%0A--------------------------------%0D%0A%0D%0ADados%20Pessoais:%0D%0ANome:%20${nome}%0D%0AEndereço:%20${endereco}%0D%0APonto%20de%20Referência:%20${referencia}`

      meuLink.href = mensagemPraFirma
   }, 500)
}

function transformingToTextZap(pedido) {
   return pedido.replace(/<p>/g, '').replace(/<\/p>/g, '%0D%0A');
}
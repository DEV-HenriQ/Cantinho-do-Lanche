const allPlus = document.querySelectorAll('.adicionar-qtd')
allPlus.forEach(function(cada)
{
   cada.addEventListener('click', plusSpan)
})

const allMinus = document.querySelectorAll('.diminuir-qtd')
allMinus.forEach(function(cada)
{
   cada.addEventListener('click', minusSpan)
})

function plusSpan()
{
   let numberSpan = Number(event.target.previousElementSibling.innerHTML) + 1
   event.target.previousElementSibling.innerHTML = numberSpan
}

function minusSpan()
{
   if (Number(event.target.nextElementSibling.innerHTML) == 0)
   {
      return
   }
   else
   {
      let numberSpan = Number(event.target.nextElementSibling.innerHTML) - 1
      event.target.nextElementSibling.innerHTML = numberSpan
   }
}
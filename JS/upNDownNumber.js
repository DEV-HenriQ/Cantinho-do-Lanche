// Botão de mais
let intervalId;

const allPlus = document.querySelectorAll('.adicionar-qtd');

allPlus.forEach(function (cada) {
   cada.addEventListener('mousedown', function () {
      intervalId = setInterval(function () {
         plusSpan(cada); // passando o objeto 'cada' como argumento
      }, 150);
   });

   cada.addEventListener('mouseup', function () {
      clearInterval(intervalId);
   });

   cada.addEventListener('touchstart', function () {
      intervalId = setInterval(function () {
         plusSpan(cada); // passando o objeto 'cada' como argumento
      }, 150);
   });

   cada.addEventListener('touchend', function () {
      clearInterval(intervalId);
   });

   cada.addEventListener('click', function () {
      plusSpan(cada);
   });
});

function plusSpan(element) {
   let qtd = element.previousElementSibling
   qtd.innerHTML = Number(qtd.innerHTML) + 1;
   if (Number(qtd.innerHTML) == 1)
   {
      let contador = document.getElementById('contador')
      contador.innerHTML = Number(contador.innerHTML) + 1
   }
}

// Botão de menos

let pressionadoMinus = false;
let intervalIdMinus;

const allMinus = document.querySelectorAll('.diminuir-qtd');

allMinus.forEach(function (cada) {
   cada.addEventListener('mousedown', function () {
      pressionadoMinus = true;
      intervalIdMinus = setInterval(function () {
         minusSpan(cada);
      }, 150);
   });

   cada.addEventListener('mouseup', function () {
      pressionadoMinus = false;
      clearInterval(intervalIdMinus);
   });

   cada.addEventListener('touchstart', function () {
      pressionadoMinus = true;
      intervalIdMinus = setInterval(function () {
         minusSpan(cada);
      }, 150);
   });

   cada.addEventListener('touchend', function () {
      pressionadoMinus = false;
      clearInterval(intervalIdMinus);
   });

   cada.addEventListener('click', function () {
      minusSpan(cada);
   });
});

function minusSpan(element) {
   if (pressionadoMinus || event.type === 'click')
   {
      if (Number(element.nextElementSibling.innerHTML) > 0)
      {
         let qtd = element.nextElementSibling
         qtd.innerHTML = Number(qtd.innerHTML) - 1;
         if (qtd.innerHTML == 0)
         {
            document.getElementById('contador').innerHTML = Number(document.getElementById('contador').innerHTML -1)
         }
      }
   }
}
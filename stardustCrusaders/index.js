var numSecrt = parseInt(Math.random() * 11);
 function Chutar() {
   var elementoResult = document.getElementById("resultado");
   var chute = parseInt(document.getElementById("valor").value);

   if (chute == numSecrt) {
     elementoResult.innerHTML = "Você acertou!";

   } else if (chute > 10 || chute < 0){
    elementoResult.innerHTML = "Você deve digitar um número de 0 a 10";
   } else {
     elementoResult.innerHTML = "Você errou!";

   }
 }
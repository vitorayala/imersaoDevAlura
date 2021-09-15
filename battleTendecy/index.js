function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorDolarNum = parseFloat(valor);

  var valorReais = valorDolarNum * 5.25.toFixed(2);
  console.log("R$ "+valorReais);

  var elementoConvrt = document.getElementById("valorConvertido");
  var valorConvrt = "O resultado em real é R$ " + valorReais;
  elementoConvrt.innerHTML = valorConvrt;
  
}
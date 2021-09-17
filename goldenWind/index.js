function adicionarFilme() { //Função para adicionar o filme
  var adFilme = document.getElementById("filme").value;
  if(adFilme.endsWith(".jpg") || adFilme.endsWith(".png")){
    exibirFilme(adFilme);
  }
  else {
    console.error("A URL é inválida");
  }
  document.getElementById("filme").value = "";
}

function exibirFilme(exFilme) { // Função para exibir o filme
  var elementoFilme = "<img src='" +exFilme+ "'>";
  var elementoExFilme = document.getElementById("listaFilmes");
  elementoExFilme.innerHTML = elementoExFilme.innerHTML + elementoFilme;
}
var carta1 ={
  nome: "Charmander",
  imagem: "img/charmander.png",
  atributos: {
    ATK: 52,
    DEF: 43,
    SPD: 65
  }
};

var carta2 ={
  nome: "Squirtle",
  imagem: "img/squirtle.png",
  atributos: {
    ATK: 48,
    DEF: 65,
    SPD: 43
  }
};

var carta3 ={
  nome: "Bulbassaur",
  imagem: "img/bulbasaur.jpg",
  atributos: {
    ATK: 49,
    DEF: 49,
    SPD: 45
  }
};

var cartas = [carta1, carta2, carta3];
var cartaCpu;
var cartaPlayer;

function sortearCarta() {
  var iCartaCpu = parseInt(Math.random() * 3);
  cartaCpu = cartas[iCartaCpu];

  var iCartaPlayer = parseInt(Math.random() * 3);
  while (iCartaCpu == iCartaPlayer) {
    iCartaPlayer = parseInt(Math.random() * 3);
  }
  cartaPlayer = cartas[iCartaPlayer];
  console.log(cartaPlayer);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirCartaPlayer();
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";

   for (var atributo in cartaPlayer.atributos){
     opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" +atributo+"<br>";
   }
   opcoes.innerHTML = opcoesTexto;
}

function obtemAtribSelec() {
  var radioAtributo = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributo.length; i++){
    if(radioAtributo[i].checked == true){
      return radioAtributo[i].value
    }
  }
}

function jogar() {
  var atributoSelec = obtemAtribSelec();
  var divResultado = document.getElementById("resultado");

  var elementoResultado = document.getElementById("resultado");
  var valPlayer = cartaPlayer.atributos[atributoSelec];
  var valCpu = cartaCpu.atributos[atributoSelec];

  if (valPlayer > valCpu){
    htmlResultado = "<p class='resultado-final'>Venceu!!</p>";
  } else if (valPlayer < valCpu){
    htmlResultado = "<p class='resultado-final'>Perdeu!!</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empate!!</p>";
  }
  divResultado.innerHTML = htmlResultado;
  document.getElementById("btnJogar").disabled = true;
  exibirCartaCpu();
  document.getElementById("btnSortear").disabled = false;
}

function exibirCartaPlayer(){
  var divCartaPlayer = document.getElementById("carta-jogador");
  divCartaPlayer.style.backgroundImage = `url(${cartaPlayer.imagem})`
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div style='text-align:center' id='opcoes' class='carta-status'>"
  
  var opcoesTexto = "";

   for (var atributo in cartaPlayer.atributos){
     opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" +atributo+ ": " +cartaPlayer.atributos[atributo]+ "<br>";
   }
   var nome = `<p class="carta-subtitle">${cartaPlayer.nome}</p>`;

   divCartaPlayer.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaCpu() {
  var divCartaCpu = document.getElementById("carta-maquina");
  divCartaCpu.style.backgroundImage = `url(${cartaCpu.imagem})`;
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div  id='opcoes' class='carta-status'>";
  
  var opcoesTexto = "";

   for (var atributo in cartaCpu.atributos){
     opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" +atributo+ ": " +cartaCpu.atributos[atributo]+ "</p>";
   }
   var nome = `<p class="carta-subtitle">${cartaCpu.nome}</p>`;

   divCartaCpu.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
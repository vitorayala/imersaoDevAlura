var carta1 ={
  nome: "Charmander",
  atributos: {
    atk: 10,
    def: 4,
    spd: 6
  }
};

var carta2 ={
  nome: "Squirtle",
  atributos: {
    atk: 9,
    def: 7,
    spd: 3
  }
};

var carta3 ={
  nome: "Bulbassaur",
  atributos: {
    atk: 7,
    def: 8,
    spd: 4
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

  exibirOpcoes();
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
  var elementoResultado = document.getElementById("resultado");
  var valPlayer = cartaPlayer.atributos[atributoSelec];
  var valCpu = cartaCpu.atributos[atributoSelec];

  if (valPlayer > valCpu){
    elementoResultado.innerHTML = "Você venceu!!";
  } else if (valPlayer < valCpu){
    elementoResultado.innerHTML = "Você perdeu!!";
  } else {
    elementoResultado.innerHTML = "Você empatou!!";
  }
}
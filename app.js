var cartaPaulo = {
    nome: "Shiryu de Dragão",
    imagem: "https://omaringa.com.br/wp-content/uploads/2021/09/shiryu-1.jpg",
    atributos: {
      ataque: 6,
      defesa: 8,
      magia: 9
    }
  };
  
  var cartaRafa = {
    nome: "Bulbassauro",
    imagem: "https://gartic.com.br/imgs/mural/jh/jhonfs/bulbassauro.png",
    atributos: {
      ataque: 7,
      defesa: 8,
      magia: 6
    }
  };
  
  var cartaGui = {
    nome: "Darth Vader",
    imagem: "https://m.media-amazon.com/images/I/71HRxqCRYTL._AC_SX679_.jpg",
    atributos: {
      ataque: 10,
      defesa: 9,
      magia: 5
    }
  };
  
  var cartas = [cartaPaulo, cartaRafa, cartaGui];
  var cartaMaquina; // variáveis sendo criadas fora da função para serem utilizadas em várias funções
  var cartaJogador;
  
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3); //math.random é uma função, então tem que ter ()
    cartaMaquina = cartas[numeroCartaMaquina];
  
    var numeroCartaJogador = parseInt(Math.random() * 3);
    while (numeroCartaMaquina == numeroCartaJogador) {
      var numeroCartaJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibirCartaJogador();
  }
  
  function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
  
    for (var i = 0; i > radioAtributos.length; i++) {
      if (radioAtributos[i].checked == true) {
        return radioAtributos[i].value;
      }
    }
  }
  
  function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");
  
    if (
      cartaJogador.atributos[atributoSelecionado] >
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'>Você venceu!</p>";
    } else if (
      cartaJogador.atributos[atributoSelecionado] <
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'>Você perdeu...</p>";
    } else {
      htmlResultado = "<p class='resultado-final'>Empatou!</p>";
    }
    divResultado.innerHTML = htmlResultado;
  
    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
  }
  
  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`; // anotação do css para poder colocar a imagem, entre acentos graves. Outra opção é escrever assim: divCartaJogador.style.backgroundImage= "url(" + cartaJogador.imagem + ")";
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaJogador.atributos[atributo] +
        "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  
  function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    ('<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">');
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type='text' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaMaquina.atributos[atributo] +
        "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  
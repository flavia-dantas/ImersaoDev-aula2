function converterDolar() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  var valorEmReal = valorEmDolarNumerico * 5.26;

  if (valor == "") {
    alert("Por gentileza insira o valor em Dolar para converter");
  } else if (valor != "") {
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real é R$ " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
}

function converterEuro() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmEuroNumerico = parseFloat(valor);
  var valorEmReal = valorEmEuroNumerico * 6.19;

  if (valor == "") {
    alert("Por gentileza insira o valor em Euro para converter");
  } else if (valor != "") {
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real é R$ " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
}

function converterLibra() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmLibraNumerico = parseFloat(valor);
  var valorEmReal = valorEmLibraNumerico * 7.25;

  if (valor == "") {
    alert("Por gentileza insira o valor em Libra para converter");
  } else if (valor != "") {
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real é R$ " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
}

function converterBitcoin() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmBitcoin = parseFloat(valor);
  var valorEmReal = valorEmBitcoin * 251.449;

  if (valor == "") {
    alert("Por gentileza insira o valor em Bitcoin para converter");
  } else if (valor != "") {
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real é R$ " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
}
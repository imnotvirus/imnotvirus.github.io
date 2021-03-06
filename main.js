var calculado = false;
//desabilita o botão no início
document.getElementById("botao").disabled = true;

//cria um event listener que escuta mudanças no input
document.getElementById("valor-total").addEventListener("input", function (event) {

  //busca conteúdo do input
  var conteudo = document.getElementById("valor-total").value;

  //valida conteudo do input 
  if (conteudo !== null && conteudo !== '') {
    //habilita o botão
    document.getElementById("botao").disabled = false;
  } else {
    //desabilita o botão se o conteúdo do input ficar em branco
    document.getElementById("botao").disabled = true;
  }
});


function escreverNaTela(parcela, numero01, numero02) {
  let node = document.createElement("li");
  node.setAttribute("class", "list-group-item ");
  let textnode = document.createTextNode(parcela + "\tx \t" + parseFloat(numero01).toFixed(2) + "\tTotal de R$" + parseFloat(numero02).toFixed(2));

  node.appendChild(textnode);
  document.getElementById("parcelas").appendChild(node);
}

function gerarParcelas() {

  if (calculado) {
    window.location.reload(true);
  }
  calculado = true;
  let juros = parseFloat(document.getElementById("juros").value);
  juros = juros / 100;
  let meses = parseFloat(document.getElementById("meses").value);
  let valor = parseFloat(document.getElementById("valor-total").value);

  let jurosDaCompra = valor * juros * meses;

  let compra = valor + jurosDaCompra;

  let parcela = compra / meses;

  escreverNaTela(meses,parcela,compra);

  const botao = document.getElementById("botao");
  botao.innerHTML = "RESETAR";
}
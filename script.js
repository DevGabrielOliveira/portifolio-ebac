
function armazenarValor(){//aqui criamos a função "armazenarValor" que é acionada quando clicamos no botão "armazenar"

    var textoParaArmazenar = document.getElementById("textoParaArmazenar").value;
    // aqui a varivel guarda o valor passado no input com id "textoParaArmazenar"

    console.log(textoParaArmazenar)
    document.getElementById("valorArmazenado").innerText = "O valor inserido é " + textoParaArmazenar;
    //aqui mostramos para o console o valor armazenado com uma mensagem
}
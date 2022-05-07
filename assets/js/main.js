function insere(num) {
    var numero = document.getElementById('operacao').innerHTML;
    document.getElementById('operacao').innerHTML = numero + num;
}

function limpa() {
    document.getElementById('operacao').innerHTML = "";
}

function apaga() {
    var operacao = document.getElementById('operacao').innerHTML;
    document.getElementById('operacao').innerHTML = operacao.substring(0, operacao.length - 1);
}

function calcular() {
    var resultado = document.getElementById('operacao').innerHTML;

    if (resultado) {

        document.getElementById('operacao').innerHTML = eval(resultado);

    }

    else {
        document.getElementById('operacao').innerHTML = "Nenhuma operação";

        if(document.onkeyup)
        limpa();
            
        
    }

}


// let contador = 0;

// for (let contador = 0; contador < listaDeTeclas.length; contador++) {

//     const tecla = listaDeTeclas[contador];

//     listaDeTeclas[contador].onclick = insert;

// }



function calcular() {
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);
    var operacao = document.getElementById('selector').value;
    var resultado;

    if (operacao === '+') {
        resultado = n1 + n2;
    } else if (operacao === '-') {
        resultado = n1 - n2;
    } else if (operacao === '*') {
        resultado = n1 * n2;
    } else if (operacao === '/') {
        resultado = n1 / n2;
    }

    document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
}
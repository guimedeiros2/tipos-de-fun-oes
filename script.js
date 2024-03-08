function calcularAreaQuadrado() {
    var lado = parseFloat(document.getElementById('ladoQuadrado').value);
    var area = lado * lado;
    document.getElementById('resultadoQuadrado').innerHTML = 'Área do Quadrado: ' + area.toFixed(2);
}

// Expressão de função
var calcularAreaCirculo = function() {
    var raio = parseFloat(document.getElementById('raioCirculo').value);
    var area = Math.PI * Math.pow(raio, 2);
    document.getElementById('resultadoCirculo').innerHTML = 'Área do Círculo: ' + area.toFixed(2);
};

// Notação de função de seta
var calcularAreaTriangulo = () => {
    var base = parseFloat(document.getElementById('baseTriangulo').value);
    var altura = parseFloat(document.getElementById('alturaTriangulo').value);
    var area = (base * altura) / 2;
    document.getElementById('resultadoTriangulo').innerHTML = 'Área do Triângulo: ' + area.toFixed(2);
};
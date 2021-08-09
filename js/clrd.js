//Condicional
/*
var idade = prompt("Qual sua idade");//Exibe uma pergunta e grava a variável
//var idade = 18; // Número inteiro
if (idade >= 18){ //Se a idade for maior ou igual a 18
    alert("Maior de Idade"); // Retorna o alerta maior de idade
} else {
    alert("Menor de Idade"); // Retorna o alerta menor de idade
};
*/
/*
//Repetição
var count = 0; // Inicio da contagem do laço
while (count <= 5) { // Irá repetir o laço conforme o número de variáveis
    console.log(count); //Exibe no console a variável count
    //count = count + 1; // Ele recebe ele mesmo mais 1
    count++; // Funciona da mesma forma que a primeira condição
};*/

/*
// Repetição For
var count;
for(count=0; count <= 5; count++ ) {
    console.log(count);
    alert(count);
};
*/

// Data
// Trabalhando com data atual
var d = new Date();
console.log(d);
console.log(d.getMonth()+1);
alert(d);
alert("Dia " + d.getDay());
alert("Mês " + (d.getMonth()+1));
alert("Minutos " + d.getMinutes());
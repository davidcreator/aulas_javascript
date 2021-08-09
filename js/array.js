// Array e Dicionários

var lista = ["maçã", "pêra", "laranja"]; // Array
lista.push("uva"); // Irá adicionar um novo elemento ao array
lista.pop("pêra"); // Remove um elemento do array
console.log(lista); //Exibe no console a lista
console.log(lista.length); //Exibe a quantidade de elementos no array
console.log(lista.reverse()); //Reverte a ordem dos elementos no array
console.log(lista.toString()); // Exibe os array em formato string
console.log(lista.toString()[0]); // Irá retornar a primeira letra localizada no array
alert(lista.toString()[0]); // Exibe alerta da primeira letra do array
console.log(lista.join(" - ")); // Permite alterar os elementos que separam os arrays.

// Para imprimir, ou seja, exibir um único item do array pode direcionar qual array deve ser exibido
/*
var lista = ["maçã", "pêra", "laranja"]; // Array
console.log(lista[1]); //Exibe o array selecionado contando a partir de 0 (zero).
alert(lista[1]);//Irá retornar em alerta somente o array 1 ou seja Pêra.
*/
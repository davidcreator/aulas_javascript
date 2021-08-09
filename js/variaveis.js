// Trabalhando com variáveis

var nome = "Nome desejado"; // Não precisa informa qual o tipo de varial string ou number o próprio javascript reconhece
var idade = 29;
alert("Bem vindo " /*Utilize o sinal de + para concatenar*/ + nome);

//var nome = "Nome desejado"; 
//var idade = 29;
//alert(nome + " tem " + idade + " anos");

// Demonstrando soma entre números inteiros
var nome = "Nome desejado"; // Não precisa informa qual o tipo de varial string ou number o próprio javascript reconhece
var idade = 29;
var idade2 = 10;
alert(idade + idade2); // Realizou uma soma pois verificou números inteiros

// Tornando número inteiro em strings
var nome = "Nome desejado"; // Não precisa informa qual o tipo de varial string ou number o próprio javascript reconhece
var idade = "29";
var idade2 = "10";
alert(idade + idade2); // Irá concatenar pois entende como string

// Trabalhando com Console.log()

var nome = "Nome desejado"; // Não precisa informa qual o tipo de varial string ou number o próprio javascript reconhece
var idade = 29;
var idade2 = 10;
console.log(nome);
console.log(idade + idade2); // Carrega as informações no console do navegador

// Realizando algumas alterações na string com Replace, toUpperCase, toLowerCase
var frase = "Japão é o melhor time do mundo";
console.log(frase.replace("Japão", "Brasil")); // Replace realiza a troca da palavra selecionada
console.log(frase.toUpperCase()); // Retorna tudo maisculo
console.log(frase.toLowerCase()); // Retorna tudo minusculo

// Demonstraçãode cálculo
var n1 = 5;
var n2 = 3;
console.log(n1 * n2); // Retornará o valor múltiplicado *
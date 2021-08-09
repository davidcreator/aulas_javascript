//Funções

//Função aritmética
function soma(n1, n2) {
    return n1 + n2;
}

console.log(soma(10, 10)); // Soma as variáveis n1 e n2 através do return

alert(soma(10, 10)); // Retorna em tela a soma das variáveis n1 e n2 da função return

//Função trocar - replace

function setReplace(frase, nome, novo_nome){ // Prepara para troca da string
    return frase.replace(nome, novo_nome) // Gera a troca da string
};

alert(setReplace("Vai Japão", "Japão", "Brasil"));//Exibe a alteração do string

// Função Local
function validaIdade(idade){
    if (idade >= 18){
        validar = true
    } else {
        var validar = false;
    }
    return validar;
    
}
var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));

//Função Global
var validar;
function validaIdade(idade){
    if (idade >= 18){
        validar = true
    } else {
        validar = false;
    }
    return validar;
    
}
var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));


// Manipulando elementos
function clicou(){
    document.getElementById("clicou2").innerHTML = "<b><i>Obrigado por clicar</b></i>";
    //innerHTML permite acrescentar outras tags HTML
    console.log(document.getElementById("clicou2"));
};

// Enviando para outra página
function redireciona(){
    //window.open("https://davidcreator.com/"); // Abre o redirecionamento em nova janela
    window.location.href = "https://davidcreator.com/tutoriais/"; // Abre o redirecionamento na mesma janela
}

// Mouse Over

function clicou3(elemento){
    elemento.innerHTML = "";
    //document.getElementById("clicou3").innerHTML = "Obrigado você passou o mouse!";
    //alert("Trocar texto")
}


function voltar(){
    document.getElementById("clicou3").innerHTML = "Trocou novamente";
}

//Carregar
function load(){
    alert("página carregada");
}

//Exchange
function change(elemento){
    alert(elemento.value);
    console.log(elemento.value);
}
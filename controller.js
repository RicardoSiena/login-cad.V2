// Função para validar o CPF
function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, ''); // Remove caracteres não numéricos
 
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false; // CPF com todos os dígitos iguais é inválido
    }
 
    let soma = 0;
    let resto;
 
    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
 
    resto = (soma * 10) % 11;
 
    if ((resto === 10) || (resto === 11)) {
        resto = 0;
    }
 
    if (resto !== parseInt(cpf.substring(9, 10))) {
        return false;
    }
 
    soma = 0;
 
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
 
    resto = (soma * 10) % 11;
 
    if ((resto === 10) || (resto === 11)) {
        resto = 0;
    }
 
    if (resto !== parseInt(cpf.substring(10, 11))) {
        return false;
    }
 
    return true;
}
 
// FUNÇÃO PARA VALIDAÇÃO DE ACESSO
function acessar() {
    // Obtém os valores dos campos de email e senha
    let loginEmail = document.getElementById("loginEmail").value;
    // VALOR DA ENTRADA DO EMAIL PELO VALUE(QUE PEGA O VALOR DO INPUT)
    // O getElementByID recupera um elemento da página apenas pelo ID
    let loginSenha = document.getElementById("loginSenha").value;
    // VALOR DA ENTRADA DA SENHA
 
    // Verifica se os campos estão preenchidos
    if (!loginEmail || !loginSenha) {
        // Se algum campo estiver vazio, exibe um alerta
        alert("Favor preencher todos os campos");
        // VERIFICA SE O CAMPO FOI PREENCHIDO CORRETAMENTE
    } else {
        // alert("Campos preenchidos com sucesso!");
        window.location.href = "cadastro.html";
        // USADO PARA LEVAR O USUÁRIO PARA A PÁGINA DE CADASTRO
    }
}
 
//  FUNÇÃO PARA ARMAZANAMENTO DE NOMES EM ARRY
var dadosLista = [];
var EmailLista = [];
var CPFlista = [];
 
// Função para salvar o nome do usuário na lista
function salvarUser() {
    let nomeUser = document.getElementById("nomeUser").value;
    let emailUser = document.getElementById("emailUser").value;
    // ALERTA CASO O CAMPO ESTEJA VAZIO
    let CPFUser = document.getElementById("CPFUser").value;
        // Se alguma das condições acima for verdadeira, exibe um alerta
    if (emailUser === "" || emailUser.indexOf('@') === -1 || emailUser.indexOf('.') === -1) {
        alert("Por favor, informe um e-mail válido");
    } else if (!validarCPF(CPFUser)) {
        alert("Por favor, informe um CPF válido");
    } else if (nomeUser && emailUser && CPFUser) {
        dadosLista.push(nomeUser);
        EmailLista.push(emailUser);
        CPFlista.push(CPFUser);
        criarLista();
        document.getElementById("nomeUser").value = "";
        document.getElementById("emailUser").value = "";
        document.getElementById("CPFUser").value = "";
    } else {
        alert("Por favor, preencha todos os campos");
    }
}
 
// Função para criar e atualizar a lista de usuários na tela
function criarLista() {
    let tabela = "<tr><th>Nome Usuário</th><th>E-mail</th><th>CPF</th><th>Ações</th></tr>";
 
    for (let i = 0; i < dadosLista.length; i++) {
        tabela += "<tr><td>" + dadosLista[i] + "</td><td>" + EmailLista[i] + "</td><td>" + CPFlista[i] + "</td><td><button type='button' onclick='editar(this.parentNode.parentNode.rowIndex)' class='btn-rosa'>Editar</button><button type='button' onclick='excluir(this.parentNode.parentNode.rowIndex)' class='btn-rosa'>Excluir</button></td></tr>";
    }
 
    document.getElementById("tabela").innerHTML = tabela;
}
 
// Função para editar um nome na lista
function editar(i) {
    document.getElementById('nomeUser').value = dadosLista[i - 1];
    document.getElementById('emailUser').value = EmailLista[i - 1];
    document.getElementById('CPFUser').value = CPFlista[i - 1];
 
    dadosLista.splice(i - 1, 1);
    EmailLista.splice(i - 1, 1);
    CPFlista.splice(i - 1, 1);
 
    criarLista();
}
 
// Função para excluir um nome na lista
function excluir(i) {
    dadosLista.splice(i - 1, 1);
    EmailLista.splice(i - 1, 1);
    CPFlista.splice(i - 1, 1);
 
    criarLista();
}
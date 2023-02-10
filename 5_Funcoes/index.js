"use strict";
// 1 - void
function withoutReturn() {
    console.log("Essa função não tem retorno");
}
withoutReturn();
// 2 - Callback
function greeting(name) {
    return `Ola ${name}`;
}
function preeGreeting(f, nomeUsuario) {
    console.log("Preparando a funcao");
    const greet = f(nomeUsuario);
    console.log(greet);
}
preeGreeting(greeting, "Mateus");
preeGreeting(greeting, "Andre");
function saudacao(nome) {
    return `Ola ${nome}`;
}
function preSaudacao(p, nameUser) {
    const cumprimento = p(nameUser);
    console.log(cumprimento);
}
preSaudacao(saudacao, "Antonio");
preSaudacao(saudacao, "Marcos");
// 3 - Generic Functions 

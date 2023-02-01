"use strict";
// 1 - Arrays 
let number = [1, 2, 3, 4];
console.log(number[1]);
//----------------------------------------------
let worlds = ["uva", "abacaxi", "maracuja", "morango", "banana"];
console.log(worlds[4]);
// 2 - Outra sintaxe array
const nums = [100, 200, 300];
console.log(nums[0]);
//----------------------------------------------
const palavra = ["paulo", "casa", "residencia"];
console.log(palavra[1]);
// 3 - Tipo Any
const arr1 = [1, "teste", true, [], { nome: "matheus" }];
console.log(arr1);
// 4 - parametros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(4, 4);
//----------------------------------------------
function saudacao(nome, sobrenome) {
    console.log(`Bem vindo ${nome} ${sobrenome} `);
}
saudacao("Antonio", "Gabinio");
// 5 - retorno de funcao
function greeting(name) {
    return `Ola ${name}`;
}
console.log(greeting("Matheu"));
// 6 - Funcao anonima
setTimeout(function () {
    const sallary = 1000;
    // console.log(parseFloat(sallary))
}, 2000);
// 7 - Tipos de objeto
function passCoordinate(coord) {
    console.log("X coordintes: " + coord.x);
    console.log("X coordinates: " + coord.y);
}
const objectCoord = { x: 329, y: 84.2 };
passCoordinate(objectCoord);
function coordenacaomine(coord) {
    console.log("Coordenada X: " + coord.x);
    console.log("Coordenada Y: " + coord.y);
    console.log("Coordenada Z: " + coord.z);
}
const ObjectCoordenado = { x: 123091, y: -32032, z: 2303 };
coordenacaomine(ObjectCoordenado);
// 8 - Propriedades opcionais
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c) {
        console.log("C: " + c);
    }
}
showNumbers(1, 2);
// 9 - Validacao de props opcionais
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        console.log(`Olá ${firstName} ${lastName}, tudo bem?`);
    }
    console.log(`Olá ${firstName}`);
}
advancedGreeting("Antonio", "Gabinio");
// 10 -Union Type
function showBalance(balance) {
    console.log(`o saldo da conta é R$${balance}`);
}
showBalance("10000");
showBalance(10000);
// 11 - Avançando em Union Types
function showUserRoles(role) {
    if (typeof role === "boolean") {
        return "Usuario não aprovado!";
    }
    return console.log(`A função do usuario é: ${role}`);
}
showUserRoles(true);
showUserRoles("Security Officer");
function showID(id) {
    console.log(`O ID é: ${id}`);
}
showID(1);
showID("100");
function peo(idade, nome) {
    console.log(`O seu nome é ${nome} e voce tem ${idade}`);
}
peo(18, "Antonio");
function showCoords(obj) {
    console.log(`X:${obj.x} Y:${obj.y} Z:${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 15,
    z: 20,
};
showCoords(coordObj);

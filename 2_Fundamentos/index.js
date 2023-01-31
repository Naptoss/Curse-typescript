"use strict";
// // - Inference e annotation 
// const ann: string = "Teste" // <-- esse modo aqui seria uma annotation
// let x = "a" // <--- esse modo aqui seria um inference
// console.log(ann)
// let x: unknown = 'hello';
// console.log((x as string).length);
let n1 = 10;
let numberToString = n1.toString();
const printNumber = `Eu vou chamar o numero ${numberToString}`;
console.log(printNumber);

// Exc: 
const numero1: number = 8
const convertToString = numero1.toString()

const printNumber: string = `o numero impresso em string foi ${convertToString}`
console.log(printNumber)


// 1 - Arrays 
let number: number[] = [1,2,3,4]
console.log(number[1])
//----------------------------------------------
let worlds: string[] = ["uva", "abacaxi", "maracuja", "morango", "banana"]
console.log(worlds[4])



// 2 - Outra sintaxe array
const nums: Array<number> = [100, 200, 300]
console.log(nums[0])
//----------------------------------------------
const palavra: Array<string> = ["paulo", "casa", "residencia"]
console.log(palavra[1])

// 3 - Tipo Any

const arr1: any = [1, "teste", true, [], {nome:"matheus"}] 
console.log(arr1) 

// 4 - parametros tipados
function soma(a:number, b:number) {
    console.log( a + b)

}
soma(4,4)

//----------------------------------------------

function saudacao(nome:string, sobrenome:string) {
    console.log(`Bem vindo ${nome} ${sobrenome} `)
} 

saudacao("Antonio", "Gabinio")

// 5 - retorno de funcao
function greeting(name:string) {
    return `Ola ${name}`
}

console.log(greeting("Matheu"))



// 6 - Funcao anonima

setTimeout(function() {
    
    const sallary: number = 1000

    // console.log(parseFloat(sallary))

}, 2000)



// 7 - Tipos de objeto

function passCoordinate(coord: {x: number, y: number}) {
    console.log("X coordintes: " + coord.x)
    console.log("X coordinates: " + coord.y)
}
const objectCoord = {x: 329, y: 84.2}
passCoordinate(objectCoord)

function coordenacaomine(coord: {x:number, y:number, z:number}) {
    console.log("Coordenada X: " + coord.x)
    console.log("Coordenada Y: " + coord.y)
    console.log("Coordenada Z: " + coord.z)
}

const ObjectCoordenado = {x: 123091, y: -32032, z: 2303}

coordenacaomine(ObjectCoordenado)

// 8 - Propriedades opcionais

function showNumbers(a:number, b:number, c?:number) {
    console.log("A: " + a)
    console.log("B: " + b)
    if(c) {
        console.log("C: " + c)
    }
}

showNumbers(1,2,)

// 9 - Validacao de props opcionais

function advancedGreeting(firstName: string, lastName?: string) {
    if (lastName !== undefined) {
        console.log(`Ol?? ${firstName} ${lastName}, tudo bem?`)
    }
    console.log(`Ol?? ${firstName}`)
}

advancedGreeting("Antonio", "Gabinio")

// 10 -Union Type

function showBalance(balance: string | number) {
    console.log(`o saldo da conta ?? R$${balance}`)
}

showBalance("10000")
showBalance(10000)


// 11 - Avan??ando em Union Types

function showUserRoles(role: boolean | string) {
    if(typeof role === "boolean") {
        return "Usuario n??o aprovado!"
    }

    return console.log(`A fun????o do usuario ??: ${role}`)

}

showUserRoles(true)
showUserRoles("Security Officer")

// 12 - Type Alias

type ID = string | number

function showID(id: ID) {
    console.log(`O ID ??: ${id}`)
}

showID(1)
showID("100")

type Nome = string 
type Idade = string | number

function peo(idade:Idade, nome:Nome) {
    console.log(`O seu nome ?? ${nome} e voce tem ${idade}`)
}

peo(18, "Antonio")


// 13 - Interface

interface Point {
    x: number
    y: number
    z: number


}
function showCoords(obj: {x:number,y:number,z:number}) {
    console.log(`X:${obj.x} Y:${obj.y} Z:${obj.z}`)
}

const coordObj: Point = {
    x: 10,
    y: 15,
    z: 20,
}

showCoords(coordObj)

// 14 - Type Alias x Interface 

interface persona {
    name : string

}

interface persona {
    age : number
}

const somePerson: persona = {name:"Antonio", age:18}


console.log(somePerson)

// type personaType = {
//     name: string
// }
        // Aqui est?? sendo feito em Alias, se caso tirarem o commit ele vai retornar um erro de duplicidade 

// type personaType = {
//     age: number
// }


// 15 - Literal Types

// let test = "testando"
                            // da linha 194 ate a 198, nao tem como colocar mais de uma funcao na variavel,
                            // por isso se usa o Literal Types, que e o oposto disso 
// test = 

// console.log(test)

function direcao(direction: "Left"|"Up"|"right"|"down") { // <-- aqui eu consigo utilizar no literal types um Union Type
    console.log(`A dire????o ??: ${direction}`)
} 

direcao("Left")


// 16 - Non-null Assertion Operator !

let p = document.getElementById("some-p")
console.log(p?.innerText)

// 17 - Bigint

let n: bigint
n = 1000n

console.log(n)

// 18 - Symbol

let sybolA = Symbol("a")


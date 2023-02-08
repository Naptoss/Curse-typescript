// 1 - Type Guard

function sum(a: number | string, b: number | string){

    if(typeof a === "string" && typeof b === "string"){
        console.log(parseFloat(a) + parseFloat(b))
    } else if(typeof a === "number" && typeof b === "number") {
        console.log(a + b)
    } else{
        console.log("Somar um numero com uma string quebra o codigo")
    }
    
}

sum("100", "59")
sum(10,30)

// 2 - chechando se os valores existe
function operations(arr: number[], operation?: string | undefined){
    if(operation) {
        if(operation === "sum"){
            const sum = arr.reduce((i, total) => i + total)
            console.log(sum)

        } else if(operation === "multiply") {
            const multiply = arr.reduce((i, total) => i * total)
            console.log(multiply)

        }


    }else{
        console.log("Defina uma operação ")
    }

}

operations([1,2,3], "sum")
operations([1,2,4], "multiply")

// 3 - Instance of 
class User {
    name

    constructor(name: string,) {
        this.name = name
    }

}
class SuperUser extends User {
    constructor(name: string) {
        super(name)

    }
}

const jhon = new User("Jhon")
const paul = new SuperUser("Paul")

console.log(jhon)
console.log(paul)

function userGreeting(user:object) {
    if(user instanceof SuperUser) {
        console.log(`Olá ${user.name}, deseja ver os dados do sistema`)
    } else if(user instanceof User) {
        console.log(`Olá ${user.name}`)
    }
}

userGreeting(jhon)
userGreeting(paul)

// 4 -Operador in 

class Dog{
    name
    breed

    constructor(name:string, breed?:string) {
        this.name = name
        if(breed) {
            this.breed = breed
        }
    }

}


const turca = new Dog("Turca")
const bob = new Dog("bob", "Pastor Alemão")

function showDogDetails(dog: Dog) {
    if ('breed ' in dog) {
        console.log(`O cachorro é da raça ${dog.breed}`)
    } else{
        console.log("O cachorro e um SRD")
    }
}

showDogDetails(turca)
showDogDetails(bob)





function review(avaliacao: number | boolean) {
    if(typeof avaliacao === "number") {
        console.log(`a nota do cliente foi ${avaliacao}`)
    } else{
        console.log("O cliente nao deixou uma avaliacao")
    }
}

review(false)
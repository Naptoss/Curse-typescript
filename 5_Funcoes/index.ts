// 1 - void

function withoutReturn(): void{
    console.log("Essa função não tem retorno")
}

withoutReturn()

// 2 - Callback

function greeting(name: string) {
    return `Ola ${name}`
}

function preeGreeting(f:(name:string) => string, nomeUsuario: string ) {
    console.log("Preparando a funcao")

    const greet = f(nomeUsuario)
    console.log(greet)
}

preeGreeting(greeting,"Mateus")
preeGreeting(greeting,"Andre")

function saudacao(nome: string) {
    return `Ola ${nome}`
}


function preSaudacao(p:(nome:string) => string, nameUser: string){
    const cumprimento = p(nameUser)
    console.log(cumprimento)
}

preSaudacao(saudacao, "Antonio")
preSaudacao(saudacao, "Marcos")


// 3 - Generic Functions 


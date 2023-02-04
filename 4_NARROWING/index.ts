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
sum(10 + "30")
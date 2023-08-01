// const sum = (a,b) => {
//     return a + b
// }

// // solo un registro en consola para nosotros.
// console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)


// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen(monto) {
    return monto*oneEuroIs.JPY
}
function fromEurotoDollar(euro) {
    return euro*oneEuroIs.USD
}
function fromYentoPound(yen) {
    return yen*oneEuroIs.GBP
}

module.exports = { fromDollarToYen, fromEurotoDollar, fromYentoPound };
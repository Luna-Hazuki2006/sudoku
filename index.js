const matriz = {
    ubicaciones: [], 
    numeros: []
}
function Crear_matriz(cantidad) {
    const ubicaciones = []
    const numeros = []
    for (let i = 0; i < cantidad; i++) {
        let nm = random()
        nm += "" + random()
        ubicaciones.push(nm)
        let n = random()
        numeros.push(n)
    }
    matriz.ubicaciones = ubicaciones
    matriz.numeros = numeros
    console.log(matriz)
}
function random() {
    return Math.floor(Math.random() * 9) + 1
}
function randome(lista) {
    console.log("lista:");
    console.log(lista);
    let n = 0
    do {
        n = Math.floor(Math.random() * 9) + 1
    } while (lista.includes(n));
    return n
}
function Llenar_matriz(cantidad) {
    Crear_matriz(cantidad)
    for (let i = 0; i < cantidad; i++) {
        let casilla = document.getElementById(matriz.ubicaciones[i])
        casilla.innerHTML = matriz.numeros[i]
        casilla.classList.add("original")
    }
}
function Depurar_matriz() {
    for (let i = 0; i < matriz.numeros.length; i++) {
        let inicial = matriz.ubicaciones[i]
        let numeral = matriz.numeros[i]
        let listaInical = []
        let listaNumeral = []
        for (let j = 0; j < matriz.numeros.length; j++) {
            let variable = matriz.ubicaciones[j]
            if ((variable.startsWith(inicial[0]) || 
            variable.endsWith(inicial[1])) && j != i) {
                listaInical.push(variable)
                listaNumeral.push(matriz.numeros[j])
            }
        }
        do {
            for (let j = 0; j < listaNumeral.length; j++) {
                if (listaNumeral[j] == numeral) {
                    listaNumeral[j] = randome(listaNumeral)
                }
            }
        } while (listaNumeral.includes(numeral));
        console.log(listaInical)
        console.log(listaNumeral)
    }
    Llenar_matriz()
}
Llenar_matriz(36)
Depurar_matriz()
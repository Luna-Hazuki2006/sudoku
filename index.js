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
function Llenar_matriz(cantidad) {
    Crear_matriz(cantidad)
    for (let i = 0; i < cantidad; i++) {
        let casilla = document.getElementById(matriz.ubicaciones[i])
        casilla.innerHTML = matriz.numeros[i]
        casilla.classList.add("original")
    }
    Depurar_matriz()
}
function Depurar_matriz() {
    
}
Llenar_matriz(36)
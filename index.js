const matriz = {
    ubicaciones: [], 
    numeros: []
}
function Limpiar_matriz() {
    for (let i = 1; i < 10; i++) {
        for (let j = 1; j < 10; j++) {
            let celda = document.getElementById(i + "" + j)
            celda.innerHTML = " "
        }
    }
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
    console.log(ubicaciones);
    console.log(numeros);
    matriz.ubicaciones = ubicaciones
    matriz.numeros = numeros
    console.log(matriz)
}
function random() {
    return Math.floor(Math.random() * 9) + 1
}
function randome(lista) {
    let n = 0
    do {
        n = Math.floor(Math.random() * 9) + 1
    } while (lista.includes(n));
    return n
}
function Llenar_matriz() {
    const cantidad = matriz.numeros.length
    for (let i = 0; i < cantidad; i++) {
        let casilla = document.getElementById(matriz.ubicaciones[i])
        casilla.innerHTML = matriz.numeros[i]
        casilla.classList.add("original")
    }
}
function Depurar_matriz() {
    let listaInical = []
    let listaNumeral = []
    for (let i = 0; i < matriz.numeros.length; i++) {
        let inicial = matriz.ubicaciones[i]
        let numeral = matriz.numeros[i]
        if (listaInical.length != 0) {
            if (listaNumeral.includes(numeral)) {
                for (let j = 0; j < listaInical.length; j++) {
                    let variable = listaInical[j]
                    let original = document.getElementById(variable)
                    let probable = document.getElementById(inicial)
                    if (variable.startsWith(inicial[0]) || 
                        variable.endsWith(inicial[1]) || 
                        original.getAttribute("name") == probable.getAttribute("name")) {
                    }
                }
                if (!repetido) {
                    listaInical.push(inicial)
                    listaNumeral.push(numeral)
                }
            } else {
                listaInical.push(inicial)
                listaNumeral.push(numeral)
            }
            
        } else {
            listaInical.push(inicial)
            listaNumeral.push(numeral)
        }
    }
    matriz.numeros = listaNumeral
    matriz.ubicaciones = listaInical
    console.log(listaInical)
    console.log(listaNumeral)
    Llenar_matriz()
}
const facil = 17
Limpiar_matriz()
Crear_matriz(facil)
Depurar_matriz()
Llenar_matriz()
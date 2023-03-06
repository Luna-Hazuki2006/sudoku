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
        let repetido = false
        if (listaInical.length != 0) {
            if (listaNumeral.includes(numeral)) {
                for (let j = 0; j < listaInical.length; j++) {
                    let variable = listaInical[j]
                    if (variable.startsWith(inicial[0]) || 
                        variable.endsWith(inicial[1])) {
                        repetido = true
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
        // for (let j = 0; j < matriz.numeros.length; j++) {
        //     let variable = matriz.ubicaciones[j]
        //     if ((variable.startsWith(inicial[0]) || 
        //     variable.endsWith(inicial[1])) && j != i) {
        //         if (matriz.numeros[j] != numeral) {
        //             listaInical.push(variable)
        //             listaNumeral.push(matriz.numeros[j])   
        //         }
        //     } 
        // }
    }
    matriz.numeros = listaNumeral
    matriz.ubicaciones = listaInical
    console.log(listaInical)
    console.log(listaNumeral)
    Llenar_matriz()
}
const facil = 38
Limpiar_matriz()
Crear_matriz(facil)
Depurar_matriz()
Llenar_matriz()
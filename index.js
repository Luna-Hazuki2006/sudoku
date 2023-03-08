const matriz = {
    ubicaciones: [], 
    numeros: []
}
function Limpiar_matriz() {
    for (let i = 1; i < 10; i++) {
        for (let j = 1; j < 10; j++) {
            let celda = document.getElementById(i + "" + j)
            celda.innerHTML = " "
            if (celda.classList.contains("original")) {
                celda.classList.remove("original")
            }
            celda.setAttribute("onclick", "Agregar_numero_matriz();")
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
}
function random() {
    return Math.floor(Math.random() * 9) + 1
}
function randome(lista) {
    let errores = 0
    let n = 0
    do {
        n = Math.floor(Math.random() * 9) + 1
        errores++
    } while (lista.includes(n) && errores != 90);
    if (errores == 90) {
        console.log("ya basta");
    }
    return (errores == 90) ? "basta" : n
}
function Llenar_matriz() {
    const cantidad = matriz.numeros.length
    for (let i = 0; i < cantidad; i++) {
        let casilla = document.getElementById(matriz.ubicaciones[i])
        casilla.innerHTML = matriz.numeros[i]
        casilla.classList.add("original")
        casilla.removeAttribute("onclick")
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
                let lista = []
                for (let j = 0; j < listaInical.length; j++) {
                    let variable = listaInical[j]
                    let numerable = listaNumeral[j]
                    let original = document.getElementById(variable)
                    let probable = document.getElementById(inicial)
                    if (variable.startsWith(inicial[0]) || 
                        variable.endsWith(inicial[1]) || 
                        original.getAttribute("name") == probable.getAttribute("name")) {
                        lista.push(numerable)
                    }
                }
                if (lista.length != 0) {
                    numeral = randome(lista)
                    if (numeral == "basta") {
                        return numeral
                    }
                    listaInical.push(inicial)
                    listaNumeral.push(numeral)
                } else {
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
    console.log(matriz);
    return "bien"
}
function Generar_matriz() {
    const lista = document.getElementById("cantidad")
    let opcion = lista.options[lista.selectedIndex].value
    Limpiar_matriz()
    Crear_matriz(opcion)
    let seguro = Depurar_matriz()
    if (seguro == 'basta') {
        Generar_matriz()
        return
    }
    Llenar_matriz()
}
function Agregar_numero_matriz() {
    const lista = document.getElementById("numero")
    let numero = lista.options[lista.selectedIndex].value
    alert(window.Event)
}
Generar_matriz()
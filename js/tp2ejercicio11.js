let mayor = 0
let mayorNombre = ''

let nombre = window.prompt("escriba un nombre");
let edad = parseInt(window.prompt("escriba una edad"));

let nombre2 = window.prompt("escriba un nombre");
let edad2 = parseInt(window.prompt("escriba una edad"));

if (edad > edad2) {
     mayor = edad
     mayorNombre = nombre
} else {
     mayor = edad2
     mayorNombre = nombre2
}

let nombre3 = window.prompt("escriba un nombre");
let edad3 = parseInt(window.prompt("escriba una edad"));

if (mayor > edad3) {
    document.write(`el nombre del mayor es ${mayorNombre}`)
} else {
    mayorNombre = nombre3
    document.write(`el nombre del mayor es ${mayorNombre}`)

}
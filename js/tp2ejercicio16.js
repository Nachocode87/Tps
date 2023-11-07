
let cadena = window.prompt("escriba un texto");


let aux = ''
for (let i = cadena.length-1; i >= 0; i--) {
    aux += cadena[i]
    
}

document.write('la palabra al reves es: '+aux);
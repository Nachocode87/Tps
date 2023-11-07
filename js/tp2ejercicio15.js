
let cadena = window.prompt("escriba un texto");


let aux = 0
for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === 'a' || cadena[i] === 'e' || cadena[i] === 'i' || cadena[i] === 'o' || cadena[i] === 'u') {
        
        aux++
    }
    
}
document.write('la cadena tiene '+aux+' vocales');
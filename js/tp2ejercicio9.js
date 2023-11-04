let fila = parseInt(window.prompt("escriba un numero para fila"));
let columna = parseInt(window.prompt("escriba un numero para fila"));


let totalCelda = fila*columna;

document.write(`<table><tbody`)



for (let index = 0; index < columna; index++) {
    document.write(`<tr>`)
    for (let i = 0; i < fila; i++) {
        document.write(`<td>${totalCelda}</td>`)    
        totalCelda--
    }  
    document.write(`</tr>`)    
}




document.write(`</tdoby></table>`)

let cadena = window.prompt("escriba un texto");

let cad2 = ''
let aux = ''
for (let i = 0; i < cadena.length; i++) {
    
    aux = cadena.substring(i,i+1);
    
    document.write(aux+'-')
}


let suma = 0
do {
    let numero = parseInt(window.prompt("escriba un numero"));
        if(!Number.isNaN(numero)){
            suma += numero    
        } else {
            alert('escriba un nuemro valido')
        }
    } while ( confirm('desea continuar'));
document.write(suma) 
    




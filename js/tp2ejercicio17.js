
let cadena = window.prompt("escriba un texto");


    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === 'a' || cadena[i] === 'e' || cadena[i] === 'i' || cadena[i] === 'o' || cadena[i] === 'u') {
            document.write('la vocal '+cadena[i]+' esta en la posicion '+i);
            break;
        }     
        
    }


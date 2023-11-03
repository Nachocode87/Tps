
let codigo = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']
do {
    let numero = parseInt(window.prompt("escriba un numero de dni"));

        if(numero > 0 && numero < 99999999 && !Number.isNaN(numero)){
            numero = numero % 23           
        } else {
            alert('escriba un nuemro valido')
        }
        document.write(codigo[numero]) 
    } while ( confirm('desea continuar'));

    




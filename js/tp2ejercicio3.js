let cadena = '-'
do {
    let frase = window.prompt("escriba una frase");
    cadena += frase 
} while (confirm('desea continuar?'));
document.write(cadena) 


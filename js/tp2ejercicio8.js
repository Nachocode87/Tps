let numero = 0;
do {
    numero = parseInt(window.prompt("escriba un numero"));
    
} while (numero>51);



for (let i = 1; i <= numero; i++) {
      
    for (let j = 1; j <= i; j++) {
        document.write(j);    
        
    }  
      document.write(`<p></p>`);    
}



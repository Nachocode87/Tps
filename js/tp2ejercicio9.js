let numero = 500;

for (let i = 1; i <= numero; i++) {
      
    if(i % 5 === 0) {
        document.write('-------------');
        document.write(`<p></p>`);
    } else if (i % 4 === 0 ){
        document.write(i+' es multiplo de 4');
        document.write(`<p></p>`);
    } else if (i % 9 === 0 ){
        document.write(i+' es multiplo de 9');
        document.write(`<p></p>`);
    } else {
        document.write(i);    
        document.write(`<p></p>`);
    }
}



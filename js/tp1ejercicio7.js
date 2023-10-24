let num1 = parseInt(window.prompt('escriba el primer numero')) ;
let num2 = parseInt(window.prompt('escriba el segundo numero'));
let num3 = parseInt(window.prompt('escriba el tercer numero'));

if (num1>num2 && num1>num3) {
    document.write('el primer numero es el mas grande');
} else if (num2>num1 && num2>num3) {
    document.write('el segundo numero es el mayor');
} else {
    document.write('el tercer numero es el mayor');    
}
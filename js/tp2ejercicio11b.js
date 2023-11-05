let nombre = [];
let edad = [];
// math.max()
do {
    nombre.push(window.prompt("escriba un nombre"));
    edad.push(parseInt(window.prompt("escriba una edad")));
    
} while (confirm('desea continuar'));
let mayor = 0

for (let i = 0; i < edad.length; i++) {
    if (edad[i]>mayor) {
        mayor = edad[i]
        aux = i
    }
    
}

document.write('el nombre del mayor es '+nombre[aux])
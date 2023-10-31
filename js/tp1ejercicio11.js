let num = parseInt(window.prompt("escriba una numero"));

document.write(`el numero ${num} es divisible por `)
if (num%2 === 0 && num%3 === 0 && num%5 === 0 && num%7 === 0 ) {
  document.write(`2, 3, 5, y 7`)  
} else if (num%2 === 0 && num%3 === 0 && num%5 === 0) {
  document.write(`2, 3, y por 5`)  
} else if (num%2 === 0 && num%5 === 0) {
  document.write(`2, y por 5`)  
} else if (num%2 === 0 && num%3 === 0) {
  document.write(`2 y por 3`)  
} else if (num%2 === 0) {
  document.write(`2`)  
}

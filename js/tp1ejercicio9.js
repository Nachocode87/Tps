let frase = window.prompt("escriba una frase");

for (let index = 0; index < frase.length; index++) {
  if (
    frase[index] === "a" ||
    frase[index] === "e" ||
    frase[index] === "i" ||
    frase[index] === "o" ||
    frase[index] === "u"
  ) {
    document.write(frase[index] + " ");
  } else {
    document.write(" ");
  }
}

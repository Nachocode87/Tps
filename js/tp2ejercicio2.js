let num = parseInt(window.prompt("escriba una nota"));

switch (num) {
    case 0:
    case 1:
    case 2:
        document.write(`muy deficiente`) 
        break;
    case 3:
    case 4:
        document.write(`insuficiente`) 
        break;
    case 5:
    case 6:
        document.write(`suficiente`) 
        break;
    case 7:
        document.write(`bien`) 
        break;
    case 8:
    case 9:
        document.write(`notable`) 
        break;
    case 10:
        document.write(`sobresaliente`) 
        break;
        
    default:
            document.write(`introduce un numero valido`) 
            
        break;
}
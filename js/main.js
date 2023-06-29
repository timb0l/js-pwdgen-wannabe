//projetto insicurissimo cit bryan

/* ULTIMATE PASS GEN-OBV FARA DA SCHIFO

-name
-surname
-color
-fave num1
-fave num2


*/
//start 

//ask basic information
let Name = prompt("Insert your name:");
let Surname = prompt("Insert your surname:");
let Color = prompt("Insert your favorite color:");
let Number1 = parseInt(prompt("Insert first number:"));
let Number2 = parseInt(prompt("Insert second number:"));


// be sure of the info acquired are correct



//prepare the template with the info 
let bigliettoDaVisita = `--biglietto da visita--
    -Name: ${Name}
    -Surname: ${Surname}
    -Color: ${Color}
    -Number1: ${Number1}
    -Number2: ${Number2}
    ---
`

let sumNameSurnameColorNumbers = Number1 + Name + Surname + Color + Number2;
console.log(sumNameSurnameColorNumbers);
//stamp info to console

//ine
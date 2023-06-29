
//projetto insicurissimo cit bryan

/* ULTIMATE PASS GEN-OBV FARA DA SCHIFO
-name
-surname
-color
-fave num1
-fave num2
*/


//information
let Name = prompt("Insert your name:");
let Surname = prompt("Insert your surname:");
let Color = prompt("Insert your favorite color:");
let Number1 = parseInt(prompt("Insert first number:"));
let Number2 = parseInt(prompt("Insert second number:"));

let sumNumber1 = Number1 / Number2;
let sumNumber2 = Number1 * Number2;
let userPassword = sumNumber1 +Name + Surname + Color + sumNumber2;

console.log(
`
-Name: ${Name}
-Surname: ${Surname}
-Color: ${Color}
-Number1: ${sumNumber1}
-Number2: ${sumNumber2}
-userPassword: ${sumNumber1+Name+Surname+Color+sumNumber2}
`);


//html Id

document.getElementById("userPassword").innerHTML = userPassword;
let numero_uno = 1
let numero_dos = 12 //Tipo entero
let operacion = numero_uno + numero_dos

let cadena_texto = 'Hola que tal' //Tipo string
let verdader_o_falso = false // Tipo booleano
let decimal = 3.12
let numero_falso = "33"

// operador: permite conocer el tipo de variable o expresión

console.log("Este es el número uno: " + numero_uno);
console.log(typeof cadena_texto);
console.log(typeof verdader_o_falso);

//Casteo - casting

//Number () podemos convertir una cadena que contiene un número tipo number
console.log (Number(numero_falso))
// parseint () convertir a un número entero
console.log (parseInt (numero_falso)+ 7);
//Parsefloat() convertir a un número decimal
console.log(parseFloat(numero_falso)+7)
//String()convierte cualquier valor (número,boolean, etc) en una cadena de texto.

console.log(String(numero_uno) + 4)

//Método numérico

let dato = 34433.5543

//controla el número de decimales
console.log(dato.toFixed(3))

// Metodo string
//Convierte un número a cadena

let numero = 42
let numerocomostring = numero.toString();

console.log(numerocomostring + 2);


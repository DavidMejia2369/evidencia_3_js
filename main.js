// Esto es un comentario de una sola línea
/* Este es un comentario
   de varias líneas */
// Declaraciones (var, let y const):
   var edad = 30;

   let nombre = 'Juan';
nombre = 'María';

const PI = 3.1416;

// Tipos De Datos
let esVerdadero = true; // Boolean
let miNumero = 42; // Number
let miCadena = 'Hola, mundo'; // String
let miObjeto = { nombre: 'Jose', edad: 25 }; // Object
let miArreglo = [1, 2, 3]; // Array
let miNulo = null; // Null
let miIndefinido; // Undefined

// Literales

const persona = { nombre: 'Ana', edad: 28 };

//Literal de la cadena

const saludo = '¡Hola!';

//literal de arreglo

const numero = [1, 2, 3];

// Sentencias Condicionales (if, else, switch):

const hora = 14;
if (hora < 12) {
    console.log('Buenos días');
} else if (hora < 18) {
    console.log('Buenas tardes');
} else {
    console.log('Buenas noches');
}

const diaSemana = 'lunes';
switch (diaSemana) {
    case 'lunes':
        console.log('Comienza la semana');
        break;
    case 'viernes':
        console.log('Casi es fin de semana');
        break;
    default:
        console.log('Es otro día');
}
 
// Sentencias de Captura de Errores (throw, try-catch)

function dividir(a, b) {
    if (b === 0) {
        throw new Error('No se puede dividir por cero');
    }
    return a / b;
}

try {
    const resultado = dividir(10, 0);
    console.log('Resultado:', resultado);
} catch (error) {
    console.error('Error:', error.message);
}

/* 
ciclos e iteracione
for loop:
El bucle for se utiliza para iterar una cantidad específica de veces.
*/
for (let i = 0; i < 5; i++) {
    console.log(i); // Imprime 0, 1, 2, 3, 4
  }
  // while
  let contador = 0;
while (contador < 3) {
  console.log(contador); // Imprime 0, 1, 2
  contador++;
}
//do..while
let num = 5;
do {
  console.log(num); // Imprime 5
  num--;
} while (num > 0);
/*Etiquetas para ciclos:
Las etiquetas se utilizan para controlar la ejecución de bucles anidados.
*/
outerLoop: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
      if (i === 1 && j === 1) {
        break outerLoop;
      }
      console.log(i, j);
    }
  }

  // Break y continue 

  for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Salta la iteración cuando i es 2
  }
  console.log(i); // Imprime 0, 1, 3, 4
}

//for.in y for..of

const personas = { nombre: 'Juan', edad: 30 };
for (const key in personas) {
  console.log(key, personas[key]); // Imprime "nombre Juan" y "edad 30"
}

const numeros = [1, 2, 3];
for (const num of numeros) {
  console.log(num); // Imprime 1, 2, 3
}

// expresiones de funcion 

const suma = function(a, b) {
    return a + b;
  };

  // llamadas de funcion 

  const resultado = suma(5, 3);
  console.log(resultado); // Imprime 8

  //Alcance de funciones

  const variableGlobal = 'Soy global';

function miFuncion() {
  const variableLocal = 'Soy local';
  console.log(variableGlobal); // Acceso a variable global
  console.log(variableLocal); // Acceso a variable local
}

//recursividad 
  
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }
  console.log(factorial(5)); // Imprime 120
  
  //closures
  function contador() {
    let count = 0;
    return function() {
      count++;
      return count;
    };
  }
  const incrementar = contador();
  console.log(incrementar()); // Imprime 1

  //argumentos y parametros
  function saludar(nombre) {
    console.log(`Hola, ${nombre}!`);
  }
  saludar('Juan'); // Imprime "Hola, Juan!"
// funciones flecha  
const sumaArrow = (a, b) => a + b;
// funciones predefinidas
const numeroAleatorio = Math.random();
console.log(numeroAleatorio);
// Operadores
//Asignacion
let x = 10;
x += 5; // x ahora es 15
//Asignación destructurada (para objetos)
const personaa = { nombre: 'Juan', edad: 30 };
const { nombree, edad } = persona;
console.log(nombree); // Imprime "Juan"
//Comparacion 
//Operador de igualdad estricta
const a = 5;
const b = '5';
console.log(a === b); // Imprime false (compara valor y tipo)
//aritmeticos
const sumas = 10 + 5;
const resta = 10 - 5;
const multiplicacion = 10 * 5;
const division = 10 / 5;
//logicos
const esMayorDeEdad = true;
const tieneLicencia = true;
const puedeConducir = esMayorDeEdad && tieneLicencia;
//string 
//Concatenación de cadenas
const nombres = 'Juan';
const saludos = 'Hola, ' + nombre;
//Operador ternario
const edad = 18;
const mensaje = edad >= 18 ? 'Mayor de edad' : 'Menor de edad';
//Delete
const personaaa = { nombre: 'Ana', edad: 25 };
delete personaaa.edad;
//typeof
const numeroo = 42;
console.log(typeof numeroo); // Imprime "number"
//instanceOf
class Animal {}
const perro = new Animal();
console.log(perro instanceof Animal); // Imprime true
//Operador de propagacion
const numeroos = [1, 2, 3];
const nuevosNumeros = [...numeroos, 4, 5];
//Arrays 
const frutas = ['manzana', 'banana', 'pera'];
console.log(frutas[1]); // Imprime "banana"

//matrices
const matriz = [[1, 2], [3, 4]];
console.log(matriz[0][1]); // Imprime 2

//Maps
const mapa = new Map();
mapa.set('nombre', 'Juan');
console.log(mapa.get('nombre')); // Imprime "Juan"

//Sets
const conjunto = new Set([1, 2, 3, 2]);
console.log(conjunto); // Imprime Set { 1, 2, 3 }
// Declaracion de Objetos
const miobjeto = {};
// Propiedades de objetos
miobjeto.nombre = "Juan";
miobjeto.edad = 30;
// Funciones de listado (Metodos)
miObjeto.saludar = function() {
  console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
};
miObjeto.saludar(); // Imprime: "Hola, soy Juan y tengo 30 años."

//Constructores y creacion de objetos

function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}
const persona1 = new Persona("Ana", 25);
const persona2 = new Persona("Carlos", 28);

//Herencia
function Estudiante(nombre, edad, carrera) {
  Persona.call(this, nombre, edad);
  this.carrera = carrera;
}
Estudiante.prototype = Object.create(Persona.prototype);
const estudiante1 = new Estudiante("Luis", 22, "Ingeniería");

// Getter y Setters

Object.defineProperty(miObjeto, "ubicacion", {
  get() {
    return this._ubicacion;
  },
  set(nuevaUbicacion) {
    this._ubicacion = nuevaUbicacion;
  },
});
miObjeto.ubicacion = "Bogotá"; // Setter
console.log(miObjeto.ubicacion); // Getter

//Comparacion de Objetos

function sonIguales(obj1, obj2) {
  return obj1.nombre === obj2.nombre && obj1.edad === obj2.edad;
}
console.log(sonIguales(persona1, persona2)); // false

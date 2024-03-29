// Boolean
let muted: boolean = true;
muted = false;

// Number
let age = 6;
let numerador: number = 42;
let denominador: number = age;
let resultado = numerador / denominador;

// String
let nombre: string = 'Carlos';
let saludo = `Me llamo ${nombre}`;

// Arrays
let people: string[] = [];
people = ["Isabel", "Nicole", "Raul"];
// people.push("9000")

let peopleAndNumbers: Array< string | number > = [];
peopleAndNumbers.push("Ricardo");
peopleAndNumbers.push(9001);

// Enum
enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
  Azul = "Azul",
  Amarillo = "Amarillo",
}

let colorFavorito: Color = Color.Amarillo;
console.log(`Mi color favorito es ${colorFavorito}`);

// Any
let comodin: any = "Joker";
comodin = { type: "Wildcard" }

// Object
let someObject: object = { type: "Wildcard" }

// Functions
function add(a: number, b: number): number {
  return a + b;
}

const sum = add(4, 6);

function createAdder(a: number): (number: number) => number {
  return function (b: number) {
    return b + a;
  }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);


function fullName(firstName: string, lastName: string = "Florez"): string {
  return `${firstName} ${lastName}`;
}

const carlos = fullName("Carlos");
console.log(carlos);


// Interfaces

// creé un nuevo 'enum' para el ejemplo que está mas a delante
enum Color2 {
  Rojo = "Rojo",
  Verde = "Verde"
}

interface Rectangulo {
  ancho: number,
  alto: number,
  color?: Color2,
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 6,
  // color: Color2.Rojo
}

function area(r: Rectangulo) {
  return r.alto * r.ancho
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function() {
  return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo bonito`;
}

console.log(rect.toString());
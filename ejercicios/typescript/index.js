// Boolean
let muted = true;
muted = false;
// Number
let age = 6;
let numerador = 42;
let denominador = age;
let resultado = numerador / denominador;
// String
let nombre = 'Carlos';
let saludo = `Me llamo ${nombre}`;
// Arrays
let people = [];
people = ["Isabel", "Nicole", "Raul"];
// people.push("9000")
let peopleAndNumbers = [];
peopleAndNumbers.push("Ricardo");
peopleAndNumbers.push(9001);
// Enum
var Color;
(function (Color) {
    Color["Rojo"] = "Rojo";
    Color["Verde"] = "Verde";
    Color["Azul"] = "Azul";
    Color["Amarillo"] = "Amarillo";
})(Color || (Color = {}));
let colorFavorito = Color.Amarillo;
console.log(`Mi color favorito es ${colorFavorito}`);
// Any
let comodin = "Joker";
comodin = { type: "Wildcard" };
// Object
let someObject = { type: "Wildcard" };
// Functions
function add(a, b) {
    return a + b;
}
const sum = add(4, 6);
function createAdder(a) {
    return function (b) {
        return b + a;
    };
}
const addFour = createAdder(4);
const fourPlus6 = addFour(6);
function fullName(firstName, lastName = "Florez") {
    return `${firstName} ${lastName}`;
}
const carlos = fullName("Carlos");
console.log(carlos);
// Interfaces
// creé un nuevo 'enum' para el ejemplo que está mas a delante
var Color2;
(function (Color2) {
    Color2["Rojo"] = "Rojo";
    Color2["Verde"] = "Verde";
})(Color2 || (Color2 = {}));
let rect = {
    ancho: 4,
    alto: 6,
    // color: Color2.Rojo
};
function area(r) {
    return r.alto * r.ancho;
}
const areaRect = area(rect);
console.log(areaRect);
rect.toString = function () {
    return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo bonito`;
};
console.log(rect.toString());

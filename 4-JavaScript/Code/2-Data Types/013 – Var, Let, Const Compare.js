// Redeclare , Access before declare , variable scope drama

// Redeclare
var a = 1;
var a = 2;
console.log(a); //2  [you can redeclare variable]

// Access before declare
console.log(b);
var b = 1; //output => undefined

// variable scope drama
var aabb = 1; // [aabb will add to window object]
// ###########################################################
// Redeclare
let a = 1;
let a = 2;
console.log(a); //Error  [you can not redeclare variable Identifier 'a' has already been declared]

// Access before declare
console.log(b);
let b = 1; //output =>  b is not defined

// variable scope drama
let aabb = 1; // [aabb will not add to window object]
// ###########################################################
// Redeclare
const a = 1;
const a = 2;
console.log(a); //Error  [you can not redeclare variable Identifier 'a' has already been declared]

// Access before declare
console.log(c);
const c = 1; //output =>  c is not defined

// variable scope drama
const aabb = 1; // [aabb will not add to window object]
// ###########################################################

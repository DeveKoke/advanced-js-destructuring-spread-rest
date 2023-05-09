// * 1
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];
const [, ana] = empleados;
console.log(ana);

// *2
const empleados2 = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];
const emailLuis  = empleados2.filter(({ name }) => name === "Luis")[0].email;
console.log(emailLuis);

// *3 
let a = 5;
let b = 3;
[a, b] = [b, a];


// *4
const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
  };
  const { today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES;
  console.log(maximaHoy);
  console.log(maximaManana);

// *5
function sumEveryOther(...num){
    const sumatory = num.reduce((acc, cur)=> acc += cur,0);
    return sumatory;
};
console.log(sumEveryOther(2, 5, 6, 1, 8));

// *6
function addOnlyNums(...num){
    const sumatorio = num.filter((item)=> typeof item == 'number')
        .reduce((acc, cur)=> acc +=cur, 0);
             
    return sumatorio;
}
console.log(addOnlyNums(1, 3, 'hola', 3))


// *7
function countTheArgs(...args) {
    return args.length;
}
console.log(countTheArgs('perro', 'gato'));

// *8
function combineTwoArrays(arr1, arr2) {
    mixArr = [...arr1, ...arr2];
    return mixArr
}
console.log(combineTwoArrays([1, 3, 5, 6 ,8, 9],['r', 't', 'u', 'p']))


// *9
function onlyUniques(...args) {
    return args.filter((item, index, arr)=> arr.indexOf(item)===index);
}
console.log(onlyUniques(1, 1, 2, 2, 3, 6, 7, 8))

// *10
function combineAllArrays(...arr2) {
    const mixAllArrays = arr2.flat();
    return mixAllArrays
}
console.log(combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]))


// *11
function sumAndSquare(...params) {
    const power2 = params.map(x => x**2).reduce((acc, cur)=> acc +=cur, 0)
    return power2;
}
console.log(sumAndSquare(2, 4, 3))
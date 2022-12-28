//Задание 10.1.5
dollars = prompt('Пожалуйста введите количество долларов для подсчёта');
conversion = dollars * 69;
alert(conversion)
alert('При переводе ' + dollars + ' долларов, вы получите ' + conversion + ' рублей')


let x = prompt('');
x++;
console.log(typeof x)

if (x % 2 == 0) {
    console.log('Число чётное')

} else if (x % 2 !== 0) {
    console.log('Число нечётное')

} else if (x == NaN) {
    console.log('Число равно NaN')

} else
    console.log('Упс, кажется, вы ошиблись')


let x = 1,
    res;
switch (typeof x !== 'symbol' && (isFinite(x) || typeof (x) === "string") && typeof (x)) {
    case "number":
        res = "x - число";
        break;
    case "string":
        res = "x - строка";
        break;
    case "boolean":
        res = "x - логическое";
        break;
    default:
        res = "Тип x не определен";
}
console.log(res);

//Задание 3

let string = 'Hello';
let result;

if (string.includes('Hello')) {
    result = 'olleH'
}
console.log(result)


//Задание 4

function getRandomInt(min, max) {
    min = Math.ceil(0);
    max = Math.floor(101);
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRandomInt());

//Задание 5

let arr = [1, 3, 2, 4, 5];
console.log(arr.length);
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])

//Задание 6

let arr = [1, 3, 1, 7];
console.log(arr[0] == arr[1]);
console.log(arr[0] == arr[2]);
console.log(arr[0] == arr[3]);

console.log(arr[1] == arr[0]);
console.log(arr[1] == arr[2]);
console.log(arr[1] == arr[3]);

console.log(arr[2] == arr[0]);
console.log(arr[2] == arr[1]);
console.log(arr[2] == arr[3]);

console.log(arr[3] == arr[0]);
console.log(arr[3] == arr[1]);
console.log(arr[3] == arr[2]);

// Задание 8

let myMap = new Map();
myMap.set('panda', 'bear');
myMap.set(23, 'koala');
myMap.set(false, 222);

for (let name of myMap.keys()) {
    console.log('Ключ-', name)
}
for (let meaning of myMap.values()) {
    console.log('Значение-', meaning)
}


function mulitplyTwoNumbers(a, b) {
    return a * b;
}

console.log(mulitplyTwoNumbers(6, 3));

let num1 = 6;
let num2 = 3;

function add() {
    return num1 + num2;
}

console.log(add());

/* let count = 0;

function countItems() {
    let counter = 1;

    for (let count = 0; count < 10; count++) {
        counter++;
    }
    return;
}

console.log(counter);
 */
for (let i = 0; i < 5; i++) {
    console.log("In the first loop and i = " + i);
}

let i = 300;

console.log("Between the loops: " + i);

for (let i = 30; i < 40; i++) {
    console.log("In the second loop and i = " + i); 
}

console.log("Left the last loop and i = " + i);


let addOne = (value) => value + 1;

/* let btn = document.getElementById("btn");;
btn.addEventListener("click", () => alert("Bam!")); */

/* let counter = {
    _count: 0,
    toString: function () {
        this._count++;
        console.log("this=" + this.self + " and count=" + this._count);
    },
};

counter.addCount();
counter.addCount();
counter.addCount();

window.setInterval(counter.addCount, 1000); */

/* let counter = {
    _count: 0,
    toString: function () {
        return 'counter';
},
addCount: function () {
    this._count++;

    console.log('this=' + this.self + ' count="' + this._count);
    },
};

window.setInterval(() => {
    counter.addCount();
}, 10); */

let myString = "Goodbye Cruel World!";

console.log(myString.endsWith('d!'));
console.log(myString.startsWith('Goo'));

let regexp = /[g-o]/gi;
console.log(myString.match(regexp));

let dog = 'Lassie';
let mortalEnemy = 'cats';
console.log(dog + ", always barks when she sees " + mortalEnemy + ".");

let dogName = "Lassie";
console.log(`${dogName}, always barks when she sees ${mortalEnemy}.`);

let a = 2022;
let b = 1995;
console.log(`Javascript first appeared ${a - b} years ago. Really!`);

function getProductDetails()
{
    return 'product details';
}

console.log(`Product: ${getProductDetails()} Works great!`);

let user = { name: 'John Wick' };
console.log(`Your contract has been accepted, Mr. ${user.name.toUpperCase()}.`);

let person = {
    name: 'John Wick',
    streetAddress: '123 Bowery Street',
    city: 'New York',
    state: 'NY',
    zip: '10003',
};

console.log(
    `${person.streetAddress} ${person.city} ${person.state} ${person.zip}`
);

let person2 = 'John Constantine';
let age = 39;
function personTag(strings, person, age) {
    let str0 = strings[0];
    let str1 = strings[1];

    let personState;
if (age < 12)
{
    personState = 'Child';
}
else if (age > 18)
{
    str1 = str1 + 'n ';
    personState = 'Adult';    
}
else if (age > 12 && age < 19)
{
    personState = 'Teen';    
}
return str0 + person + str1 + personState;
}

let result = personTag`This person, ${person2} is a ${age}!`;
console.log(result);

const array = [110, 52, 42, 303];
console.log(array.includes(42));

const sentence = 'This is my sentence which is defined as a string';
console.log(sentence.includes('pizza'));

const colorArray = ['blue', 'yellow', 'orange'];
console.log(colorArray.includes('orange'));

const books = ['Alf', 'Atomic Habits', 'Life of Pi', 'Power of Now'];
const isInBooks = books.includes('Life of Pi');
console.log(isInBooks);

const shows = ['Lupin', 'Cobra Kai', '24', 'Mr. Robot'];
const lessThan5Characters = shows.filter((showName) => showName.length <= 5);

document.querySelector('.display').innerHTML = lessThan5Characters;

const tvShow = [
    {
        name: 'Gilmore Girls',
        seasons: 5,
        episodes: 200,
    },
    {
        name: 'Supernatural',
        seasons: 15,
        episodes: 320,
    },
    {
        name: '24',
        seasons: 9,
        episodes: 192,
    },
    {
        name: 'Selling Sunset',
        seasons: 1,
        episodes: 10,
    },
];

const longRunningShows = tvShow.filter((show) => show.episodes > 10);
console.log(longRunningShows);

const ages2018 = [20, 19, 43, 23, 10, 14];
const ages2021 = ages2018.map((age) => age + 3);
console.log(ages2021);

const housemates2019 = [
    {
        name: 'Tom',
        age: 24,
    },
    {
        name: 'Helen',
        age: 35,
    },
    {
        name: 'Woody',
        age: 23,
    },
];

const housemates2021 = housemates2019.map((housemate) => housemate.age + 2);
console.log(housemates2021);
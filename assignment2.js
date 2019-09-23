                                                       JAVASCRIPT ASSIGNMENT-2
1)Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one.
solution:
const matches = (obj, obj1) =>
Object.keys(obj1).every(key => obj.hasOwnProperty(key) && obj[key]=== obj1[key]);
console.log(matches({age:25,hair:'long',beard:true },{hair:'long',beard: true}));//true
console.log(matches({age:25,hair:'long',beard:true },{age:25,hair:'long',beard:true}));//true
console.log(matches({age:25,hair:'long',beard:true },{age:26,hair:'long',beard:true}));//false

2)How to create a Javascript class in ES6? Write code with example using inheritance.
solution:
Classes in ES6:
Classes are special functions, and just as you can define a function expression and a function declaration the class syntax has two components:

    Class declarations:
    class Reactangle {
        constructor(width, height) {
            this.width = width;
            this.height = height;
        }
    }

    Class Expressions

    // unnamed
    var Rectangle = class {
        constructor(width, height) {
            this.width = width;
            this.height = height;
        }
    }

    //named
    var Rectangle = class Rectangle{
        constructor(width, height) {
            this.width = width;
            this.height = height;
        }
    }

   An important difference between function declarations and class declarations is that function declarations are hoisted and class declarations are not.

Example:
var r = new Rectangle(); // Reference error
class Rectangle {
  ...
}

Constructors in ES6
The constructor function is a special method for creating and initializing an object created with class.Something to take into consideration is that there can be only one constructor within a class, otherwise, a SyntaxError will be thrown.
A constructor can also make use of the super keyword to call the constructor of the superclass.

Inheritance in ES6:
The extends keyword is used in class declarations to create a class as a subclass or child of another class.

For example:
class professionallife{
    constructor(name) {
        this.name = name;
    }   
     speak()
     {
        console.log(this.name + ' works at clicklabs');
    }
}class Personallife extends professionallife{
    constructor(name, freetime) {
        super(name);
        this.name=name;
        this.freetime = freetime;
    }    
    speak() {
    super.speak();
        console.log(this.name +` doesn't reveal his personal life`) ;
    }
}let person = new Personallife('sathish')
person.speak(); 

3)Explain Destructuring Assignment in ES6? Write code with example.
solution:
Destructuring simply implies breaking down a complex structure into simpler parts. In JavaScript, this complex structure is usually an object or an array. With the destructuring syntax, you can extract smaller fragments from arrays and objects. Destructuring syntax can be used for variable declaration or variable assignment. You can also handle nested structures by using nested destructuring syntax.
with out destructing code will look like:
const student = {
    name: 'John Doe',
    age: 16,
    scores: {
        maths: 74,
        english: 63,
        science: 85
    }
};

function displaySummary(student) {
    console.log('Hello, ' + student.name);
    console.log('Your Maths score is ' + (student.scores.maths || 0));
    console.log('Your English score is ' + (student.scores.english || 0));
    console.log('Your Science score is ' + (student.scores.science || 0));
}

displaySummary(student);

with destructing the code will look like:
function displaySummary({ name, scores: { maths = 0, english = 0, science = 0 } }) {
    console.log('Hello, ' + name);

the above code is an example of object destructing
object destructing:
you use an object literal on the left-hand-side of an assignment expression for object destructuring. 
const student = {
    firstname: 'Glad',
    lastname: 'Chinda',
    country: 'Nigeria'
};

// Object Destructuring
const student = {
    firstname: 'Glad',
    lastname: 'Chinda',
    country: 'Nigeria'
};
// Object Destructuring
const { firstname, lastname, country } = student;
console.log(firstname, lastname, country);

array destructing:
n array destructuring, you use an array literal on the left-hand-side of an assignment expression. Each variable name on the array literal maps to the corresponding item at the same index on the destructured array. Here is a quick example.
example:
const rgb = [255, 200, 0];

// Array Destructuring
const [red, green, blue] = rgb;

console.log(`R: ${red}, G: ${green}, B: ${blue}`); // R: 255, G: 200, B: 0

4)What are string and template literals in Es6? Write code with example.
solution:
template literals:
Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them. They were called "template strings" in prior editions of the ES2015 specification.
Template literals are enclosed by the back-tick (` `)  (grave accent) character instead of double or single quotes. Template literals can contain placeholders. These are indicated by the dollar sign and curly braces (${expression}).

Expression interpolation:
In order to embed expressions within normal strings, you would use the following syntax:
var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."

5) Write a program for converting two arrays into a single array using arrow-function, map and iterators (without ‘for’) of Javascript ES6.
solution:
var name1 = ['sathish'];
var name2= ['saichanndra'];
name2.map(value => {
name1.push(value);
})
console.log(name1);
6) Write a regex in Javascript ES6 to check if the email address provided is valid or not?
solution:
function validate(){
  var text=`sathishsaichandra630@gmail.com`;
  var regex=/^([a-z A-Z 0-9 /.-]+)@([a-z A-Z 0-9 -]+).([a-z{2,8}])(.[a-z {2,8}])?$/;
  if(regex.test(text))
  {
    console.log('email is valid.');
  }
  else
  {
    console.log('email is invalid.');
  }
}
console.log(validate());


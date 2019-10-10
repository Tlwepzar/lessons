/*var myValue = 'Hello World';
var myNum = 10;
 
let result = prompt('what is your name?');

let a = 100;
let b = 200;

const c = 300;

if (a) {
    console.log(a);
    let d = 'anything';
    console.log(d);
}

console.log(d);*/
//console.log(myValue); 
//console.log('hello ' + result);
//console.log(a,b,c);
//console.log(document);
//console.dir(document);

let myObj = { 
    first: 'Tshepi',
    last: 'Nkosi'
};

myObj.last = 'Molefe';
console.log(myObj);

let car1 = {
    windows: '8 sheilds',
    colour: 'white',
    model: '220iS',
    brand: 'BMW'
};

car1.engine = '800cc';
car1['year'] = '2020';

console.log(car1);
console.log(document.lastModified);

function identityBmw(){
    car1['seats'] = 5;
    let carAns = 'I am a ' + car1.brand + ' ' + car1.model + ' ' + car1.seats + ' seater';
    let userSeats = Number(prompt('Firstly... Can you guess how many passengers I can seat?'));
    car1.seats = car1.seats == userSeats ? alert('Correct\n' + carAns) : alert('InCorrect\n' + carAns); 
}

let car2 = {
    windows:'5',
    colour:'black',
    model:'transporter',
    brand:'Volkswagen',
    engine:'600cc',
};

car2.seats = 5;

function identityVw(){
    car2['year'] = 2019;
    let carAns2 = 'I am a ' + car2.brand + ' ' + car2.model + ' ' + car2.year + ' model';
    let carYear = Number(prompt('Before you get the Answer... Can you guess what year I was made'));
    car2.year = car2.year == carYear ? alert('Correct\n' + carAns2) : alert ('Incorrect\n' + carAns2);
}

let myArray = [300,true,'yahamba',' imoto'];
// myArray[myArray.length] = 'vrrrooooom'; // not ideal
myArray.push('vrrooooom'); // push is at the end
// let lastone = myArray.pop(); // pop's at the end contains value
// console.log(lastone);

// let firstone = myArray.shift();
// console.log(firstone);
// myArray.unshift('car noise');
// myArray[1] = true;

// delete myArray[1]; //not ideal

let canItGo = myArray.splice(1,1);
console.log(canItGo);

let petrolMoney = myArray.splice(0,1);
console.log(petrolMoney); 

let engineSound = myArray.slice(2)
console.log(engineSound);

let myStr = myArray.toString();
let myArray2 = myStr.split(',');
let myArray3 = myArray.join(' - ');
console.log(myStr);
console.log(myArray2);
console.log(myArray3);

console.log(myArray);
 
/*let x = 100;
console.log(x*x);
let y = x;
console.log(y);

++x;
console.log(x);
x++;
console.log(x);*/

let myArray5 = [2019, 700,true,'sawubona','mhlaba'];
let [a,b,c,d,e] = myArray5;
a++;
++a;
console.log(e,d,a,'\n ');

let num = 01;
greet(prompt('insert name'));
greet(' brian');
greet(' busi');
greet(' mbali');

function greet(usrName){
    console.log('user inserted ' + usrName);
    let hello = 'sawobona ' + usrName;
    let usrID = ', your number is '  + num++ + '\n ';
    console.log(hello + usrID);
    return hello;
} 

let usrInput = numTest(num);
console.log(usrInput);
console.log(' ');

function numTest(arg){
    return arg + 10;
}


console.log(testValues(50,69));
console.log(' ');
console.log(testValues(20));

function testValues(x,y=10){
    console.log(x);
    console.log(y);
    return x + y;
}

let myFun1 = function(x){
    return x * 10;
}

function myFun2(x){
    return x * 10;
}

let myFun3 = (x) => x * 10;

let myFun4 = (x,y,z) => (x+y+z) * 10

function myFun5(p,q,r,s){
    console.log(arguments.length);
    console.log(arguments[0]);
}

let messages = {
    welcome: ['welcome user1', 'welcome user2'],
    hello: function(){
        console.log('Hello users');
    },
    goodbye: function(){
        console.log('Bye Bye users');
    },
    output: function(mes){
        console.log(mes);
    }
}

function myCoffee(number) {
    if (number === 1) {
        number = "French Roast";
    } else if (number === 2) {
        number = "Colombian";
    } else if (number == 3){
        number = "Kona";   
    }
    return number;
}

console.log(myCoffee(1));
console.log(myCoffee(2));
console.log(myCoffee(3));


/*var pets = new Array ( );
pets[0] = new Array ( "Sheba", 13, "cat" );
pets[1] = new Array ( "Jasper", 12, "dog" );
alert ( pets[0][0] + " is a " + pets[0][1] + " year old " + pets[0][2] ); 
alert ( pets[1][0] + " is a " + pets[1][1] + " year old " + pets[1][2] );*/

function firstDuplicate(a){

    const seen = {}
    
    for (let v of a) {
    if (seen[v]) return v
    seen[v] = v
    }
  
    return -1
}

const test1 =   [2, 1, 3, 5, 3, 2]
const test2 = [2, 4, 3, 5, 1]
const test3 = [2,4,3,5,1,7]
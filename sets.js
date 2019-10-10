let mySet = new Set();
mySet.add('trading since');
mySet.add(1989);
mySet.add('welcome');
mySet.add('First ');
mySet.add('of its Kind');

console.log(mySet.size);
console.log(mySet.has(1989));
console.log('\n ');

for (let estDate of mySet){
    console.log(estDate);
}

console.log('\n ');

let mySet2 = new Set(['yimina', 'udaddy', 2020, 087653434])
console.log(mySet2.size);
console.log(mySet2.has(1989));

console.log('\n ');

for (let element of mySet2){
    console.log(element);
}
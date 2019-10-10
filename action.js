let m = 0;
let n = 0;
let o = false;

if(o == false){
    console.log('o has a value');
}

if(m) {
    console.log('m has a value');
}

if(n > 15){
    console.log('n has a value');
}

if(m && n){
    console.log('these has a value');
}

if(o == false && n > 15){
    console.log('truthy');
}

if (o == false || m == 0){
    console.log('falsy');
}

function test(val){
    val = (val > n) ? 'ur number is greater than n': 'n is greater than ur number';
    return val; 
}

// console.log(test());

while(n < 10){
    console.log('block of code n is ' + n);
    n++;
}

do{
    console.log('Do loop m is ' + m);
    m++;
} while (m < 14)
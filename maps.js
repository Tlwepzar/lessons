let mapArray = ['yebo', 'mjita',2019, 2020, 2]

let mapArray2 = mapArray.map(function(ans2){
    console.log(ans2);
    return typeof ans2;
});

console.log(mapArray2);

let myNumbs = [98, 54, 221, 4556, 8990, 654, 340];
const newNumbs = myNumbs.map(function(x){
    console.log('original value from array = ' + x);
    return x * 6;
})
console.log('original value from array x 6 = ' + newNumbs);

const newNumbs2 = myNumbs.map(x => x / 2);
console.log('original value from array x 2 = ' + (newNumbs2));

const output = document.getElementById('output');
output.innerHTML = myNumbs.map((value,index) => '<div>' + index + ' = ' + value/2 + '</div>').join('');

//let html = myNumbs.map((value,index) => '<div>' + index + ' = ' + value + '</div>').join('');
//output.innerHTML = html;

//let myStri = html.join('');
//output.innerHTML = myStri;

//output.innerHTML = myNumbs;

let phone1 = new Map();
phone1.set('brand','Huawei');
phone1.set('model','P10 Lite');
console.log(phone1);

let phone2 = new Map();
phone2.set('brand','SAMSUNG');
phone2.set('model','Galaxy S6');
console.log(phone2);

console.log(phone2.get('brand') + ' '+ phone2.get('model'));
console.log(phone1.get('brand') + ' '+ phone1.get('model'));

for (let itemTitle of phone1.keys()){
    console.log(itemTitle);
}

for (let itemDescription of phone1.values()){
    console.log(itemDescription);
}

for (let [itemTitle,itemDescription] of phone2){
    console.log(itemTitle + ' : ' + itemDescription);
}

function arrayMode(array) {
    var count = {};
    var countResult = 0;
    var modes = [];
  
    for (var i in array) {
      count[array[i]] = (count[array[i]] || 0) + 1;
  
      if (count[array[i]] > countResult) {
        countResult = count[array[i]];
      }
    }
  
    for (var j in count) {
      if (count[j] == countResult) {
        modes.push(j);
      }
    }
    return modes;
}
  
arrayMode([1,3,3,3,1]);
arrayMode([2,3,1,1]);
arrayMode([2,2,2,1]);

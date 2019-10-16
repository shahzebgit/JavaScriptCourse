
var years = [1989,1960,1965,1991,1975];


function calcArray(arr ,fn) {

    var empArray = [];
    for( var i= 0; i < arr.length; i++){
        empArray.push(fn(arr[i]));
    }
    return empArray;
}

function eligible(a) {
    return 2020- a;
}

function fifty(a) {
    if (a >= 30 && a <= 60) {
        return 'Mid-aged';
    }else{
        return a;
    }
}


var criteria = calcArray(years, eligible)
var ages = calcArray(criteria,fifty)
console.log(criteria);
console.log(ages);



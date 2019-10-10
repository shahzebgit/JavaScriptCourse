
function calci(bill) {
    var per;
    if (bill < 50) {
        per = .2;
    } else if (bill >= 50 && bill < 200) {
        per = .15;
    } else{
        per = .1;
    }
    return per * bill;
}

var bills = [180, 20, 300]
var tips = [calci(bills[0]),
            calci(bills[1]),
            calci(bills[2])];
var total = [bills[0] + tips[0],
            bills[1] + tips[1],
            bills[2] + tips[2]];

console.log(tips , total);

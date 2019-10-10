var john = {
    bills: [190, 650, 50, 130],
    //Tip calcultor
    calcTip: function () {
        this.tip = [];
        this.values = [];
        for (var i = 0; i < this.bills.length; i++) {
            var per;
            var bill = this.bills[i];
            if (bill < 50) {
                per = .2;
            } else if (bill >= 50 && bill < 200) {
                per = .15;
            } else {
                per = .1;
            }
            this.tip[i] = per * bill;
            this.values[i] = bill + this.tip[i];
        }
    }
}

var harry= {
    bills: [50,300,420,90],
    calcTip: function () {
        this.tip = [];
        this.values = [];
        for (var i = 0; i < this.bills.length; i++) {
            var per;
            var bill = this.bills[i];
            if (bill < 100) {
                per = .2;
            } else if (bill >= 100 && bill < 300) {
                per = .1;
            } else {
                per = .25;
            }
            this.tip[i] = per * bill;
            this.values[i] = bill + this.tip[i];
        }
    }
}
//Calculating the Average
function calciAverage(tip) {
    for(var i= 0; i < tip.length;i++){
        var sum=0;
        sum += tip[i];
    }
    return sum / tip.length;
}
//Calculating Tips
harry.calcTip();
john.calcTip();
console.log(john, harry);

//Calculating Average for the families
john.average = calciAverage(john.tip);
harry.average = calciAverage(harry.tip);
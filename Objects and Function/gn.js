// Just small Practise
var car = function (name,numberOfWheels,carModel) {
    this.name = name;
    this.numberOfWheels = numberOfWheels;
    this.carModel = carModel;
}

car.prototype.carCat = function () {
    console.log(2050 - this.carModel + ' This is my '+ this.name + 
    ' old with '+ this.numberOfWheels + ' Wheels' + ' I\'m Happy about it :D' );
};


var Tesla = new car('TeslaX',4, 2019);
var Ford = new car('Ford-DT',5, 2015);
var Truck = new car('TruckRC',8, 2023);
var Buga = new car('Bugatti',4, 2015);
var Obj = new car('Object-DC',1, 1997);

Tesla.carCat();
Ford.carCat();
Truck.carCat();
Buga.carCat();
Obj.carCat();







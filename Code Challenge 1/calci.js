var markMass = 60; //in kg
var markHeight = 1.8; // in meters
var johnMass = 70; //in kg
var johnHeight = 1.5; // in meters
var mark1 = (markHeight * markHeight);
var john1 = (johnHeight * johnHeight);
var BMI1 = markMass / mark1;
var BMI2 = johnMass / john1;
console.log(mark1, john1);
console.log(BMI1, BMI2);

if (BMI1 > BMI2) {
    console.log('Mark\'s BMI is Higher than John\'s');
} else {
    console.log('John\'s BMI is Higher than Mark\'s');
}
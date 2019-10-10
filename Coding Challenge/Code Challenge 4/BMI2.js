 var john = {
    firstName: 'John',
    lastName: 'Carter',
    mass: 92, //in kg
    height:1.95, //in meters
    CalcBmi: function(){
       this.bmi = this.mass / (this.height*this.height);
       return this.bmi
   }
 };

 var Harry = {
    firstName: 'Harry',
    lastName: 'Potter',
    mass: 82, //in kg
    height:1.5, //in meters
    CalcBmi: function(){
       this.bmi = this.mass / (this.height*this.height);
       return this.bmi
   }
 };

john.CalcBmi();
Harry.CalcBmi();
console.log(john , Harry);

if (john.bmi > Harry.bmi) {
   console.log(john.firstName + " has higher BMI than Harry" + john.CalcBmi());
} else if (Harry.bmi > john.bmi) {
   console.log(  Harry.firstName + " has higher BMI than John " + Harry.CalcBmi());
} else{
   console.log("IT\'s A DRAWW!!!");
}
 
 //Scoping of Global and Local Variables
 
 var a = 'Hello ';
 first();

 function first(){
     var b = 'Here';
     second();
    
     function second() {
         var c = 'inside';
         third()
     }
 }
 //Since third function is outside the other fucntion it will not be able to access the local variable
 function third() {
     var d = 'I\'m Outisde';
     console.log(a + b + c + d);
     
 }

  
 
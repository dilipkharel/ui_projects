"use strict";

/*
class Calculator
{
    private float x;
    
}

*/

var xResults; //= calculatorObj.testingOutput();


 

function Calculator()
{
    var x;
    var y;
    
    //Mutators
    this.setX=function(valx){
        x=valx; 
    }
    
    this.setY=function(valy){
        y=valy;
    }
    
    //Accessors
    this.getX=function(){
        return x;
    }
    
    this.getY=function(){
        return y;
    }
    
    this.add =function(){
        return x+y;
    }
    
    this.substract =function(){
        return x-y;
    }
    
    this.multiply =function(){
        return x*y;
    }
    
    this.divide =function(){
        return x/y;
    }
    
    this.testingOutput = function(){
        console.log("Addition = " +this.add());
        console.log("Substraction = " +this.substract());
        console.log("Multiplication = " +this.multiply());
        console.log("Division = " +this.divide());
         
    }
    
}

var calculatorObj = new Calculator();
calculatorObj.setX(3);
calculatorObj.setY(2);

xResults = "CONSOLE OUTPUT  <br>";
xResults +="X = "+calculatorObj.getX();
xResults +="<br> Y = "+calculatorObj.getY();

calculatorObj.testingOutput();

xResults += "Addition = " +calculatorObj.add();
 xResults += "<br> Substraction = " +calculatorObj.substract();
 xResults += "<br> Multiplication = " +calculatorObj.multiply();
 xResults += "<br> Division = " +calculatorObj.divide();

console.log(xResults);


var results = function(paramResults){

  //  document.getElementById("results").innerHTML = "test";
    document.getElementById('results').innerHTML= paramResults;
    
}

results(xResults);
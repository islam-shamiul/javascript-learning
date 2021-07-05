'use strict';
/*function clacAge(birthYear){
    const age = 2037-birthYear;

    function printAge(){
        let output = `${firstName} you are ${age},born in ${birthYear}`
        console.log(output);

        if (birthYear >=1991 && birthYear <= 1996)
        {   //creating new variable with same name as outer scope
            const firstName = 'steven';
            //reassigning outer scope variable value
            output = 'NEW OUTPUT';
            var millenial = true
            const str = `oh you are a millenial, ${firstName}`;
            console.log(str);
            function add (a,b){
                return a+b;
            }
            add(2,3);
        }
        
        console.log(millenial);
        console.log(output);
    }
    printAge();

    return age;
}

const firstName = 'Jonas';
clacAge(1991)*/

//hoisting with variables
 console.log(me);
 //console.log(job);
 //console.log(year);

 var me = 'Jonas';
 const job = "teache";
 let year = "1991";

 //hoisting with functions
 console.log(addDec(2,3));
 //console.log(addExp(2,3));
 //console.log(addArrow(2,3));

 function addDec(a,b){
     return a+b;
 }

 const addExp = function(a,b){
     return a+b;
 }

 const addArrow =(a,b)=>a+b;

 //example of var variable error 
if(!numProducts)deletShoppingCart()

 var numProducts = 10;

 function deletShoppingCart(){
     console.log('All products deleted!');
 }

 var x =1;
 let y= 2;
 const z= 3;

 console.log(x===window.x);
 console.log(y===window.y);
 console.log(z===window.z);

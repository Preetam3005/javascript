let score = "33";  
console.log(typeof score) //string
let numberinScore = Number(score) // while type conversion ,  datatype starts with capital 
console.log( typeof numberinScore) //number
console.log(numberinScore)  //33



let isLoggedIn = 1 ; 
let value  = Boolean(isLoggedIn)  ; 
console.log(value); //true 
/*
 if isLoggedIn  == 0  => value  =  false  , 
 suppose  ,  isLoggedIn = ""  (Empty string) => value =  false
 but suppose isloggedIn = "Preetam" or any string with length>0  => value = true  ; 
 */

 

const accountId = 144553
let accountEmail = "preetamdutta3005asusdell@gmail.com"
var accountPassword = "12345"
accountCity = "Kolkata"
// accountId = 2     // not allowed
accountEmail= "preetamduttajee2023@gmail.com"
accountPassword = "21212121"
accountCity = "Mumbai"

let accountState ; 
// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);
/*
Prefer not to use var
because of issue in block scope and functional scope  
 */
console.table([accountEmail , accountId , accountPassword , accountCity , accountState]) ; 

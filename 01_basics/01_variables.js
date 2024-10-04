const accountId = 144553
let accountEmail = "satyajeet@google.com"
var accountPassword = "12345"
accountCity = "pune"
let accountState;

// accountId = 2 // not allowed


accountEmail = "sc@sc.com"
accountPassword = "21212121"
accountCity = "mumbai"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])